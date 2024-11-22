import { twMerge } from "tailwind-merge";
import { clsx, ClassValue } from "clsx";

export const cn = (...arg: ClassValue[]) => twMerge(clsx(arg));
