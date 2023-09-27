import { Box, Text, VStack } from "@chakra-ui/react";
import Navbar from "../../components/navbar";
import { Filter } from "./components";

const Home = () => {
    return (
        <Box>
            <Navbar />
            <VStack p={"2rem"}>
                <Text
                    fontWeight={"bold"}
                    fontSize={"xl"}
                    alignSelf={"flex-start"}
                >
                    Search Properties for Rent
                </Text>
                <Filter />
            </VStack>
        </Box>
    );
};
export default Home;
