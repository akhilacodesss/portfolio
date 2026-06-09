import { useEffect, useRef, useState } from "react";

export default function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const ob = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVis(true);
          ob.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) ob.observe(ref.current);

    return () => ob.disconnect();
  }, [threshold]);

  return [ref, vis];
}