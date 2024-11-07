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
      "Developed Mongodb, Express, React, Node - fullstack application, also used UI/UX from Chakra UI, and React Icons library.",
    imageUrl: "/project_images/taskmanagerappdemo.png", // Replace with actual image
    githubLink:
      "https://github.com/ahmadalnujaidi/FullStack-MERN-Task-Management-App",
  },
  {
    title: "Portfolio",
    description: "personal portfolio website.",
    imageUrl: "/project_images/websiteproject.jpg", // Replace with actual image
    githubLink: "https://github.com/ahmadalnujaidi/ahmadalnujaidi.github.io",
  },
  {
    title: "Object Detection Web Application",
    description:
      "Real-time object detection web application using my trained model, combined with a Generative AI model to produce storytelling descriptions of detected objects",
    imageUrl: "public/project_images/WebAppOD.jpg", // Replace with actual image
    githubLink:
      "https://github.com/ahmadalnujaidi/Object-Detection-Web-Application",
  },
  {
    title: "Real-Time Object Detection and Localization from Live Video",
    description:
      "Trained a Yolo11m model, to detect and localize objects in a live video",
    imageUrl: "public/project_images/yolo11m.png", // Replace with actual image
    githubLink:
      "https://github.com/ahmadalnujaidi/Real-Time-Object-Detection-and-Localization-from-Live-Video",
  },
  {
    title: "Google Developers Group Admin Dashboard",
    description:
      "Setup a fullstack web app for GDG admins to be able to GET/POST/PUT/DELETE 'events, users... etc.' in the database and manage the user-side website in real-time updates",
    imageUrl: "public/project_images/AdminGDG.jpg", // Replace with actual image
    // githubLink:
    //   "https://github.com/ahmadalnujaidi/Real-Time-Object-Detection-and-Localization-from-Live-Video",
  },
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
