import { JSX, useMemo, useRef } from 'react';
import { Box } from '@chakra-ui/react';
import { useAnimationFrame } from 'framer-motion';

type Props = {
  coordinates: { x: number; y: number };
};

export const ImHere = (props: Props): JSX.Element => {
  // 定数
  const animationDurationSec = 0.5;
  const pointSize = 10;
  const rippleSpreadTo = 30;

  // リプルの位置
  type TopLeft = Record<
    'beforeTop' | 'beforeLeft' | 'afterTop' | 'afterLeft',
    number
  >;
  const topLeft = useMemo<TopLeft>(() => {
    const afterOffset = -(rippleSpreadTo - pointSize) / 2; // 拡大に伴い、この分だけずれる
    return {
      beforeTop: props.coordinates.y,
      beforeLeft: props.coordinates.x,
      afterTop: props.coordinates.y + afterOffset,
      afterLeft: props.coordinates.x + afterOffset,
    };
  }, [props.coordinates.x, props.coordinates.y]);

  // リプルのアニメーション
  const rippleBoxRef = useRef<HTMLDivElement>(null);
  useAnimationFrame((time) => {
    if (!rippleBoxRef.current) return;
    // 初期状態のときの値にbeforeFactorをかけて、
    // 完了状態のときの値にafterFactorをかけて、それらの和を取ると、time[ms]時点での値になる。
    const afterFactor = (time / 1000 / animationDurationSec) % 1;
    const beforeFactor = 1 - afterFactor;

    const size = beforeFactor * pointSize + afterFactor * rippleSpreadTo;
    rippleBoxRef.current.style.width = `${size}px`;
    rippleBoxRef.current.style.height = `${size}px`;

    const top =
      beforeFactor * topLeft.beforeTop + afterFactor * topLeft.afterTop;
    const left =
      beforeFactor * topLeft.beforeLeft + afterFactor * topLeft.afterLeft;
    rippleBoxRef.current.style.top = `${top}px`;
    rippleBoxRef.current.style.left = `${left}px`;

    const opacity = beforeFactor.toString();
    rippleBoxRef.current.style.opacity = opacity;
  });

  return (
    <Box position={'relative'}>
      {/* 真ん中の赤点 */}
      <Box
        position={'absolute'}
        bgColor={'red'}
        w={`${pointSize}px`}
        h={`${pointSize}px`}
        borderRadius={'full'}
        zIndex={1}
        top={topLeft.beforeTop}
        left={topLeft.beforeLeft}
      />

      {/* 広がっていく赤線 */}
      <Box
        ref={rippleBoxRef}
        position={'absolute'}
        borderRadius={'full'}
        borderWidth={'2px'}
        borderColor={'red'}
        opacity={1}
        width={`${pointSize}px`}
        height={`${pointSize}px`}
        top={`${topLeft.beforeTop}px`}
        left={`${topLeft.beforeLeft}px`}
        zIndex={2}
      />
    </Box>
  );
};
