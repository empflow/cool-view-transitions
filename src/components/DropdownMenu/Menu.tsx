import { useContext, useEffect, useRef } from "react";
import { MenuContext } from "./DropdownMenuWrapper";

interface MenuProps {
  name: string;
  nameToShow: string;
  children: React.ReactNode;
}

export default function Menu({ children, name, nameToShow }: MenuProps) {
  const menuContext = useContext(MenuContext);
  if (!menuContext) {
    throw new Error("No context provided for Menu");
  }

  const { activeMenu, setHeight } = menuContext;
  const menuRef = useRef<HTMLDivElement>(null);
  const isMenuVisible = activeMenu === name;

  useEffect(() => {
    if (isMenuVisible) setHeight(menuRef.current?.offsetHeight ?? "auto");
  }, [activeMenu]);

  if (!isMenuVisible) return null;
  return (
    <div ref={menuRef} className="flex flex-col gap-2">
      <div className="font-bold text-lg">{nameToShow}</div>
      {children}
    </div>
  );
}
