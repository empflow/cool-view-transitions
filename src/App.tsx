import { useState } from "react";
import ProfileMenuIcon from "./components/ProfileMenuIcon/ProfileMenuIcon";
import DropdownMenu from "./components/DropdownMenu/DropdownMenu";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main>
      <header className="flex items-center px-4 justify-end h-[60px] border-b border-gray-400">
        <ProfileMenuIcon {...{ setIsMenuOpen }} />
        <DropdownMenu isOpen={isMenuOpen} />
      </header>
    </main>
  );
}

export default App;
