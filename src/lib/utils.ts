import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function extractYear(originalDate: string) {
  const dateObject = new Date(originalDate);
  const year = dateObject.getFullYear();
  return year;
}
