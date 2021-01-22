import { Container, Text } from '@chakra-ui/react';

import Page from '@/components/Page';
import Content from '@/components/Content';

const Resume = () => {
  const path = 'projects';

  return (
    <Page name={path} path={`/${path}`}>
      <Content>
        <Container p={0}>
          <Text>resume</Text>
        </Container>
      </Content>
    </Page>
  );
};

export default Resume;
