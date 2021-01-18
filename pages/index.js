import { Heading, Text, keyframes, Flex, Box } from '@chakra-ui/react';
import { fadeInDown, fadeInRight } from 'react-animations';

import Content from '@/components/Content';
import Image from '@/components/Image';

const App = () => {
  const fadeDown = keyframes`${fadeInDown}`;
  const fadeRight = keyframes`${fadeInRight}`;
  const imageAnim = `1s ${fadeDown} ease`;
  const textAnim = `1s ${fadeRight} ease`;

  return (
    <Content home>
      <Flex
        justify={['center', 'space-between']}
        alignItems="center"
        direction={['column', 'column', 'column', 'row']}
      >
        <Flex w={['100%']}>
          <Image
            src="/me.jpg"
            alt="me"
            animation={imageAnim}
            description="dia:beacon"
          />
        </Flex>
        <Flex
          w={['100%']}
          minH="200px"
          alignItems="center"
          justify={['', '', '', 'center']}
          animation={textAnim}
        >
          <Box>
            <Heading mb={5}>hello world</Heading>
            <Text>my name is bo peng</Text>
            <Text>welcome to my website</Text>
          </Box>
        </Flex>
      </Flex>
    </Content>
  );
};

export default App;
