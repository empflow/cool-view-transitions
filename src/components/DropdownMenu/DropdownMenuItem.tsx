interface DropdownItemProps {
  leftIcon?: string;
  rightIcon?: string;
  iconSize?: number;
  className?: string;
  children: React.ReactNode;
}

export default function DropdownMenuItem({
  iconSize,
  leftIcon,
  rightIcon,
  children,
  className,
}: DropdownItemProps) {
  const defaultIconSize = 20;
  iconSize = iconSize ?? defaultIconSize;

  return (
    <div
      className={`${
        className ?? ""
      } flex items-center hover:cursor-pointer hover:bg-gray-100 rounded p-2`}
    >
      <img width={iconSize} height={iconSize} src={leftIcon} />
      <div>{children}</div>
      <img
        width={iconSize}
        className="ml-auto"
        height={iconSize}
        src={rightIcon}
      />
    </div>
  );
}
