import { JSX } from 'react';
import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export const ImHere = (): JSX.Element => {
  return (
    <Box position={'relative'}>
      {/* 真ん中の赤点 */}
      <Box
        position={'absolute'}
        bgColor={'red'}
        w={'10px'}
        h={'10px'}
        borderRadius={'full'}
        zIndex={1}
      />

      {/* 広がっていく赤線 */}
      <motion.div
        style={{
          position: 'absolute',
          borderRadius: '1000rem',
          borderWidth: '1px',
          borderColor: 'red',
          zIndex: 2,
        }}
        initial={{ opacity: 1, width: '10px', height: '10px' }}
        animate={{ opacity: 0, width: '30px', height: '30px' }}
        transition={{ repeat: Infinity, duration: 2 }}
      ></motion.div>
    </Box>
  );
};
