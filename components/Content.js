import { Container, Box, useBreakpoint } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';

import Header from '@/components/Header';
import SideScrollBar from '@/components/SideScrollBar';
import Copyright from '@/components/Copyright';

const Content = (props) => {
  const { home = false, scrollBar, children } = props;
  const value = useBreakpoint();

  const maxW = '1280px';

  const title = !home ? 'back' : 'b.';
  const Icon = !home && <ArrowBackIcon />;
  const isXL = value === 'xl';

  return (
    <Container maxW={maxW} p={0} overflowX="hidden">
      {isXL && scrollBar && <SideScrollBar w="6%" />}
      <Header title={title} icon={Icon} maxW={maxW} />
      <Box py="80px" px={['16px']}>
        {children}
      </Box>
      <Copyright />
    </Container>
  );
};

export default Content;
