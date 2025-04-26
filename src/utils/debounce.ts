import { useRef } from "react";

export function useDebounce<T extends (...args: any[]) => void>(
  func: T,
  delay: number
) {
  const timerRef = useRef<number | null>(null);

  const debouncedFn = (...args: Parameters<T>) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = window.setTimeout(() => {
      func(...args);
      timerRef.current = null;
    }, delay);
  };

  return debouncedFn;
}
