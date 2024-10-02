import React from "react";
import { Box } from "@chakra-ui/react";

const CV = () => {
  return (
    <Box
      width="100%"
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="flex-start"
      p={4} // Apply padding carefully
      boxSizing="border-box" // Ensure padding is included within the width/height
    >
      <iframe
        src="https://drive.google.com/file/d/1MajvURvOfc5Lt43YGzSDrbamkRCQ3aHA/preview"
        title="My CV"
        style={{
          width: "80vw", // Adjust the width as necessary
          height: "auto",
          minHeight: "100vh", // Ensure it takes up at least the full height
          border: "none",
        }}
        frameBorder="0"
        scrolling="no"
      ></iframe>
    </Box>
  );
};

export default CV;
