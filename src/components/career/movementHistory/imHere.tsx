import { JSX, useMemo } from 'react';
import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

type Props = {
  coordinates: { x: number; y: number };
};

export const ImHere = (props: Props): JSX.Element => {
  const pointSize = 10;
  const rippleSpreadTo = 30;

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
      <motion.div
        style={{
          position: 'absolute',
          borderRadius: rippleSpreadTo,
          borderWidth: '2px',
          borderColor: 'red',
          zIndex: 2,
        }}
        initial={{
          opacity: 1,
          width: pointSize,
          height: pointSize,
          top: `${topLeft.beforeTop}px`,
          left: `${topLeft.beforeLeft}px`,
        }}
        animate={{
          opacity: 0,
          width: rippleSpreadTo,
          height: rippleSpreadTo,
          top: `${topLeft.afterTop}px`,
          left: `${topLeft.afterLeft}px`,
        }}
        transition={{ repeat: Infinity, duration: 2 }}
      />
    </Box>
  );
};
