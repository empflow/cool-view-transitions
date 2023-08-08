import { useState } from "react";
import arrowBack from "/arrowBack.svg";

interface DropdownMenuProps {
  isOpen: boolean;
}

type Menu = "main" | "settings" | "animals";

export default function DropdownMenu({ isOpen }: DropdownMenuProps) {
  const [activeMenu, setActiveMenu] = useState<Menu>("main");
  const [menuHeight, setMenuHeight] = useState<"auto" | number>("auto");

  return (
    <div
      className={`${
        isOpen
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-1 pointer-events-none"
      } bg-slate-100 w-[300px] overflow-hidden rounded border border-slate-400 p-2 absolute top-[65px] duration-normal`}
      style={{ height: menuHeight }}
    >
      {activeMenu === "main" && <MainMenu />}
      {activeMenu === "settings" && <SettingsMenu />}
      {activeMenu === "animals" && <AnimalsMenu />}
    </div>
  );

  function MainMenu() {
    return (
      <div className="flex hover:bg-slate-200 flex-col gap-2">
        <div className="font-bold text-lg">Main menu</div>
        <button onClick={() => setActiveMenu("settings")}>
          go to settings
        </button>
      </div>
    );
  }
  function SettingsMenu() {
    return (
      <div className="flex hover:bg-slate-200 flex-col gap-2">
        <div className="font-bold text-lg">Settings menu</div>
        <button onClick={() => setActiveMenu("main")}>go to main</button>
        <button onClick={() => setActiveMenu("animals")}>go to animals</button>
      </div>
    );
  }
  function AnimalsMenu() {
    return (
      <div className="flex hover:bg-slate-200 flex-col gap-2">
        <div className="font-bold text-lg">Animals menu</div>
        <button onClick={() => setActiveMenu("settings")}>
          go to settings
        </button>
      </div>
    );
  }
}
