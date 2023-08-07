import { useState } from "react";
import DropdownMenu from "./components/DropdownMenu/DropdownMenu";
import DropdownMenuItem from "./components/DropdownMenu/DropdownMenuItem";
import arrowForwardIcon from "/arrowForward.svg";
import arrowBackIcon from "/arrowBack.svg";
import ProfileMenuIcon from "./components/ProfileMenuIcon/ProfileMenuIcon";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main>
      <header className="flex items-center px-4 justify-end h-[60px] border-b border-gray-400">
        <ProfileMenuIcon {...{ setIsMenuOpen }} />
        <HeaderDropdownMenu isMenuOpen={isMenuOpen} />
      </header>
    </main>
  );
}

interface HeaderDropdownMenuProps {
  isMenuOpen: boolean;
}

function HeaderDropdownMenu({ isMenuOpen }: HeaderDropdownMenuProps) {
  return (
    <DropdownMenu
      className={`${
        isMenuOpen
          ? "opacity-100 pointer-events-auto translate-y-0"
          : "opacity-0 pointer-events-none -translate-y-1"
      } absolute top-[58px] duration-200`}
    >
      <DropdownMenuItem rightIcon={arrowForwardIcon} leftIcon={arrowBackIcon}>
        menu item
      </DropdownMenuItem>
    </DropdownMenu>
  );
}

export default App;
