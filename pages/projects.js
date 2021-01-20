import { Text } from '@chakra-ui/react';

import Page from '@/components/Page';
import Content from '@/components/Content';

const Projects = () => {
  const path = 'projects';

  return (
    <Page name={path} path={`/${path}`}>
      <Content>
        <Text>projects</Text>
      </Content>
    </Page>
  );
};

export default Projects;
