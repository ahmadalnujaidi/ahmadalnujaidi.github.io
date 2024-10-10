import React, { useState, useEffect } from "react";
import {
  Box,
  Image,
  Text,
  VStack,
  Heading,
  useColorMode,
  CircularProgress,
  Tooltip,
} from "@chakra-ui/react";

const SkillCard = ({ skill, colorMode }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= skill.value) {
          clearInterval(timer);
          return skill.value;
        }
        return prevProgress + 1;
      });
    }, 20);
    return () => clearInterval(timer);
  }, [skill.value]);

  const cardStyles = {
    borderWidth: "1px",
    borderRadius: "lg",
    overflow: "hidden",
    m: 4,
    p: 6,
    width: "200px",
    textAlign: "center",
    bg: colorMode === "dark" ? "gray.700" : "gray.100",
    transition: "transform 0.3s, box-shadow 0.3s, background 0.3s",
    role: "group",
    _hover: {
      transform: "translateY(-10px)",
      boxShadow: "xl",
      bgGradient: "linear(to-r, teal.500, green.500)",
      color: "white",
    },
  };

  return (
    <Box {...cardStyles}>
      <Text
        fontSize="xl"
        mb={2}
        color={colorMode === "dark" ? "gray.200" : "gray.800"}
        _groupHover={{ color: "white" }}
      >
        {skill.name}
      </Text>
      <Tooltip
        label={`${skill.value}% Proficiency`}
        aria-label={`${skill.name} proficiency`}
      >
        <Box position="relative" display="inline-block">
          <CircularProgress
            value={progress}
            size="120px"
            color="blue.500"
            thickness="8px"
            capIsRound
            trackColor={colorMode === "dark" ? "gray.600" : "gray.200"}
          />
          <Image
            src={skill.logo}
            alt={`${skill.name} Logo`}
            boxSize="60px"
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            transition="transform 0.3s"
            _groupHover={{
              transform: "translate(-50%, -50%) rotate(20deg)",
            }}
          />
        </Box>
      </Tooltip>
    </Box>
  );
};

const About = () => {
  const { colorMode } = useColorMode(); // Get the current color mode (dark or light)

  // Programming Languages Array
  const programmingLanguages = [
    {
      name: "JavaScript",
      value: 90,
      logo: "/logos/javascript.png", // Update with your logo path
    },
    {
      name: "Python",
      value: 75,
      logo: "/logos/python.png", // Update with your logo path
    },
    {
      name: "Java",
      value: 85,
      logo: "/logos/java.png", // Update with your logo path
    },
    {
      name: "SQL",
      value: 70,
      logo: "/logos/sql.png", // Update with your logo path
    },
  ];

  // Frameworks Array
  const frameworks = [
    {
      name: "Node.js",
      value: 70,
      logo: "/logos/nodejs.png", // Update with your logo path
    },
    {
      name: "Express.js",
      value: 75,
      logo: "/logos/expressjs.png", // Update with your logo path
    },
    {
      name: "React.js",
      value: 85,
      logo: "/logos/reactjs.png", // Update with your logo path
    },
    {
      name: "PyTorch",
      value: 70,
      logo: "/logos/pytorch.png", // Update with your logo path
    },
  ];

  return (
    <Box p={12}>
      <VStack spacing={4} align="center">
        {/* Profile Picture */}
        <Image
          src="/pfp.jpeg"
          alt="Profile Picture"
          borderRadius="full"
          boxSize="200px"
          objectFit="cover"
        />

        <Text p={1}></Text>

        {/* Introduction Texts */}
        <Text
          fontSize="lg"
          color={colorMode === "dark" ? "gray.200" : "gray.800"}
        >
          Hello, as a senior software engineering student, my dedication to
          excellence is evident in the projects I've undertaken, each showcasing
          my unique skills and passion for technology. I aim to make a lasting
          impression by highlighting not just what I've done, but the innovative
          ways I've approached each challenge.
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

        {/* Programming Languages Section */}
        <Heading
          size="lg"
          mt={8}
          color={colorMode === "dark" ? "gray.200" : "gray.800"}
          textAlign="center"
        >
          Programming Languages
        </Heading>

        {/* Programming Languages Cards */}
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          mt={4}
          maxWidth="800px"
        >
          {programmingLanguages.map((skill) => (
            <SkillCard key={skill.name} skill={skill} colorMode={colorMode} />
          ))}
        </Box>

        {/* Frameworks Section */}
        <Heading
          size="lg"
          mt={8}
          color={colorMode === "dark" ? "gray.200" : "gray.800"}
          textAlign="center"
        >
          Frameworks
        </Heading>

        {/* Frameworks Cards */}
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          mt={4}
          maxWidth="800px"
        >
          {frameworks.map((skill) => (
            <SkillCard key={skill.name} skill={skill} colorMode={colorMode} />
          ))}
        </Box>
      </VStack>
    </Box>
  );
};

export default About;
