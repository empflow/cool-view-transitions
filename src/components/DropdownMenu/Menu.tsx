import { useContext, useEffect, useRef } from "react";
import {
  MenuContext,
  NoMenuContextErrMsg,
  TMenu,
  TMenuContextValue,
} from "./DropdownMenuWrapper";
import { ReactComponent as ArrowBackIcon } from "../../assets/icons/arrowBack.svg";
import throwIfNullOrUndefined from "../../utils/throwIfNullOrUndefined";

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
  throwIfNullOrUndefined(menuContext, { errMsg: NoMenuContextErrMsg });

  const { activeMenu, setHeight, setActiveMenu } =
    menuContext as TMenuContextValue;
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
            className="flex fill-gray-500 text-gray-500 gap-0 items-center text-[0.95rem]"
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
