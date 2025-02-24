import { useEffect, useState } from "react";
import Github from "../icons/Github";
import { useBackgroundStore } from "../store/backgroundStore";

function Info() {
  const { backgroundName } = useBackgroundStore();
  const [localStorageBackgroundName, setLocalStorageBackgroundName] = useState<
    string | null
  >(null);

  useEffect(() => {
    const storedName = localStorage.getItem("selectedBackgroundName");
    setLocalStorageBackgroundName(storedName);
  }, []);

  const isDark =
    backgroundName.includes("Dark") ||
    (localStorageBackgroundName !== null &&
      localStorageBackgroundName.includes("Dark") &&
      !backgroundName.includes("Dark")) ||
    (backgroundName === "" && localStorageBackgroundName === null);

  return (
    <div className="flex flex-col gap-5 items-center">
      <div className="md:w-[40rem]">
        <p
          className={
            isDark
              ? "text-xl text-gray-200 mb-2 text-center"
              : "text-xl text-gray-700 mb-2 text-center"
          }
        >
          Collection of modern, high quality backgrounds
        </p>
        <p
          className={
            isDark
              ? "md:text-lg text-gray-300 text-center"
              : "md:text-lg text-gray-500 text-center"
          }
        >
          Ready-to-use, simply copy and paste into your next project. All
          snippets crafted with Tailwind CSS and Vanilla CSS for easy
          integration.
        </p>
      </div>
      <a
        href="https://github.com/elrincondeldev/backgrounds-hub"
        target="_blank"
        className={
          isDark
            ? "flex items-center gap-2 text-lg text-gray-700 bg-gray-200 px-4 py-2 rounded-md hover:text-gray-900"
            : "flex items-center gap-2 text-lg text-gray-700 hover:text-gray-900 px-4 py-2 rounded-md"
        }
      >
        <Github width={20} height={20} color="#fff" />
        Star on Github
      </a>
    </div>
  );
}

export default Info;
