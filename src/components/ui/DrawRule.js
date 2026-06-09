import useInView from "../../hooks/useInView";
import { C } from "../../styles/tokens";

export default function DrawRule({
  delay = 0,
  color = C.ghost,
}) {
  const [ref, vis] = useInView();

  return (
    <div
      ref={ref}
      style={{
        height: 1,
        background: color,
        transformOrigin: "left",
        transform: vis
          ? "scaleX(1)"
          : "scaleX(0)",
        transition: `transform 1.2s cubic-bezier(.16,1,.3,1) ${delay}s`,
      }}
    />
  );
}