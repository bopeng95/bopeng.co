import { VStack, Text, useColorModeValue } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import Content from '@/components/Content';

const NotFound = () => {
  const router = useRouter();

  const goHome = () => router.push('/');
  const hoverColor = useColorModeValue('black', 'white');

  return (
    <Content>
      <VStack justify="center" alignItems="center" minH="404px">
        <Text fontSize={['4xl', '6xl']}>page not found</Text>
        <Text
          fontSize={['lg', '2xl']}
          onClick={goHome}
          cursor="pointer"
          color="gray.400"
          _hover={{ color: hoverColor }}
          transition="0.5s color"
        >
          click here to return back home
        </Text>
      </VStack>
    </Content>
  );
};

export default NotFound;
