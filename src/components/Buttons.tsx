import React, { useState } from "react";
import ReactDOMServer from "react-dom/server";
import { Toast } from "./Toast";
import { useBackgroundStore } from "../store/backgroundStore";

interface ButtonsProps {
  component: React.ReactElement;
  name: string;
}

const Buttons: React.FC<ButtonsProps> = ({ component, name }) => {
  const { setBackgroundName } = useBackgroundStore();

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const copyToClipboard = async () => {
    try {
      const code = ReactDOMServer.renderToStaticMarkup(component);
      await navigator.clipboard.writeText(code);
      setToastMessage("Code copied to clipboard!");
      setShowToast(true);
    } catch (err) {
      console.error("Failed to copy:", err);
      setToastMessage("Failed to copy code to clipboard");
      setShowToast(true);
    }
  };

  const handlePreview = () => {
    try {
      const code = ReactDOMServer.renderToStaticMarkup(component);
      setBackgroundName(name);
      localStorage.setItem("selectedBackground", code);
      localStorage.setItem("selectedBackgroundName", name);
      setToastMessage("Background applied! Scroll to top to see it.");
      setShowToast(true);
      // Dispatch custom event to notify Welcome component
      window.dispatchEvent(new CustomEvent("backgroundChanged", {
        detail: { backgroundName: name }
      }));
    } catch (err) {
      console.error("Failed to preview:", err);
      setToastMessage("Failed to apply background");
      setShowToast(true);
    }
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={handlePreview}
        className="rounded-md bg-white cursor-pointer px-2 py-1 text-xs font-medium text-gray-700 shadow-sm backdrop-blur-md hover:bg-white/60 ease-in-out duration-300"
      >
        preview
      </button>
      <button
        onClick={copyToClipboard}
        className="rounded-md cursor-pointer bg-white px-2 py-1 text-xs font-medium text-gray-700 shadow-sm backdrop-blur-md hover:bg-white/60 ease-in-out duration-300"
      >
        copy code
      </button>
      <Toast 
        message={toastMessage} 
        show={showToast} 
        onClose={() => setShowToast(false)} 
      />
    </div>
  );
};

export default Buttons;