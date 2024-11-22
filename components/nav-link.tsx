import { cn } from "@/lib/classnames";
import Link from "next/link";

export const NavLink = ({
  active,
  href,
  children,
}: {
  active?: boolean;
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    className={cn(active ? "text-blue-600" : "text-gray-600", "underline")}
    href={href}
  >
    {children}
  </Link>
);
