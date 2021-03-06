import { Text, Heading, keyframes, Flex, Box, HStack } from '@chakra-ui/react';
import { fadeInLeft, fadeInRight } from 'react-animations';

import Page from '@/components/Page';
import Content from '@/components/Content';
import Image from '@/components/Image';
import IconList from '@/components/IconList';
import Resume from '@/components/Resume';

import { icons } from '@/utils/fixtures';

const App = () => {
  const fadeLeft = keyframes`${fadeInLeft}`;
  const fadeRight = keyframes`${fadeInRight}`;
  const imageAnim = `1s ${fadeLeft} ease`;
  const textAnim = `1s ${fadeRight} ease`;

  return (
    <Page>
      <Content home>
        <Flex
          justify={['center', 'space-between']}
          alignItems="center"
          direction={[
            'column-reverse',
            'column-reverse',
            'column-reverse',
            'row',
          ]}
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
            py={[10, 10, 10, 0]}
            alignItems="center"
            justify={['', '', '', 'center']}
            animation={textAnim}
          >
            <Box px={[5, 5, 5, 20]}>
              <Heading fontWeight="normal" fontSize={['3xl', '4xl']} mb={5}>
                hello
              </Heading>
              <Text mb={3} fontSize={['sm']}>
                my name is bo peng and i graduated from new york university with
                a bachelors in computer science.
              </Text>
              <Text mb={3} fontSize={['sm']}>
                currently i am a software engineer focused on building scaled
                full stack applications using React, Redux, and Node while
                contributing to open source tools and side projects.
              </Text>
              <HStack spacing={3} mt={10}>
                <IconList icons={icons} size={6} />
                <Resume />
              </HStack>
            </Box>
          </Flex>
        </Flex>
      </Content>
    </Page>
  );
};

export default App;
