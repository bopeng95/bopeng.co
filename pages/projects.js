import { Container, Heading } from '@chakra-ui/react';

import Page from '@/components/Page';
import Content from '@/components/Content';
// import ProjectList from '@/components/ProjectList';
import ProjectList from '@/components/ProjectList/AccordionList';

import { projects } from '@/utils/fixtures';

const Projects = () => {
  const path = 'projects';

  return (
    <Page name={path} path={`/${path}`}>
      <Content scrollBar>
        <Container p={0} maxW="960px">
          <Heading fontWeight="normal" fontSize={['2xl', '2xl', '3xl']}>
            projects
          </Heading>
          <ProjectList projects={projects} />
        </Container>
      </Content>
    </Page>
  );
};

export default Projects;
