import React from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useColorMode,
  Spacer,
  Link,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const linkHoverColor = colorMode === "dark" ? "gray.300" : "gray.600";
  const linkActiveColor = colorMode === "dark" ? "blue.300" : "blue.500";

  return (
    <Box
      as="nav"
      bg={colorMode === "dark" ? "gray.900" : "gray.100"}
      px={4}
      py={3}
      boxShadow="md"
      position="fixed"
      width="100%"
      zIndex="999"
    >
      <Flex alignItems="center">
        {/* Placeholder text with infinite underline animation */}
        <Box
          fontWeight="bold"
          fontSize="1.5rem"
          color={colorMode === "dark" ? "gray.200" : "gray.800"}
          position="relative"
          _after={{
            content: "''",
            position: "absolute",
            width: "100%",
            height: "2px",
            bottom: "-4px",
            left: "0",
            bg: colorMode === "dark" ? "gray.200" : "gray.800",
            animation: "underline-slide 2s infinite ease-in-out",
          }}
        >
          Ahmad Alnujaidi
        </Box>
        <Spacer />
        <HStack spacing={8} align="center">
          {/* Navbar Links with underline hover effect */}
          <RouterLink to="/">
            <Link
              px={2}
              py={1}
              fontSize="lg"
              fontWeight="bold"
              color={colorMode === "dark" ? "gray.200" : "gray.800"}
              position="relative"
              _after={{
                content: "''",
                position: "absolute",
                width: "0",
                height: "2px",
                bottom: "-2px",
                left: "0",
                bg: linkHoverColor,
                transition: "width 0.3s ease-in-out",
              }}
              _hover={{
                color: linkHoverColor,
                _after: {
                  width: "100%", // Underline expands when hovered
                },
              }}
              _active={{
                color: linkActiveColor,
              }}
            >
              About
            </Link>
          </RouterLink>
          <RouterLink to="/projects">
            <Link
              px={2}
              py={1}
              fontSize="lg"
              fontWeight="bold"
              color={colorMode === "dark" ? "gray.200" : "gray.800"}
              position="relative"
              _after={{
                content: "''",
                position: "absolute",
                width: "0",
                height: "2px",
                bottom: "-2px",
                left: "0",
                bg: linkHoverColor,
                transition: "width 0.3s ease-in-out",
              }}
              _hover={{
                color: linkHoverColor,
                _after: {
                  width: "100%", // Underline expands when hovered
                },
              }}
              _active={{
                color: linkActiveColor,
              }}
            >
              Projects
            </Link>
          </RouterLink>
          <RouterLink to="/cv">
            <Link
              px={2}
              py={1}
              fontSize="lv"
              fontWeight="bold"
              color={colorMode === "dark" ? "gray.200" : "gray.800"}
              position="relative"
              _after={{
                content: "''",
                position: "absolute",
                width: "0",
                height: "2px",
                bottom: "-2px",
                left: "0",
                bg: linkHoverColor,
                transition: "width 0.3s ease-in-out",
              }}
              _hover={{
                color: linkHoverColor,
                _after: {
                  width: "100%", // Underline expands when hovered
                },
              }}
              _active={{
                color: linkActiveColor,
              }}
            >
              CV
            </Link>
          </RouterLink>
          {/* Theme Toggle Button */}
          <IconButton
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            aria-label="Toggle Theme"
            bg="transparent"
            color={colorMode === "dark" ? "gray.200" : "gray.800"}
            _hover={{
              transform: "scale(1.2)",
              transition: "all 0.3s ease-in-out",
            }}
          />
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
