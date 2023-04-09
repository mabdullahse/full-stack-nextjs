import clsx from "clsx";
import { FC, StyleHTMLAttributes } from "react";

interface IGlassPlane {
    children: React.ReactNode,
    className: React.CSSProperties | String
}
const GlassPane: FC<IGlassPlane> = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "glass rounded-2xl border-solid border-2 border-gray-200",
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassPane;