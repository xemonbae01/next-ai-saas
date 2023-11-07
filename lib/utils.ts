import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

//why using cn because it's marge with tailwind class and custom class and do not create and conflict
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}
