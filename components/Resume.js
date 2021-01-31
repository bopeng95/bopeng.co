import { Link } from '@chakra-ui/react';

const Resume = () => (
  <Link
    href="/resume.pdf"
    isExternal
    fontWeight="bold"
    p="4px 16px"
    border="1px solid"
    borderColor="green.500"
    color="green.500"
    borderRadius="5px"
    _hover={{ background: 'green.500', color: 'white' }}
    _focus={{}}
  >
    resume
  </Link>
);

export default Resume;
