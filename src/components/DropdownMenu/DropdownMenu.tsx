import { CSSTransition } from "react-transition-group";
import DropdownMenuItem from "./DropdownMenuItem";
import arrowForwardIcon from "/arrowForward.svg";
import arrowBackIcon from "/arrowBack.svg";
import { useState } from "react";

type ActiveMenu = "main" | "settings";

interface DropdownMenuProps {
  isOpen: boolean;
}

export default function DropdownMenu({ isOpen }: DropdownMenuProps) {
  const [activeMenu, setActiveMenu] = useState<ActiveMenu>("main");

  return (
    <>
      <button onClick={() => setActiveMenu("main")}>main</button>
      <button onClick={() => setActiveMenu("settings")}>settings</button>
      <div
        className={`${
          isOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-1"
        } bg-white border w-[300px] shadow-lg border-gray-400 rounded p-2 absolute top-[51px] overflow-hidden`}
      >
        <CSSTransition
          in={activeMenu === "main"}
          unmountOnExit
          timeout={300}
          classNames={"dropdown-menu"}
        >
          <DropdownMenuItem
            rightIcon={arrowForwardIcon}
            leftIcon={arrowBackIcon}
          >
            menu item
          </DropdownMenuItem>
        </CSSTransition>

        <CSSTransition
          in={activeMenu === "settings"}
          unmountOnExit
          timeout={300}
          classNames={"dropdown-menu"}
        >
          <DropdownMenuItem
            rightIcon={arrowForwardIcon}
            leftIcon={arrowBackIcon}
          >
            settings menu item
          </DropdownMenuItem>
        </CSSTransition>
      </div>
    </>
  );
}
