import { useRef } from "react";

const useFullScreen = () => {
  const element = useRef();
  const triggerFullScreen = () => {
    if (element.current) {
      element.current.requestFullscreen();
    }
  };
  return { element, triggerFullScreen };
};
export default useFullScreen;
