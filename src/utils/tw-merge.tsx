import clsx, { ClassValue } from "clsx";
import { twMerge as _tw } from "tailwind-merge";

function twMerge(...classNames: ClassValue[]) {
  return _tw(clsx(...classNames));
}

const tm = twMerge;

export default tm;
