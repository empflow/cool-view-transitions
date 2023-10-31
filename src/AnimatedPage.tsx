import { AnimatedProps, animated } from "@react-spring/web";
import { CSSProperties, ReactNode } from "react";
import { SetState } from "./types";
import { useDrag } from "@use-gesture/react";

export interface TAnimatedPageProps {
  style: CSSProperties;
  setIndex: SetState<number>;
  content: ReactNode;
  backgroundColor: string;
}

export type TAnimatedPageDataProps = Pick<
  TAnimatedPageProps,
  "content" | "backgroundColor"
>;

export default function AnimatedPage({
  content,
  setIndex,
  style,
  backgroundColor = "white",
}: AnimatedProps<TAnimatedPageProps>) {
  const bindDrag = useDrag(() => {
    console.log("drag");
  });

  return (
    <animated.div {...bindDrag()} style={{ backgroundColor, ...style }}>
      {content}
    </animated.div>
  );
}
