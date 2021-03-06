import { Container, Heading } from '@chakra-ui/react';

import Page from '@/components/Page';
import Content from '@/components/Content';

const Projects = () => {
  const path = 'resume';

  return (
    <Page name={path} path={`/${path}`}>
      <Content>
        <Container p={0} maxW="960px">
          <Heading fontWeight="normal" fontSize={['2xl', '2xl', '3xl']}>
            resume
          </Heading>
        </Container>
      </Content>
    </Page>
  );
};

export default Projects;
