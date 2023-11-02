import { Dispatch, SetStateAction, createContext, useState } from "react";
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import { ReactComponent as ArrowBackIcon } from "../../assets/icons/arrowBack.svg";

export type TMenu = "main" | "settings" | "animals";
export type THeight = "auto" | number;

export type TMenuContextValue = {
  activeMenu: TMenu;
  setActiveMenu: Dispatch<SetStateAction<TMenu>>;
  setHeight: Dispatch<SetStateAction<THeight>>;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
};
export type TMenuContext = null | TMenuContextValue;
export const MenuContext = createContext<TMenuContext>(null);
export const NoMenuContextErrMsg = "No React Context provided for Menu";

interface DropdownMenuProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const transitionDuration = 100;

export default function DropdownMenuWrapper({
  isOpen,
  setIsOpen,
}: DropdownMenuProps) {
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
      <MenuContext.Provider
        value={{
          activeMenu,
          setActiveMenu,
          setHeight,
          setIsMenuOpen: setIsOpen,
        }}
      >
        <Menu name="main" nameToShow="Main">
          <MenuItem
            LeftIcon={ArrowBackIcon}
            navigateTo="settings"
            text="Go to settings"
          />
        </Menu>

        <Menu
          name="settings"
          nameToShow="Settings"
          backButton={{ navigateTo: "main", text: "Main" }}
        >
          <MenuItem text="Go to main" navigateTo="main" />
          <MenuItem text="Go to animals" navigateTo="animals" />
        </Menu>

        <Menu
          name="animals"
          nameToShow="Animals"
          backButton={{ navigateTo: "settings", text: "Settings" }}
        >
          <MenuItem closeMenuOnClick text="This is an animals menu item" />
        </Menu>
      </MenuContext.Provider>
    </div>
  );
}
