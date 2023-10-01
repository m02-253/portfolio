import { JSX } from 'react';
import { Box, Center, Text } from '@chakra-ui/react';
import niigataPref from '../../public/prefectures/niigata.png';
import { HandyNextImage } from '@/components/images/handyNextImage';
import { ImHere } from '@/components/career/movementHistory/imHere';

export const Career = (): JSX.Element => {
  const imageSize = '18rem'; // 新潟県画像の縦幅かつ横幅
  return (
    <Center w={'100vw'} h={'100vh'} flexDirection={'row'}>
      <Box position={'relative'} w={imageSize} h={imageSize}>
        <ImHere />
        <HandyNextImage
          boxProps={{
            width: imageSize,
            height: imageSize,
            bgColor: 'yellow',
          }}
          imageProps={{ src: niigataPref, alt: 'niigata-pref' }}
        />
      </Box>

      <Box
        w={`calc(100% - ${imageSize})`}
        overflowY={'scroll'}
        scrollBehavior={'smooth'}
        h={imageSize}
        scrollSnapType={'y mandatory'}
        bgColor={'cyan'}
      >
        <Text h={imageSize} scrollSnapAlign={'start'}>
          経歴1
        </Text>
        <Text h={imageSize} scrollSnapAlign={'start'}>
          経歴2
        </Text>
        <Text h={imageSize} scrollSnapAlign={'start'}>
          経歴3
        </Text>
      </Box>
    </Center>
  );
};
