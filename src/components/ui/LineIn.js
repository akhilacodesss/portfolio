import useInView from "../../hooks/useInView";

export default function LineIn({
  children,
  delay = 0,
  as: Tag = "div",
  style = {},
}) {
  const [ref, vis] = useInView();

  return (
    <div
      ref={ref}
      style={{
        overflow: "hidden",
        ...style,
      }}
    >
      <Tag
        style={{
          display: "block",
          transform: vis
            ? "none"
            : "translateY(108%)",
          transition: `transform 1s cubic-bezier(.16,1,.3,1) ${delay}s`,
        }}
      >
        {children}
      </Tag>
    </div>
  );
}