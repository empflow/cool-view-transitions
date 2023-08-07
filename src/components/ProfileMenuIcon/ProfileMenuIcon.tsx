interface ProfileIconProps {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ProfileMenuIcon({ setIsMenuOpen }: ProfileIconProps) {
  return (
    <div
      onClick={() => setIsMenuOpen((prev) => !prev)}
      className="relative hover:cursor-pointer w-[30px] h-[30px]  rounded-full border border-gray-400 flex justify-center items-center"
    >
      J
    </div>
  );
}
