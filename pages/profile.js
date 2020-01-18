import { Box, Button, Text } from "@chakra-ui/core";
import { Menu } from "../components/Menu";

export default function Profile() {
  return (
    <Box>
      <Menu></Menu>
      <Text>This is the profile</Text>
      <Button variantColor="purple">PROFILE</Button>
    </Box>
  );
}
