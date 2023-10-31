import { useState, useEffect } from "react";
import { useTransition, useSpringRef, easings } from "@react-spring/web";
import styles from "./styles.module.css";
import { animatedPageData } from "./data";
import AnimatedPage from "./AnimatedPage";

export default function App() {
  const [index, setIndex] = useState(0);
  function onClick() {
    setIndex((prev) => {
      if (prev === animatedPageData.length - 1) return 0;
      return prev + 1;
    });
  }

  const api = useSpringRef();
  const transitions = useTransition(index, {
    keys: null,
    ref: api,
    from: { opacity: 1, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 1, transform: "translate3d(-50%,0,0)" },
    config: {
      duration: 500,
      easing: easings.easeOutCubic,
    },
  });

  useEffect(() => {
    api.start();
  }, [index]);

  return (
    <div className={styles.container} onClick={onClick}>
      {transitions((style, i) => {
        const pageDataProps = animatedPageData[i];
        return <AnimatedPage {...pageDataProps} {...{ setIndex, style }} />;
      })}
    </div>
  );
}
