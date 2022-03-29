import React from 'react'

export default function Collection() {
    return <TextInputWithFocusButton/>
}

function TextInputWithFocusButton() {
    const inputEl = React.useRef(null);
    const onButtonClick = () => {
      // `current` points to the mounted text input element
      inputEl.current.focus();
    };
    return (
      <div className="flex-[1_1_auto] flex flex-col justify-center items-center">
        <input ref={inputEl} type="text" />
        <button onClick={onButtonClick}>Focus the input</button>
      </div>
    );
  }
