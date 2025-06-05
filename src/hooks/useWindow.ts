import { useState, useEffect } from "react";

export type ScreenTypes = "MOBILE" | "DESKTOP";

export default function useWindow() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [screenType, setScreenType] = useState<ScreenTypes>();
  const [baseUrl, setBaseUrl] = useState<string>("");

  const handlePopup = (uri: string, title: string) => {
    const width = screenType == "DESKTOP" ? 600 : windowSize.width - 50;
    const height = screenType == "DESKTOP" ? 750 : windowSize.height - 50;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;

    window.open(
      uri,
      title,
      `width=${width},height=${height},top=${top},left=${left},resizable=yes,scrollbars=yes,status=yes`
    );
  };

  useEffect(() => {
    if (!window) return;

    setBaseUrl(window.location.origin);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      setScreenType(windowSize.width >= 1024 ? "DESKTOP" : "MOBILE");
    };

    // Atualiza na montagem
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowSize.width]);

  return {
    windowSize,
    screenType,
    baseUrl,
    handlePopup,
  };
}
