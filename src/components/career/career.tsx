import { JSX } from 'react';
import { Box, Center, Text } from '@chakra-ui/react';
import niigataPref from '../../public/prefectures/niigata.png';
import { HandyNextImage } from '@/components/images/handyNextImage';

export const Career = (): JSX.Element => {
  const contentHeight = '12rem';

  return (
    <Center w={'100vw'} h={'100vh'} flexDirection={'row'}>
      <HandyNextImage
        boxProps={{ width: '40%', height: contentHeight }}
        imageProps={{ src: niigataPref, alt: 'niigata-pref' }}
      />
      <Box
        w={'50%'}
        overflowY={'scroll'}
        scrollBehavior={'smooth'}
        h={contentHeight}
        scrollSnapType={'y mandatory'}
      >
        <Text h={contentHeight} scrollSnapAlign={'start'}>
          経歴1
        </Text>
        <Text h={contentHeight} scrollSnapAlign={'start'}>
          経歴2
        </Text>
        <Text h={contentHeight} scrollSnapAlign={'start'}>
          経歴3
        </Text>
      </Box>
    </Center>
  );
};
