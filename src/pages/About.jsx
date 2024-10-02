import React from "react";
import {
  Box,
  Image,
  Text,
  VStack,
  Progress,
  Heading,
  useColorMode,
} from "@chakra-ui/react";

const About = () => {
  const { colorMode } = useColorMode(); // Get the current color mode (dark or light)

  return (
    <Box p={12}>
      <VStack spacing={4} align="flex-start">
        <Image
          src="public\pfp.jpeg"
          alt="Profile Picture"
          borderRadius="full"
          boxSize="200px"
          objectFit="cover"
        />

        <Text p={1}></Text>

        <Text
          fontSize="lg"
          color={colorMode === "dark" ? "gray.200" : "gray.800"}
        >
          As a senior software engineering student, My dedication to excellence
          is evident in the projects I've undertaken, each showcasing my unique
          skills and passion for technology. I aim to make a lasting impression
          by highlighting not just what I've done, but the innovative ways I've
          approached each challenge
        </Text>
        <Text
          fontSize="lg"
          color={colorMode === "dark" ? "gray.200" : "gray.800"}
        >
          My enthusiasm for full-stack development, machine learning, and
          artificial intelligence drives me to delve deep into both the
          theoretical and practical aspects of these fields. I enjoy crafting
          seamless user experiences while also building robust back-end systems.
          Exploring the frontiers of AI and machine learning, I'm excited about
          the potential these technologies have to transform industries.
        </Text>
        <Text
          fontSize="lg"
          color={colorMode === "dark" ? "gray.200" : "gray.800"}
        >
          Eager to learn, grow, and develop, I view every opportunity as a
          chance to expand my horizons. I'm committed to continuous improvement,
          always seeking out new challenges that push my abilities to the next
          level. My forward-looking mindset and passion for technology position
          me as a dynamic individual ready to make a significant impact.
        </Text>
        <Heading
          size="md"
          mt={8}
          color={colorMode === "dark" ? "gray.200" : "gray.800"}
        >
          Skills
        </Heading>
        <Box width="100%">
          <Text color={colorMode === "dark" ? "gray.200" : "gray.800"}>
            JavaScript
          </Text>
          <Progress value={90} size="sm" colorScheme="gray" />

          <Text color={colorMode === "dark" ? "gray.200" : "gray.800"}>
            Python
          </Text>
          <Progress value={75} size="sm" colorScheme="gray" />

          <Text color={colorMode === "dark" ? "gray.200" : "gray.800"}>
            Java
          </Text>
          <Progress value={85} size="sm" colorScheme="gray" />

          <Text color={colorMode === "dark" ? "gray.200" : "gray.800"}>
            Node.js
          </Text>
          <Progress value={70} size="sm" colorScheme="gray" />

          <Text color={colorMode === "dark" ? "gray.200" : "gray.800"}>
            Express.js
          </Text>
          <Progress value={75} size="sm" colorScheme="gray" />

          <Text color={colorMode === "dark" ? "gray.200" : "gray.800"}>
            React.js
          </Text>
          <Progress value={85} size="sm" colorScheme="gray" />

          <Text color={colorMode === "dark" ? "gray.200" : "gray.800"}>
            SQL
          </Text>
          <Progress value={70} size="sm" colorScheme="gray" />

          <Text color={colorMode === "dark" ? "gray.200" : "gray.800"}>
            PyTorch
          </Text>
          <Progress value={70} size="sm" colorScheme="gray" />
        </Box>
      </VStack>
    </Box>
  );
};

export default About;
