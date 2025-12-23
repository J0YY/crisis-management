import { useEffect, useRef, useState } from "react";

export const useKeySequence = (target: string, onMatch: () => void) => {
  const buffer = useRef("");
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      const next = (buffer.current + event.key).slice(-target.length);
      buffer.current = next;
      if (next.toLowerCase() === target.toLowerCase()) {
        setIsActive(true);
        onMatch();
        setTimeout(() => setIsActive(false), 2000);
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onMatch, target]);

  return isActive;
};

