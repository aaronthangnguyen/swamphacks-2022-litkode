import { Box } from "@chakra-ui/react";
import React from "react";
import useSWR from "swr";
import Entry from "./Entry";

const AllEntries = () => {
  const { data, error } = useSWR("https://litkode.tech/api/questions");

  if (error) return <Box>Error</Box>;
  if (!data) return <Box>Loading...</Box>;

  return (
    <Box>
      {data?.data?.map((entry) => {
        return <Entry key={entry.id} {...entry} />;
      })}
    </Box>
  );
};

export default AllEntries;
