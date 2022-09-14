import { useState } from "react";

const useInput = (init, validator) => {
  const [value, setValue] = useState(init);
  let willUpdate = true;
  const onChange = (event) => {
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) setValue(event.target.value);
  };

  return { value, onChange };
};
export default useInput;
