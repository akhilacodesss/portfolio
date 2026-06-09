import useInView from "../../hooks/useInView";

export default function Up({
  children,
  delay = 0,
  style = {},
}) {
  const [ref, vis] = useInView();

  return (
    <div
      ref={ref}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis
          ? "none"
          : "translateY(28px)",
        transition: `opacity .85s ease ${delay}s, transform .85s cubic-bezier(.16,1,.3,1) ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}