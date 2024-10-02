import React from "react";
import { Box, HStack, IconButton, Link, useColorMode } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const { colorMode } = useColorMode(); // Get the current color mode (dark or light)

  return (
    <Box
      as="footer"
      position="fixed"
      bottom={0}
      width="100%"
      bg={colorMode === "dark" ? "gray.900" : "gray.100"} // Adjust background color based on theme
      py={2}
      textAlign="center"
      color={colorMode === "dark" ? "gray.200" : "gray.800"} // Adjust text color based on theme
    >
      <HStack justify="center" spacing={8}>
        <Link href="https://github.com/ahmadalnujaidi" isExternal>
          <IconButton
            icon={<FaGithub />}
            aria-label="GitHub"
            bg="transparent"
            color={colorMode === "dark" ? "gray.200" : "gray.800"}
          />
        </Link>
        <Link href="https://linkedin.com/in/AhmadAlnujaidi" isExternal>
          <IconButton
            icon={<FaLinkedin />}
            aria-label="LinkedIn"
            bg="transparent"
            color={colorMode === "dark" ? "gray.200" : "gray.800"}
          />
        </Link>
        <Link href="mailto:ahmadalnujaidi02@gmail.com" isExternal>
          <IconButton
            icon={<FaEnvelope />}
            aria-label="Email"
            bg="transparent"
            color={colorMode === "dark" ? "gray.200" : "gray.800"}
          />
        </Link>
      </HStack>
    </Box>
  );
};

export default Footer;
