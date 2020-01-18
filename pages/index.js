import { Box, Button, Text } from "@chakra-ui/core";
import { Menu } from "../components/Menu";

export default function Home() {
  return (
    <Box>
      <Menu></Menu>
      <Text>This is the home</Text>
      <Button variantColor="blue">HOME</Button>
    </Box>
  );
}
