import { clsx } from "clsx";

export function cn(...inputs: any[]) {
  return clsx(inputs);
}

export function formatMonthYear(isoDate: string) {
  if (/^\d{4}$/.test(isoDate)) return isoDate;
  const d = new Date(isoDate);
  if (Number.isNaN(d.getTime())) return isoDate;
  return d.toLocaleDateString(undefined, { year: "numeric", month: "short" });
}
