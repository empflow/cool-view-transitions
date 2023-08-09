import { Dispatch, SetStateAction, createContext, useState } from "react";
import Menu from "./Menu";

export type TMenu = "main" | "settings" | "animals";
export type THeight = "auto" | number;

export type TMenuContextValue = null | {
  activeMenu: TMenu;
  setActiveMenu: Dispatch<SetStateAction<TMenu>>;
  setHeight: Dispatch<SetStateAction<THeight>>;
};
export const MenuContext = createContext<TMenuContextValue>(null);

interface DropdownMenuProps {
  isOpen: boolean;
}

export default function DropdownMenuWrapper({ isOpen }: DropdownMenuProps) {
  const [activeMenu, setActiveMenu] = useState<TMenu>("main");
  const [height, setHeight] = useState<THeight>("auto");

  return (
    <div
      className={`${
        isOpen
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-1 pointer-events-none"
      } bg-slate-100 box-content w-[300px] rounded border border-slate-400 p-2 absolute top-[65px] duration-fast`}
      style={{ height }}
    >
      <MenuContext.Provider value={{ activeMenu, setActiveMenu, setHeight }}>
        <Menu name="main" nameToShow="Main">
          <button onClick={() => setActiveMenu("settings")}>
            go to settings
          </button>
        </Menu>

        <Menu
          name="settings"
          nameToShow="Settings"
          backButton={{ navigateTo: "main", text: "Main" }}
        >
          <button onClick={() => setActiveMenu("main")}>go to main</button>
          <button onClick={() => setActiveMenu("animals")}>
            go to animals
          </button>
        </Menu>

        <Menu name="animals" nameToShow="Animals">
          <button onClick={() => setActiveMenu("settings")}>
            go to settings
          </button>
        </Menu>
      </MenuContext.Provider>
    </div>
  );
}
