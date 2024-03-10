import React, { FC, ReactNode } from "react";

const Button: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <button
      className={`title_element default-box  text-3xl cursor-pointer custom-button  bg-primary px-[.5em] py-2 text-white font-bold rounded-xl ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
