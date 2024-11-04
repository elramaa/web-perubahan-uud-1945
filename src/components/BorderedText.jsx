function getBorderStyle(width) {
  switch (width) {
    case "sm":
      return "text-border-sm";
    case "lg":
      return "text-border-sm lg:text-border-lg";
  }
}

export default function BorderedText({ children, borderWidth, className }) {
  return (
    <span
      className={`${getBorderStyle(borderWidth)} ${className}`}
      data-text={children}
    >
      {children}
    </span>
  );
  // return (
  //   <div className={`relative leading-none text-white ${className}`}>
  //     <div className="absolute top-2 left-0 text-black text-border [-webkit-text-stroke-color:black] z-10">
  //       {children}
  //     </div>
  //     <div className="absolute top-0 left-0 text-lightbrick text-border z-20">
  //       {children}
  //     </div>
  //     <div className="relative text-border-none text-white z-30">
  //       {children}
  //     </div>
  //   </div>
  // );
}
