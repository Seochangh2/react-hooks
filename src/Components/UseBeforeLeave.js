import { useEffect } from "react";

const useBeforeLeave = (onBefore) => {
  const handle = () => {
    onBefore();
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
  if (typeof onBefore !== "function") {
    return;
  }
};
export default useBeforeLeave;
