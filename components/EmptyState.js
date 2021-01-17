import { VStack, Text, useColorModeValue } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const EmptyState = (props) => {
  const { message, sub } = props;
  const router = useRouter();

  const goHome = () => router.push('/');
  const hoverColor = useColorModeValue('black', 'white');

  return (
    <VStack justify="center" alignItems="center" minH="404px">
      <Text fontSize={['4xl', '6xl']}>{message}</Text>
      {sub && (
        <Text
          fontSize={['lg', '2xl']}
          onClick={goHome}
          cursor="pointer"
          color="gray.400"
          _hover={{ color: hoverColor }}
          transition="0.5s color"
        >
          {sub}
        </Text>
      )}
    </VStack>
  );
};

export default EmptyState;
