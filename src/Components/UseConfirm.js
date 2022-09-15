const useConfirm = (message = "", callback, rejection) => {
  if (callback && typeof callback !== "function") {
    return;
  }
  if (rejection && typeof rejection !== "function") {
    return;
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
      console.log("dsds");
      callback();
    } else {
      rejection();
    }
  };
  return confirmAction;
};
export default useConfirm;
