import { Container, Box, Text } from '@chakra-ui/react';

import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

const App = () => {
  const nav = ['about', 'projects', 'medium'];

  return (
    <Container maxW="1280px" p={0}>
      <Sidebar />
      <Header nav={nav} />
      <Box p="50px 16px">
        <Text>hello</Text>
      </Box>
    </Container>
  );
};

export default App;
