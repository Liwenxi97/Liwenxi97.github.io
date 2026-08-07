import {
  Avatar,
  Badge,
  Box,
  ChakraProvider,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Link,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { BiCheckCircle } from 'react-icons/bi';
import { FaEnvelope, FaExternalLinkAlt } from 'react-icons/fa';

import AvatarWenxi from './assets/Avatar_wenxi.jpeg';
import Award from './components/Award';
import Footer from './components/Footer';
import Paper from './components/Paper';

type ResearchItem = {
  title: string;
  organization: string;
  description: string;
  highlights: string[];
  link?: { label: string; url: string };
};

type ResearchTheme = {
  title: string;
  items: ResearchItem[];
};

const researchThemes: ResearchTheme[] = [
  {
    title: 'Computational Modeling of Language Acquisition and Cognitive Development',
    items: [
      {
        title: 'Child Language Acquisition',
        organization: 'Peking University | University of Cambridge',
        description:
          'I use language models as controllable virtual learners to study how linguistic knowledge can emerge from limited, developmentally plausible input.',
        highlights: [
          'Control structural and semantic cues in the learning input to identify the contribution of different information sources.',
          'Compare the acquisition order and generalization patterns of language models and children to reveal shared mechanisms and fundamental differences.',
        ],
      },
      {
        title: 'English Interlanguage',
        organization: 'Peking University | University of Cambridge',
        description:
          'I investigate how English learners build dynamic linguistic representations through the interaction of experience, first-language transfer, and cognitive processing.',
        highlights: [
          'Develop a unified representation framework for standard English and learner interlanguage, tracing development from typical instances to complex rules.',
          'Inject knowledge from different developmental stages into controlled virtual learners and compare their production and behavior with human learners.',
        ],
      },
    ],
  },
  {
    title: 'Universality in Language and Cognition',
    items: [
      {
        title: 'Mandarin Meaning Bank',
        organization: 'Peking University | University of Cambridge',
        description:
          'This project develops a graph-based syntax–semantics interface for Mandarin and provides a formal basis for studying knowledge representation and compositional meaning.',
        highlights: [
          'Designed Mandarin annotation guidelines grounded in dynamic semantics and compositionality, together with supporting annotation tools.',
          'Translated theoretical hypotheses about meaning representation and composition into an operational computational model.',
        ],
        link: {
          label: 'Visit Mandarin Meaning Bank',
          url: 'https://mandarinmeaningbank.github.io/',
        },
      },
      {
        title: 'Universal Semantic Tagging',
        organization: 'Peking University | University of Cambridge',
        description:
          'I study whether languages share stable foundational semantic categories and how language-specific differences shape the conceptualization of events, entities, properties, and relations.',
        highlights: [
          'Adapted universal semantic tags to Mandarin while balancing language-specific properties with cross-linguistic comparability.',
          'Achieved inter-annotator agreement of 92.9% and 91.2% on English and Mandarin data; the resulting automatic tagger improved accuracy over prior work by 7.7%.',
        ],
      },
      {
        title: 'Probing Multilingual Semantic Parsers',
        organization: 'Peking University | University of Cambridge',
        description:
          'I examine how language-specific syntax and functional elements affect semantic understanding and cross-lingual transfer in multilingual language models.',
        highlights: [
          'Built and analyzed parallel data pairing Mandarin syntax with English semantic information.',
          'Found that cross-linguistic differences in functional elements are a major source of difficulty for multilingual semantic parsing and designed controlled translation-based experiments to study their effects.',
        ],
      },
    ],
  },
  {
    title: 'Comparing Language Models with Human Language Intelligence',
    items: [
      {
        title: 'Structural Knowledge',
        organization: 'Alibaba DAMO Academy',
        description:
          'I investigate whether human syntactic knowledge can serve as an inductive bias that helps language models develop more robust relational reasoning.',
        highlights: [
          'Designed a dependency-based kernel for constructing syntactic similarity matrices between sentence pairs.',
          'Injected the matrices into self-attention and observed overall performance gains across a range of GLUE tasks.',
        ],
      },
      {
        title: 'Discourse Knowledge',
        organization: 'Alibaba DAMO Academy',
        description:
          'I study how people and language models integrate information across sentences, identify discourse relations, and construct coherent meaning representations.',
        highlights: [
          'Analyzed Penn Discourse Treebank instances using linguistic and cognitive-processing features.',
          'Compared model and human behavior on implicit relations, ambiguous connectives, and long-distance contextual dependencies.',
        ],
      },
    ],
  },
];

const publications = [
  {
    title: 'Basic Terminology for Artificial Intelligence Corpora',
    authors: 'Ministry of Education of the People’s Republic of China and National Language Commission',
    venue: 'National Language Standard GF 0031—2026',
    year: '2026',
    type: 'Standard',
    url: 'http://www.moe.gov.cn/jyb_sjzl/ziliao/A19/202604/t20260407_1433016.html',
  },
  {
    title: 'On the Continued Value of Universal Dependencies in the Era of Large Language Models',
    authors: 'Wenxi Li and Jingyu Peng',
    venue: 'Proceedings of the 64th Annual Meeting of the Association for Computational Linguistics',
    year: '2026',
    type: 'Conference',
    url: 'https://aclanthology.org/2026.acl-long.803/',
  },
  {
    title: 'Measuring and Evaluating Syntactic Distance Across Languages Using Universal Dependencies',
    authors: 'Wenxi Li',
    venue: 'Journal of Quantitative Linguistics',
    year: '2025',
    type: 'Journal',
    url: 'https://www.tandfonline.com/doi/full/10.1080/09296174.2025.2569581',
  },
  {
    title: 'Compositional Syntactico-SemBanking for English as a Second or Foreign Language',
    authors: 'Wenxi Li, Xihao Wang, and Weiwei Sun',
    venue: 'Findings of the 63rd Annual Meeting of the Association for Computational Linguistics',
    year: '2025',
    type: 'Conference',
    url: 'https://aclanthology.org/2025.findings-acl.1252/',
  },
  {
    title: 'Referentialization in Mandarin Chinese: A Generative Typology Perspective',
    authors: 'Wenxi Li and Weiwei Sun',
    venue: 'Linguistic Sciences',
    year: '2025',
    type: 'Journal',
    url: 'https://journal15.magtechjournal.com/Jwk_yykx/CN/10.7509/j.linsci.202404.036068',
  },
  {
    title: 'UG-Schematic Annotation for Event Nominals: A Case Study in Mandarin Chinese',
    authors: 'Wenxi Li, Yutong Zhang, Guy Emerson, and Weiwei Sun',
    venue: 'Computational Linguistics',
    year: '2023',
    type: 'Journal',
    url: 'https://aclanthology.org/2024.cl-2.3/',
  },
  {
    title: 'Digital Practices in Linguistics: Dynamic and Continuous Categorization of Semi-modal Verbs in Mandarin Chinese',
    authors: 'Wenxi Li',
    venue: 'Proceedings of the 4th International Conference on Natural Language Processing, 336–340',
    year: '2022',
    type: 'Conference',
    url: 'https://ieeexplore.ieee.org/document/9885999',
  },
  {
    title: 'Universal Semantic Tagging for English and Mandarin Chinese',
    authors: 'Wenxi Li, Yiyang Hou, Yajie Ye, Li Liang, and Weiwei Sun',
    venue: 'NAACL-HLT, 5554–5566',
    year: '2021',
    type: 'Conference',
    url: 'https://aclanthology.org/2021.naacl-main.440',
  },
  {
    title: 'Comparison and Sense Induction of Temporal Adverbs Reng and Hai: A Corpus-Based Study',
    authors: 'Wenxi Li',
    venue: 'Chinese Lexical Semantics Workshop, 371–385',
    year: '2020',
    type: 'Conference',
    url: 'https://doi.org/10.1007/978-3-030-81197-6_31',
  },
  {
    title: 'Learner-Based and Learner-Context-Based Factors in Lexical Transfer: An Analysis of the Influence of Dongxiang and Chinese on Learners’ English as a Third Language',
    authors: 'Wenxi Li',
    venue: 'Journal of Foreign Language Teaching and Translation Studies, 5(2), 65–86',
    year: '2020',
    type: 'Journal',
    url: 'https://doi.org/10.22034/efl.2020.233566.1043',
  },
  {
    title: 'Evaluating the Effectiveness of Linguistic Knowledge in Pretrained Language Models: A Case Study of Universal Dependencies',
    authors: 'Wenxi Li',
    venue: 'arXiv preprint',
    year: 'Preprint',
    type: 'Preprint',
    url: 'https://arxiv.org/abs/2506.04887',
  },
  {
    title: 'Towards Linguistically Informed Representations for English as a Second or Foreign Language: Review, Construction and Application',
    authors: 'Wenxi Li, Xihao Wang, and Weiwei Sun',
    venue: 'arXiv preprint',
    year: 'Preprint',
    type: 'Preprint',
    url: 'https://arxiv.org/abs/2604.09008',
  },
];

const presentations = [
  {
    title: 'On the Continued Value of Universal Dependencies in the Era of Large Language Models',
    event: '64th Annual Meeting of the Association for Computational Linguistics (ACL 2026)',
    location: 'San Diego, USA',
  },
  {
    title: 'Language Theory and Language Models',
    detail: 'Joint tutorial with Weidong Zhan and Weiwei Sun',
    event: '24th China National Conference on Computational Linguistics (CCL 2025)',
    location: 'Jinan, China',
  },
  {
    title: 'UG-Schematic Annotation for Event Nominals: A Case Study in Mandarin Chinese',
    event: '62nd Annual Meeting of the Association for Computational Linguistics (ACL 2024)',
    location: 'Bangkok, Thailand',
  },
  {
    title: 'Universal Semantic Tagging for English and Mandarin Chinese',
    event: '2021 Conference of the North American Chapter of the Association for Computational Linguistics (NAACL 2021)',
    location: 'Online',
  },
];

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <Box as="section" py={{ base: 7, md: 9 }}>
    <Heading fontSize={{ base: '2xl', md: '3xl' }} mb={6}>
      {title}
    </Heading>
    {children}
  </Box>
);

