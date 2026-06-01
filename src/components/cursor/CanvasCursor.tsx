import type { JSX } from "react";
import useCanvasCursor from "../../hooks/useCanvasCursor";

const CanvasCursor = (): JSX.Element => {
  useCanvasCursor();
  return (
    <canvas
      id="canvas"
      className="pointer-events-none fixed inset-0 z-9999 hidden lg:block"
    />
  );
};

export default CanvasCursor;
