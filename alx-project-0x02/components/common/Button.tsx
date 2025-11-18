import { type ButtonProps } from "@/interfaces";

export default function Button({
  children,
  size = "medium",
  shape = "rounded-md",
  onClick,
}: ButtonProps) {
  // Map sizes to Tailwind classes
  const sizeClasses = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  return (
    <button
      onClick={onClick}
      className={`${sizeClasses[size]} bg-blue-600 text-white font-semibold ${shape} hover:bg-blue-700 transition`}
    >
      {children}
    </button>
  );
}