const ResearchCard = ({ item }: { item: ResearchItem }) => (
  <Box borderWidth="1px" borderColor="gray.200" borderRadius="lg" p={{ base: 5, md: 6 }}>
    <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" gap={2} mb={3}>
      <Heading as="h4" fontSize="lg">
        {item.title}
      </Heading>
      <Text color="gray.600" fontSize="sm" fontWeight="semibold">
        {item.organization}
      </Text>
    </Flex>
    <Text color="gray.700" fontSize="sm" mb={3}>
      {item.description}
    </Text>
    <List spacing={2}>
      {item.highlights.map((highlight) => (
        <ListItem key={highlight} display="flex" alignItems="flex-start" fontSize="sm">
          <ListIcon as={BiCheckCircle} color="teal.500" mt="3px" />
          <Text>{highlight}</Text>
        </ListItem>
      ))}
    </List>
    {item.link && (
      <Link
        href={item.link.url}
        isExternal
        display="inline-flex"
        alignItems="center"
        gap={2}
        mt={4}
        color="teal.600"
        fontSize="sm"
        fontWeight="semibold"
      >
        {item.link.label} <FaExternalLinkAlt aria-hidden />
      </Link>
    )}
  </Box>
);

export default function App() {
  return (
    <ChakraProvider>
      <Container maxW="7xl" px={{ base: 5, md: 10 }}>
        <Box as="header" py={{ base: 10, md: 16 }}>
          <Flex direction={{ base: 'column-reverse', md: 'row' }} align={{ md: 'center' }} gap={{ base: 7, md: 12 }}>
            <Box flex="1">
              <Text color="teal.600" fontWeight="bold" letterSpacing="wide" textTransform="uppercase" mb={2}>
                Computational Linguistics · Language and Cognition
              </Text>
              <Heading as="h1" fontSize={{ base: '4xl', md: '6xl' }} mb={4}>
                Wenxi Li
              </Heading>
              <Divider mb={5} />
              <Text color="gray.700" lineHeight="tall" maxW="4xl">
                I am a computational linguist. My work combines linguistic theory, cognitive perspectives, corpus annotation, and controlled computational modeling to understand how linguistic knowledge is represented, learned, and transferred across languages.
              </Text>
              <Wrap mt={5} spacing={4}>
                <WrapItem>
                  <Link href="mailto:liwenxi@pku.edu.cn" color="teal.600" fontWeight="semibold">
                    <HStack spacing={2}>
                      <FaEnvelope aria-hidden />
                      <Text>liwenxi@pku.edu.cn</Text>
                    </HStack>
                  </Link>
                </WrapItem>
              </Wrap>
            </Box>
            <Avatar size="2xl" src={AvatarWenxi} name="Wenxi Li" />
          </Flex>
        </Box>

        <Section title="Education">
          <Stack spacing={5}>
            <Box>
              <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" gap={1}>
                <HStack spacing={3}>
                  <Text fontWeight="bold">Peking University</Text>
                  <Badge colorScheme="teal">PhD</Badge>
                </HStack>
                <Text fontWeight="semibold">Beijing, China</Text>
              </Flex>
              <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" gap={1} mt={1}>
                <Text fontSize="sm">Modern Chinese, specializing in Chinese Information Processing</Text>
                <Text fontSize="sm" fontStyle="italic">September 2019 – June 2024</Text>
              </Flex>
            </Box>
            <Box>
              <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" gap={1}>
                <HStack spacing={3}>
                  <Text fontWeight="bold">University of Cambridge</Text>
                  <Badge colorScheme="teal">Visiting Student</Badge>
                </HStack>
                <Text fontWeight="semibold">Cambridge, UK</Text>
              </Flex>
              <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" gap={1} mt={1}>
                <Text fontSize="sm">Natural Language Processing, Department of Computer Science and Technology</Text>
                <Text fontSize="sm" fontStyle="italic">September 2021 – September 2022</Text>
              </Flex>
            </Box>
            <Box>
              <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" gap={1}>
                <HStack spacing={3}>
                  <Text fontWeight="bold">Peking University</Text>
                  <Badge colorScheme="teal">BA</Badge>
                </HStack>
                <Text fontWeight="semibold">Beijing, China</Text>
              </Flex>
              <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" gap={1} mt={1}>
                <Text fontSize="sm">Chinese Language, Department of Chinese Language and Literature</Text>
                <Text fontSize="sm" fontStyle="italic">September 2015 – June 2019</Text>
              </Flex>
            </Box>
          </Stack>
        </Section>

        <Section title="Research Projects">
          <Stack spacing={9}>
            {researchThemes.map((theme) => (
              <Box key={theme.title}>
                <Heading as="h3" fontSize="xl" color="teal.700" mb={4}>
                  {theme.title}
                </Heading>
                <Stack spacing={4}>
                  {theme.items.map((item) => (
                    <ResearchCard key={item.title} item={item} />
                  ))}
                </Stack>
              </Box>
            ))}
          </Stack>
        </Section>

        <Section title="Publications">
          <Stack spacing={1}>
            {publications.map((publication) => (
              <Paper key={publication.title} {...publication} />
            ))}
          </Stack>
        </Section>

        <Section title="Selected Presentations">
          <Stack spacing={5}>
            {presentations.map((presentation) => (
              <Box key={presentation.title}>
                <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" gap={1}>
                  <HStack align="flex-start">
                    <Text fontWeight="bold">{presentation.title}</Text>
                    <Badge colorScheme="teal" mt="2px">Oral</Badge>
                  </HStack>
                  <Text fontWeight="semibold">{presentation.location}</Text>
                </Flex>
                {presentation.detail && <Text fontSize="sm" color="gray.600">{presentation.detail}</Text>}
                <Text fontSize="sm" color="gray.700">{presentation.event}</Text>
              </Box>
            ))}
          </Stack>
        </Section>

        <Section title="Honors & Awards">
          <Stack spacing={2}>
            <Award title="National Scholarship for Doctoral Students" desc="China’s highest-level national scholarship" year="2023" />
            <Award title="Academic Innovation Award" desc="Peking University individual distinction" year="2023" />
            <Award title="Principal’s Scholarship" desc="Peking University’s highest honorary graduate scholarship, received for three consecutive years" year="2020, 2021, 2022" />
            <Award title="Fuqing Yang–Yangyuan Wang Academician Scholarship" desc="Peking University annual scholarship" year="2021" />
            <Award title="Second-Class Scholarship" desc="Peking University annual scholarship" year="2020" />
            <Award title="Outstanding Graduate of Beijing" desc="The highest distinction for graduates in Beijing" year="2019" />
            <Award title="Guanghua Scholarship" desc="Peking University annual scholarship" year="2018" />
            <Award title="National Scholarship for Undergraduate Students" desc="China’s highest-level national scholarship" year="2017" />
            <Award title="Second Prize, 26th Challenge Cup of Peking University" desc="First author" year="2017" />
            <Award title="Leo Koguan Scholarship" desc="Peking University annual scholarship" year="2016" />
          </Stack>
        </Section>

        <Section title="Additional Information">
          <VStack align="stretch" spacing={3}>
            <Text><Text as="span" fontWeight="bold">Academic service:</Text> Reviewer for NeurIPS, AAAI, ACL, EMNLP, and other international conferences.</Text>
            <Text><Text as="span" fontWeight="bold">Programming:</Text> Python, Java, JavaScript, TypeScript, and LaTeX.</Text>
            <Text><Text as="span" fontWeight="bold">Frameworks:</Text> PyTorch, React, Flask, and Node.js.</Text>
            <Text><Text as="span" fontWeight="bold">Languages:</Text> Native Mandarin Chinese; fluent English (TOEFL 110); basic reading knowledge of German.</Text>
          </VStack>
        </Section>

        <Footer />
      </Container>
    </ChakraProvider>
  );
}
