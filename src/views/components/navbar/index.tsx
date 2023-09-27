import { Button, Flex, HStack, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { LOGO } from "../../../assets/images";
import { ROUTES } from "../../../config/const";

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <HStack
            width={"full"}
            justifyContent={"space-between"}
            py={"1rem"}
            px={"2rem"}
            backgroundColor={"#eee"}
        >
            <Flex alignItems={"center"} gap={"4"}>
                <Image
                    src={LOGO}
                    alt=""
                    height={"50px"}
                    mixBlendMode={"color-burn"}
                />
                <Text>Home</Text>
            </Flex>
            <Flex gap={"2rem"}>
                <Button
                    colorScheme="blue"
                    size={"sm"}
                    onClick={() => navigate(ROUTES.LOGIN)}
                >
                    Login
                </Button>
                <Button
                    colorScheme="cyan"
                    size={"sm"}
                    onClick={() => navigate(ROUTES.SIGNUP)}
                >
                    Signup
                </Button>
            </Flex>
        </HStack>
    );
};
export default Navbar;
