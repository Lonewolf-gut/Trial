import React, { useEffect, useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
}

export default FocusInput;
// This component demonstrates how to use the useRef hook to focus an input element when the component mounts. The useEffect hook is used to call the focus method on the input element after it has been rendered.
