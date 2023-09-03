import { useNProgress } from "@tanem/react-nprogress";

import { ProgressBar, ProgressContainer } from ".";

export const Progress = ({ isAnimating }) => {
  const { animationDuration, isFinished, progress } = useNProgress({
    isAnimating
  });

  // console.log(animationDuration, isFinished, progress);

  return (
    <ProgressContainer
      isFinished={isFinished}
      animationDuration={animationDuration}
    >
      <ProgressBar progress={progress} animationDuration={animationDuration} />
    </ProgressContainer>
  );
};
