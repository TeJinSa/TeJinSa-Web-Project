import React, { useRef } from 'react';

interface Props {
  children: JSX.Element | JSX.Element[];
  close: () => void;
}

const FullModal = ({ children, close }: Props) => {
  const modalRef = useRef<HTMLDivElement>(null);

  return (
    <div className="" ref={modalRef}>
      <div
        className="fixed top-0 left-0 right-0 bottom-0 bg-overlay backdrop-blur-sm"
        onClick={close}
        role="presentation"
      />
      <div className="transform-center w-fit rounded-lg bg-white p-4 shadow-lg">{children}</div>
    </div>
  );
};

export default FullModal;
