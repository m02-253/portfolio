import { JSX, useCallback, useRef, useState } from 'react';
import { Box, Center, Text } from '@chakra-ui/react';
import niigataPref from '../../public/prefectures/niigata.png';
import { HandyNextImage } from '@/components/images/handyNextImage';
import { ImHere } from '@/components/career/movementHistory/imHere';

type XYCoordinates = Record<'x' | 'y', number>;
const shibataCoordinates: XYCoordinates = { x: 200, y: 90 };
const nagaokaCoordinates: XYCoordinates = { x: 150, y: 170 };
const niigataCoordinates: XYCoordinates = { x: 180, y: 100 };

export const Career = (): JSX.Element => {
  const imageSize = '18rem'; // 新潟県画像の縦幅かつ横幅

  // スクロールされたとき、記事に対応する座標を変更する
  const [mapCoordinates, setMapCoordinates] =
    useState<XYCoordinates>(shibataCoordinates);

  const careerBoxRef = useRef<HTMLDivElement>(null);
  const handleScroll = useCallback(() => {
    if (!careerBoxRef.current) return;
    const { scrollTop, clientHeight } = careerBoxRef.current;
    const seenIndex = Math.floor(scrollTop / clientHeight);
    switch (seenIndex) {
      case 0:
        setMapCoordinates(shibataCoordinates);
        break;
      case 1:
        setMapCoordinates(nagaokaCoordinates);
        break;
      case 2:
        setMapCoordinates(nagaokaCoordinates);
        break;
      case 3:
        setMapCoordinates(niigataCoordinates);
        break;
      default:
        return;
    }
  }, []);

  return (
    <Center>
      <Center w={'min(100vw, 68rem)'} h={'100vh'} flexDirection={'row'}>
        <Box position={'relative'} w={imageSize} h={imageSize}>
          <ImHere coordinates={mapCoordinates} />
          {/*<ImHere coordinates={{ x: 150, y: 170 }} />*/}
          <HandyNextImage
            boxProps={{
              width: imageSize,
              height: imageSize,
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
          gap={'1px'}
          onScroll={handleScroll}
          ref={careerBoxRef}
        >
          <Text h={imageSize} scrollSnapAlign={'start'}>
            中学時代まで新発田で過ごす
          </Text>
          <Text h={imageSize} scrollSnapAlign={'start'}>
            長岡で高専、大学に行く
          </Text>
          <Text h={imageSize} scrollSnapAlign={'start'}>
            大学院時代にITスタートアップの共同創業者となる
          </Text>
          <Text h={imageSize} scrollSnapAlign={'start'}>
            大学院時代に共同創業した会社を新潟市に移し、通勤するようになる
          </Text>
        </Box>
      </Center>
    </Center>
  );
};
