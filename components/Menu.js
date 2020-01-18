import { Flex, useColorMode, IconButton } from "@chakra-ui/core";
import Link from "next/link";

export function Menu() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/profile">
        <a>Profile</a>
      </Link>
      <IconButton
        aria-label={`Toggle ${colorMode === "light" ? "Dark" : "Light"}`}
        icon="moon"
        onClick={toggleColorMode}
      ></IconButton>
    </Flex>
  );
}
