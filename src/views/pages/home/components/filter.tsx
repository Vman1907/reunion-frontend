import { Box, Button, Flex, Text } from "@chakra-ui/react";

const Filter = () => {
    return (
        <Flex
            backgroundColor={"#eee"}
            p={"1rem"}
            rounded={"2xl"}
            flexWrap={"wrap"}
            className="w-full md:w-10/12"
            justifyContent={"space-around"}
        >
            <Flex className="w-full md:w-1/2" justifyContent={"space-evenly"}>
                <Button
                    textAlign={"left"}
                    variant={"unstyled"}
                    minWidth={"130px"}
                >
                    <Box>
                        <Text fontSize={"xs"} color={"gray"}>
                            City
                        </Text>
                        <Text fontSize={"sm"}>Select Location</Text>
                    </Box>
                </Button>
                <Button
                    textAlign={"left"}
                    variant={"unstyled"}
                    minWidth={"130px"}
                >
                    <Box>
                        <Text fontSize={"xs"} color={"gray"}>
                            Available from
                        </Text>
                        <Text fontSize={"sm"}>Select Move-in Date</Text>
                    </Box>
                </Button>
            </Flex>
            <Flex className="w-full md:w-1/2" justifyContent={"space-evenly"}>
                <Button
                    textAlign={"left"}
                    variant={"unstyled"}
                    minWidth={"130px"}
                >
                    <Box>
                        <Text fontSize={"xs"} color={"gray"}>
                            Price
                        </Text>
                        <Text fontSize={"sm"}>Select Price Range</Text>
                    </Box>
                </Button>
                <Button
                    textAlign={"left"}
                    variant={"unstyled"}
                    minWidth={"130px"}
                >
                    <Box>
                        <Text fontSize={"xs"} color={"gray"}>
                            Property Type
                        </Text>
                        <Text fontSize={"sm"}>Select Property Type</Text>
                    </Box>
                </Button>
            </Flex>
        </Flex>
    );
};

export default Filter;
