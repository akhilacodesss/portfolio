import { useEffect, useRef } from "react";
import { C } from "../styles/tokens";

export default function Cursor() {
  const outer = useRef(null);
  const inner = useRef(null);

  const mouse = useRef({
    x: -100,
    y: -100,
  });

  const lerpd = useRef({
    x: -100,
    y: -100,
  });

  const big = useRef(false);
  const raf = useRef(null);

  useEffect(() => {
    const onMove = ({
      clientX: x,
      clientY: y,
    }) => {
      mouse.current = { x, y };
    };

    const onOver = (e) => {
      big.current = !!e.target.closest(
        "a,button,[data-c]"
      );
    };

    window.addEventListener(
      "mousemove",
      onMove
    );

    window.addEventListener(
      "mouseover",
      onOver
    );

    const loop = () => {
      lerpd.current.x +=
        (mouse.current.x -
          lerpd.current.x) *
        0.11;

      lerpd.current.y +=
        (mouse.current.y -
          lerpd.current.y) *
        0.11;

      if (inner.current) {
        inner.current.style.transform =
          `translate(${mouse.current.x - 4}px,${mouse.current.y - 4}px)`;
      }

      if (outer.current) {
        const s = big.current
          ? 1.9
          : 1;

        outer.current.style.transform =
          `translate(${lerpd.current.x - 18}px,${lerpd.current.y - 18}px) scale(${s})`;

        outer.current.style.borderColor =
          big.current
            ? C.rose
            : C.copper;
      }

      raf.current =
        requestAnimationFrame(loop);
    };

    raf.current =
      requestAnimationFrame(loop);

    return () => {
      window.removeEventListener(
        "mousemove",
        onMove
      );

      window.removeEventListener(
        "mouseover",
        onOver
      );

      cancelAnimationFrame(
        raf.current
      );
    };
  }, []);

  return (
    <>
      <div
        ref={inner}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: C.copper,
          zIndex: 9999,
          pointerEvents: "none",
          willChange: "transform",
        }}
      />

      <div
        ref={outer}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 36,
          height: 36,
          borderRadius: "50%",
          border: `1.5px solid ${C.copper}`,
          zIndex: 9998,
          pointerEvents: "none",
          willChange: "transform",
          transition:
            "transform .12s cubic-bezier(.16,1,.3,1), border-color .3s",
          opacity: 0.4,
        }}
      />
    </>
  );
}