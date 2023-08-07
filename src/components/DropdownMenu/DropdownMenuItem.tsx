interface DropdownItemProps {
  leftIcon?: string;
  rightIcon?: string;
  iconSize?: number;
  children: React.ReactNode;
}

export default function DropdownMenuItem({
  iconSize,
  leftIcon,
  rightIcon,
  children,
}: DropdownItemProps) {
  const defaultIconSize = 20;
  iconSize = iconSize ?? defaultIconSize;

  return (
    <div className="flex justify-between items-center">
      <img width={iconSize} height={iconSize} src={leftIcon} />
      <div>{children}</div>
      <img width={iconSize} height={iconSize} src={rightIcon} />
    </div>
  );
}
