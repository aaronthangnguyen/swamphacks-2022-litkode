import { Button, Box, Text, Flex, Heading } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import { useStopwatch } from "react-timer-hook";

const Timer = () => {
  const { seconds, minutes, isRunning, start, pause, reset } = useStopwatch({
    autoStart: false,
  });
  return (
    <Box mb="1rem">
      <Head>
        <title>
          Litkode 🔥
          {isRunning
            ? `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
                2,
                "0"
              )}`
            : ""}
        </title>
        <meta
          name="description"
          content="The journey to a 6-figure salary 🚀"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading size="lg" mb="1rem">
        Timer
      </Heading>

      <Box background="white" rounded="lg" p="1rem" boxShadow="base">
        <Text
          fontWeight="bold"
          fontSize="3xl"
          display="block"
          textAlign="center"
        >
          {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
        </Text>
        <Flex gap="0.5rem">
          <Button
            colorScheme="litkode"
            width="50%"
            onClick={isRunning ? pause : start}
          >
            {isRunning ? "Pause" : "Start"}
          </Button>
          <Button
            width="50%"
            onClick={() => {
              reset(0, false);
            }}
          >
            Reset
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default Timer;
