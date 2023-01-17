import React, { useCallback, useState } from 'react';
import { usePopper } from 'react-popper';

interface Props {
  trigger: JSX.Element;
  content: JSX.Element;
}

const Popper = ({ trigger, content }: Props) => {
  const [popperTrigger, setpopperTrigger] = useState<HTMLDivElement | null>(null);
  const [popper, setPopper] = useState<HTMLDivElement | null>(null);
  const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null);
  const [viewPopper, setViewPopper] = useState(false);
  const { styles, attributes } = usePopper(popperTrigger, popper, {
    modifiers: [{ name: 'arrow', options: { element: arrowElement } }],
    placement: 'top',
  });

  const handlePopperTriggerHover = useCallback(() => setViewPopper((prev) => !prev), []);
  return (
    <div
      ref={setpopperTrigger}
      className="text-sm hover:underline"
      onMouseEnter={handlePopperTriggerHover}
      onMouseLeave={handlePopperTriggerHover}
    >
      {trigger}
      <div
        ref={setPopper}
        className={`${viewPopper ? 'absolute' : 'hidden'}`}
        style={styles.popper}
        {...attributes.popper}
      >
        {content}
        <div ref={setArrowElement} style={styles.arrow} />
      </div>
    </div>
  );
};

export default Popper;
