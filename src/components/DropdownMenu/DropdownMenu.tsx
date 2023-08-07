interface DropdownMenuProps {
  className?: string;
  children: React.ReactNode;
}

export default function DropdownMenu({
  className,
  children,
}: DropdownMenuProps) {
  return (
    <div
      className={`${
        className ?? ""
      } bg-white border border-gray-400 rounded p-2`}
    >
      {children}
    </div>
  );
}
