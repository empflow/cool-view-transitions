import { useState } from "react";
import DropdownMenu from "./components/DropdownMenu/DropdownMenu";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main>
      <header className="flex items-center px-4 justify-end h-[60px] border-b border-gray-400">
        <button onClick={() => setIsMenuOpen((prev) => !prev)}>
          Toggle menu
        </button>
        <DropdownMenu isOpen={isMenuOpen} />
      </header>
    </main>
  );
}

export default App;
