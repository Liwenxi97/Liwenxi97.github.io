import { Box, Divider, Text } from '@chakra-ui/react';

const Footer = () => (
  <Box as="footer" py={10}>
    <Divider mb={6} />
    <Text fontSize="sm" color="gray.600" textAlign="center">
      © {new Date().getFullYear()} Wenxi Li. All rights reserved.
    </Text>
  </Box>
);

export default Footer;
