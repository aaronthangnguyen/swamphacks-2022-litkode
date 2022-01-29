import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import AddQuestion from "./AddQuestion";
import Entries from "./Entries";

const AllQuestions = () => {
  return (
    <Box mt="2rem">
      <Flex justify="space-between">
        <Heading size="lg" mb="1rem">
          🔥 All
        </Heading>
        <AddQuestion />
      </Flex>
      <Entries />
    </Box>
  );
};

export default AllQuestions;
