import { Box, Flex, HStack, Icon, Text } from '@chakra-ui/react';
import { VscCircleFilled } from 'react-icons/vsc';

interface AwardProps {
  title: string;
  desc?: string;
  year: string;
}

const Award = ({ title, desc, year }: AwardProps) => (
  <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" gap={{ base: 1, md: 5 }}>
    <HStack align="flex-start">
      <Icon as={VscCircleFilled} color="teal.300" mt="5px" flexShrink={0} />
      <Box>
        <Text as="span" fontWeight="bold">{title}</Text>
        {desc && <Text as="span" color="gray.600"> — {desc}</Text>}
      </Box>
    </HStack>
    <Text fontStyle="italic" flexShrink={0} pl={{ base: 6, md: 0 }}>{year}</Text>
  </Flex>
);

export default Award;
