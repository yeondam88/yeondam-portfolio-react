import React, { useRef } from 'react';
import { useTyped } from '../../hooks/useTyped';

function TypedText({ strings }) {
  const targetElm = useRef(null);
  const options = {
    strings,
    startDelay: 500,
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
    onComplete: self => {
      self.startDelay = 0;
    }
  };

  useTyped(targetElm, options);

  return <span ref={targetElm} />;
}

export default TypedText;
