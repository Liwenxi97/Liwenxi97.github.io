import { Badge, Box, Flex, Link, Text } from '@chakra-ui/react';

interface PaperProps {
  title: string;
  authors: string;
  venue: string;
  year: string;
  type: string;
  url?: string;
}

const Paper = ({ title, authors, venue, year, type, url }: PaperProps) => {
  const titleContent = (
    <Text as="span" fontWeight="bold">
      {title}
    </Text>
  );

  return (
    <Box py={3} borderBottomWidth="1px" borderColor="gray.100">
      <Flex align="flex-start" justify="space-between" gap={4}>
        <Box>
          {url ? (
            <Link href={url} isExternal color="teal.700" _hover={{ textDecoration: 'underline' }}>
              {titleContent}
            </Link>
          ) : (
            titleContent
          )}
          <Text fontSize="sm" color="gray.700" mt={1}>
            {authors}. {year}. <Text as="span" fontStyle="italic">{venue}.</Text>
          </Text>
        </Box>
        <Badge colorScheme="teal" flexShrink={0}>{type}</Badge>
      </Flex>
    </Box>
  );
};

export default Paper;
