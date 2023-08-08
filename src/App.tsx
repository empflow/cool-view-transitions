import { useState } from "react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main>
      <header className="flex items-center px-4 justify-end h-[60px] border-b border-gray-400"></header>
    </main>
  );
}

export default App;
