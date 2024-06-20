"use client";
import {
  ForwardRefRenderFunction,
  SetStateAction,
  forwardRef,
  useCallback,
  useEffect,
  useRef,
} from "react";

type OutsideClickProp = {
  children: React.ReactNode;
  setModalShow: (value: SetStateAction<boolean>) => void;
  isModelOpen: boolean;
  className?: string;
};

export default function Modal({
  children,
  setModalShow,
  isModelOpen,
  className,
}: OutsideClickProp) {
  const modalRef = useRef<HTMLDivElement>(null);
  const handleOutsideClick = useCallback(
    (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node))
        setModalShow(false);
    },
    [setModalShow],
  );

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick, true);
    return () => {
      document.removeEventListener("click", handleOutsideClick, true);
    };
  }, [setModalShow, isModelOpen]);

  return (
    <div className={className} ref={modalRef}>
      {children}
    </div>
  );
}
