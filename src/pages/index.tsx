import { JSX } from 'react';
import { Flex } from '@chakra-ui/react';
import { Career } from '@/components/career/career';

const Index = (): JSX.Element => {
  return (
    <Flex direction={'column'}>
      <Career />
    </Flex>
  );
};

export default Index;
