import { useContext, useEffect, useRef } from "react";
import { MenuContext, TMenu } from "./DropdownMenuWrapper";
import { ReactComponent as ArrowBackIcon } from "../../assets/icons/arrowBack.svg";

interface MenuProps {
  name: string;
  nameToShow: string;
  backButton?: {
    text: string;
    navigateTo: TMenu;
  };
  children: React.ReactNode;
}

export default function Menu({
  children,
  name,
  nameToShow,
  backButton,
}: MenuProps) {
  const menuContext = useContext(MenuContext);
  if (!menuContext) {
    throw new Error("No React Context provided for Menu");
  }

  const { activeMenu, setHeight, setActiveMenu } = menuContext;
  const menuRef = useRef<HTMLDivElement>(null);
  const isMenuVisible = activeMenu === name;

  useEffect(() => {
    if (isMenuVisible) setHeight(menuRef.current?.offsetHeight ?? "auto");
  }, [activeMenu]);

  if (!isMenuVisible) return null;
  return (
    <div ref={menuRef} className="flex flex-col gap-2">
      {backButton && (
        <div>
          <button
            className="flex fill-slate-600 text-gray-600 gap-0 items-center text-[0.95rem]"
            onClick={() => setActiveMenu(backButton.navigateTo)}
          >
            <ArrowBackIcon width={15} height={15} />
            {backButton.text}
          </button>
        </div>
      )}

      <div className="font-bold text-xl">{nameToShow}</div>

      <div className="flex flex-col gap-1">{children}</div>
    </div>
  );
}
