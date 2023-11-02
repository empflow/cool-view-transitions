import { ReactElement, createContext, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";

type TBgColor = "red" | "blue";

export default function App() {
  const [bgColor, setBgColor] = useState<TBgColor>("red");
  const [styles, api] = useSpring(() => ({
    from: { backgroundColor: "yellow" },
    to: { backgroundColor: "orange" },
  }));

  // const divPosBind = useDrag(({ offset, movement, velocity: [xVel, yVel] }) => {
  //   const thresholdVel = 3;
  //   if (xVel > thresholdVel || yVel > thresholdVel) setFast(true);
  //   else setFast(false);
  // });

  return (
    <main>
      <animated.div style={styles} className="div"></animated.div>
      <button onClick={() => api.start()}>change</button>
    </main>
  );
}
