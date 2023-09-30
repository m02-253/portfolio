import { ComponentPropsWithoutRef, JSX } from 'react';
import NextImage from 'next/image';
import { Box } from '@chakra-ui/react';

type Props = {
  boxProps?: ComponentPropsWithoutRef<typeof Box>;
  imageProps: ComponentPropsWithoutRef<typeof NextImage>;
};

export const HandyNextImage = (props: Props): JSX.Element => {
  return (
    <Box {...props.boxProps} position={'relative'}>
      <NextImage {...props.imageProps} style={{ objectFit: 'contain' }} fill />
    </Box>
  );
};
