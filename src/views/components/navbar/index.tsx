import { Button, Flex, HStack, Text } from "@chakra-ui/react";

const Navbar = () => {
    return (
        <HStack
            width={"full"}
            justifyContent={"space-between"}
            py={"1rem"}
            px={"2rem"}
            backgroundColor={"#eee"}
        >
            <Flex>
                <Text>Home</Text>
            </Flex>
            <Flex gap={"2rem"}>
                <Button colorScheme="facebook" size={"sm"}>
                    Login
                </Button>
                <Button colorScheme="facebook" size={"sm"}>
                    Signup
                </Button>
            </Flex>
        </HStack>
    );
};
export default Navbar;
