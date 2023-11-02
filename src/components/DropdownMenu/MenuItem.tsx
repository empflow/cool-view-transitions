import React, { useContext } from "react";
import {
  MenuContext,
  NoMenuContextErrMsg,
  TMenu,
  TMenuContextValue,
  transitionDuration,
} from "./DropdownMenuWrapper";
import throwIfNullOrUndefined from "../../utils/throwIfNullOrUndefined";

interface MenuItemProps {
  LeftIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
  RightIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
  navigateTo?: TMenu;
  onClick?: () => any;
  closeMenuOnClick?: boolean;
  text: string;
}

export default function MenuItem({
  closeMenuOnClick,
  LeftIcon,
  onClick,
  RightIcon,
  navigateTo,
  text,
}: MenuItemProps) {
  const menuContext = useContext(MenuContext);
  throwIfNullOrUndefined(menuContext, { errMsg: NoMenuContextErrMsg });
  if (closeMenuOnClick && navigateTo) {
    const errMsg =
      "Either 'navigateTo' or 'closeMenuOnClick' can be provided, not both";
    throw new Error(errMsg);
  }

  const { setActiveMenu, setIsMenuOpen } = menuContext as TMenuContextValue;

  function clickHandler() {
    if (closeMenuOnClick) {
      setIsMenuOpen(false);
      if (!navigateTo) {
        setTimeout(() => setActiveMenu("main"), transitionDuration);
      }
    }
    if (navigateTo) setActiveMenu(navigateTo);
    if (onClick) onClick();
  }

  return (
    <button className="flex items-center" onClick={clickHandler}>
      <IconWrapper Icon={LeftIcon} />
      <div>{text}</div>
      <IconWrapper className="ml-auto" Icon={RightIcon} />
    </button>
  );

  function IconWrapper({
    Icon,
    className,
  }: {
    Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
    className?: string;
  }) {
    return (
      <>
        {Icon && (
          <div className={className}>
            <Icon width={20} height={20} className="" />
          </div>
        )}
      </>
    );
  }
}
