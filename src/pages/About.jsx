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
        mb={1}
        color={colorMode === "dark" ? "gray.200" : "gray.800"}
        _groupHover={{ color: "white" }}
      >
        {skill.name}
      </Text>
      <Text
        fontSize="sm"
        mb={2}
        color={colorMode === "dark" ? "gray.400" : "gray.600"}
        _groupHover={{ color: "white" }}
      >
        {skill.type}
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

  // Combined Skills Array
  const skills = [
    {
      name: "JavaScript",
      value: 90,
      logo: "/logos/javascript.png", // Update with your logo path
      type: "Programming Language",
    },
    {
      name: "Python",
      value: 80,
      logo: "/logos/python.png", // Update with your logo path
      type: "Programming Language",
    },
    {
      name: "Java",
      value: 85,
      logo: "/logos/java.png", // Update with your logo path
      type: "Programming Language",
    },
    {
      name: "HTML",
      value: 95,
      logo: "/logos/html.png", // Update with your logo path
      type: "Programming Language",
    },
    {
      name: "CSS",
      value: 85,
      logo: "/logos/css.png", // Update with your logo path
      type: "Programming Language",
    },
    {
      name: "SQL",
      value: 75,
      logo: "/logos/SQL.png", // Update with your logo path
      type: "Programming Language",
    },
    {
      name: "MongoDB",
      value: 75,
      logo: "/logos/mongodb.png", // Update with your logo path
      type: "DBMS",
    },
    {
      name: "Node.js",
      value: 70,
      logo: "/logos/NODE.png", // Update with your logo path
      type: "Framework",
    },
    {
      name: "Express.js",
      value: 80,
      logo: "/logos/express.png", // Update with your logo path
      type: "Framework",
    },
    {
      name: "React.js",
      value: 90,
      logo: "/logos/react.png", // Update with your logo path
      type: "Framework",
    },
    {
      name: "PyTorch",
      value: 45,
      logo: "/logos/pytorch.png", // Update with your logo path
      type: "Framework",
    },
    // Add more skills here if needed
    {
      name: "Git",
      value: 80,
      logo: "/logos/git.png", // Update with your logo path
      type: "Version Control",
    },
    {
      name: "GitHub",
      value: 80,
      logo: "/logos/github.png", // Update with your logo path
      type: "Version Control",
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
          I bridge imagination and functionality, crafting sleek interfaces on
          the surface while maintaining rock-solid code behind the scenes. I'm a
          digital architect, building the full journey of software - from pixels
          to packets, and everything in between. I take ideas from wireframes to
          databases, stitching together front and back ends to create elegant,
          functional solutions. Whether I'm navigating the front-end forest or
          tackling back-end dungeons, I thrive in turning complexity into
          seamless user experiences that truly come to life.
        </Text>

        {/* Skills Section */}
        <Heading
          size="lg"
          mt={8}
          color={colorMode === "dark" ? "gray.200" : "gray.800"}
          textAlign="center"
        >
          SKILLS
        </Heading>

        {/* Skills Cards */}
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          mt={1}
          maxWidth="1200px"
        >
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} colorMode={colorMode} />
          ))}
        </Box>
      </VStack>
    </Box>
  );
};

export default About;
