import { useSpring, animated, config } from "@react-spring/web";
import { useDrag, useWheel } from "@use-gesture/react";
import styles from "./styles.module.css";

function ComplexAnimation() {
  const [spring, api] = useSpring(() => ({
    x: 0,
    y: 0,
    rotate: 0,
    config: config.slow,
  }));

  const bindDivDrag = useDrag(({ movement: [x, y], down }) => {
    if (down) api.start({ x, y });
    else api.start({ x: 0, y: 0 });
  });

  useWheel(
    ({ offset: [_, scrollY] }) => {
      api.start({ rotate: scrollY });
    },
    { target: window }
  );

  return (
    <main className={styles.container}>
      <animated.div {...bindDivDrag()} style={spring} className={styles.card} />
    </main>
  );
}

export default ComplexAnimation;
