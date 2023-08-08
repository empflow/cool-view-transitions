import { useState } from "react";
import arrowBack from "/arrowBack.svg";

interface DropdownMenuProps {
  isOpen: boolean;
}

type View = "main" | "settings" | "animals";
type TransitionDirection = "back" | "forward";

export default function DropdownMenu({ isOpen }: DropdownMenuProps) {
  const [activeView, setActiveView] = useState<View>("main");
  const [navStack, setNavStack] = useState<View[]>([]);
  const [transitionDirection, setTransitionDirection] =
    useState<null | TransitionDirection>(null);

  function changeView(view: View, direction: TransitionDirection) {
    if (direction === "back") {
      setNavStack((prev) => prev.slice(0, -1));
    } else {
      setNavStack((prev) => [...prev, view]);
    }
    setActiveView(view);
    setTransitionDirection(direction);
  }

  return (
    <div
      className={`${
        isOpen
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-1 pointer-events-none"
      } bg-slate-100 w-[300px] rounded border border-slate-400 p-2 absolute top-[65px] duration-normal`}
    >
      <div>
        {navStack.length > 0 && (
          <button>
            <img
              src={arrowBack}
              onClick={() => changeView(navStack[navStack.length - 1], "back")}
              width={20}
              height={20}
            />
          </button>
        )}
      </div>

      <div
        className={`view ${activeView === "main" ? "view-active" : ""} ${
          transitionDirection && transitionDirection === "back"
            ? "slide-in-from-left"
            : "slide-in-from-right"
        }`}
      >
        <button onClick={() => changeView("settings", "forward")}>
          go to settings
        </button>
      </div>

      <div
        className={`view ${activeView === "settings" ? "view-active" : ""} ${
          transitionDirection && transitionDirection === "back"
            ? "slide-in-from-left"
            : "slide-in-from-right"
        }`}
      >
        <div>menu item</div>
      </div>
    </div>
  );
}
