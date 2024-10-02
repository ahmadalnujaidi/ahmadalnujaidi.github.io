import React from "react";
import {
  Box,
  Image,
  Text,
  VStack,
  Link,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";

const projectsData = [
  {
    title: "FullStack MERN Task Management App",
    description:
      "developed Mongodb, Express, React, Node - fullstack application.",
    imageUrl: "/project_images/taskmanagerappdemo.png", // Replace with actual image
    githubLink:
      "https://github.com/ahmadalnujaidi/FullStack-MERN-Task-Management-App",
  },
  {
    title: "Project 2",
    description: "A short description of Project 2.",
    imageUrl: "https://via.placeholder.com/300", // Replace with actual image
    githubLink: "https://github.com/your-github/project2",
  },
  // {
  //   title: "Project 3",
  //   description: "A short description of Project 3.",
  //   imageUrl: "https://via.placeholder.com/300", // Replace with actual image
  //   githubLink: "https://github.com/your-github/project3",
  // },
  // Add more projects as needed
];

const Projects = () => {
  const bgColor = useColorModeValue("white", "gray.800");
  const hoverBgColor = useColorModeValue("gray.100", "gray.700");
  const textColor = useColorModeValue("gray.800", "gray.200");

  return (
    <Box p={8} display="flex" justifyContent="center">
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={4} // Reduced spacing between the cards
        maxW="1200px" // Maximum width of the grid to keep it centered and contained
        w="100%" // Make sure grid takes full width to center properly
      >
        {projectsData.map((project, index) => (
          <Link
            href={project.githubLink}
            isExternal
            key={index}
            _hover={{ textDecoration: "none" }}
          >
            <Box
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              bg={bgColor}
              transition="transform 0.3s ease-in-out"
              _hover={{
                transform: "scale(1.05)",
                bg: hoverBgColor,
              }}
              maxW="sm" // Limit the maximum width of each card
              mx="auto" // Center the card in its grid column
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                width="100%"
                height="150px"
                objectFit="cover"
              />
              <Box p={4}>
                <Text fontWeight="bold" fontSize="lg" color={textColor}>
                  {project.title}
                </Text>
                <Text mt={2} color={textColor} fontSize="sm">
                  {project.description}
                </Text>
              </Box>
            </Box>
          </Link>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Projects;
