import { useState } from "react";

export const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue)
  const handleToggle = () => {
    setValue((prev) => !prev)
  }


  return [value, handleToggle];
}
