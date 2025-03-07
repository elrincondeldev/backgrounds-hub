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
      window.dispatchEvent(new CustomEvent("backgroundChanged:" + name, {
        detail: { backgroundName: name }
      }));
    } catch (err) {
      console.error("Failed to preview:", err);
      setToastMessage("Failed to apply background");
      setShowToast(true);
    }
  };

  return (
    <>
      <div className="flex flex-row gap-4">
        <button
          className="rounded-md bg-slate-700 px-2 py-1 text-xs font-medium text-white cursor-pointer hover:bg-slate-800 transition-colors"
          onClick={handlePreview}
        >
          preview
        </button>
        <button
          className="rounded-md bg-slate-700 px-2 py-1 text-xs cursor-pointer font-medium text-white hover:bg-slate-800 transition-colors"
          onClick={copyToClipboard}
        >
          copy code
        </button>
      </div>
      <Toast
        message={toastMessage}
        show={showToast}
        onClose={() => setShowToast(false)}
      />
    </>
  );
};

export default Buttons;