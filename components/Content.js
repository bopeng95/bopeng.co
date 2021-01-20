import { Container, Box, useMediaQuery } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';

import Header from '@/components/Header';
import SideScrollBar from '@/components/SideScrollBar';

import useScrollPercentage from '@/hooks/useScrollPercentage';

const Content = (props) => {
  const { home = false, children } = props;
  const [isLargerThan1480] = useMediaQuery('(min-width: 1480px)');
  const value = useScrollPercentage();

  const maxW = '1280px';

  const title = !home ? 'back' : 'b.';
  const Icon = !home && <ArrowBackIcon />;

  return (
    <Container maxW={maxW} p={0} overflowX="hidden">
      {isLargerThan1480 && <SideScrollBar value={value} w="4%" />}
      <Header title={title} icon={Icon} maxW={maxW} />
      <Box p="80px 16px">{children}</Box>
    </Container>
  );
};

export default Content;
