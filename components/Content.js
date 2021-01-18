import { Container, Box } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';

import Header from '@/components/Header';

const Content = (props) => {
  const { home = false, children } = props;

  const title = !home ? 'back' : 'b.';
  const Icon = !home && <ArrowBackIcon />;

  return (
    <Container maxW="1280px" p={0} overflowX="hidden">
      <Header title={title} icon={Icon} />
      <Box p="80px 16px">{children}</Box>
    </Container>
  );
};

export default Content;
