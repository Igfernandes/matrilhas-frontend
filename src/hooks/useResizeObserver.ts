import { useEffect, useRef, useState } from "react";

export function useResizeObserver() {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLTableElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleResize = () => {
      setTimeout(() => {
        setWidth(element.offsetWidth);
      }, 300);
    };

    const resizeObserver = new ResizeObserver(handleResize);

    resizeObserver.observe(element);

    return () => {
      resizeObserver.unobserve(element);
      resizeObserver.disconnect();
    };
  }, []);

  return { ref, width };
}
