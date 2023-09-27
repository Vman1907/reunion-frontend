import {
    Box,
    Button,
    Flex,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger,
    RangeSlider,
    RangeSliderFilledTrack,
    RangeSliderThumb,
    RangeSliderTrack,
    Text,
} from "@chakra-ui/react";
import { useState } from "react";

const Filter = () => {
    const [range, setRange] = useState([10, 300]);

    return (
        <Flex
            backgroundColor={"#eee"}
            p={"1rem"}
            rounded={"2xl"}
            flexWrap={"wrap"}
            className="w-full md:w-10/12 gap-4 md:gap-0"
            justifyContent={"space-around"}
        >
            <Flex className="w-full md:w-5/12" justifyContent={"space-evenly"}>
                <Popover placement="bottom-start" matchWidth>
                    <PopoverTrigger>
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
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverBody>
                            <Flex direction={"column"} gap={"2"}>
                                <Button
                                    textAlign={"left"}
                                    variant={"unstyled"}
                                    fontSize={"sm"}
                                    width={"200px"}
                                    _hover={{ backgroundColor: "#eee" }}
                                    pl={"1rem"}
                                >
                                    Mumbai, Maharashtra
                                </Button>
                                <Button
                                    textAlign={"left"}
                                    variant={"unstyled"}
                                    fontSize={"sm"}
                                    width={"200px"}
                                    _hover={{ backgroundColor: "#eee" }}
                                    pl={"1rem"}
                                >
                                    {" "}
                                    Delhi, Delhi
                                </Button>
                                <Button
                                    textAlign={"left"}
                                    variant={"unstyled"}
                                    fontSize={"sm"}
                                    width={"200px"}
                                    _hover={{ backgroundColor: "#eee" }}
                                    pl={"1rem"}
                                >
                                    Bangalore, Karnataka
                                </Button>
                                <Button
                                    textAlign={"left"}
                                    variant={"unstyled"}
                                    fontSize={"sm"}
                                    width={"200px"}
                                    _hover={{ backgroundColor: "#eee" }}
                                    pl={"1rem"}
                                >
                                    Hyderabad, Telangana
                                </Button>
                                <Button
                                    textAlign={"left"}
                                    variant={"unstyled"}
                                    fontSize={"sm"}
                                    width={"200px"}
                                    _hover={{ backgroundColor: "#eee" }}
                                    pl={"1rem"}
                                >
                                    Chennai, Tamil Nadu
                                </Button>
                                <Button
                                    textAlign={"left"}
                                    variant={"unstyled"}
                                    fontSize={"sm"}
                                    width={"200px"}
                                    _hover={{ backgroundColor: "#eee" }}
                                    pl={"1rem"}
                                >
                                    Kolkata, West Bengal
                                </Button>
                                <Button
                                    textAlign={"left"}
                                    variant={"unstyled"}
                                    fontSize={"sm"}
                                    width={"200px"}
                                    _hover={{ backgroundColor: "#eee" }}
                                    pl={"1rem"}
                                >
                                    Pune, Maharashtra
                                </Button>
                                <Button
                                    textAlign={"left"}
                                    variant={"unstyled"}
                                    fontSize={"sm"}
                                    width={"200px"}
                                    _hover={{ backgroundColor: "#eee" }}
                                    pl={"1rem"}
                                >
                                    Ahmedabad, Gujarat
                                </Button>
                                <Button
                                    textAlign={"left"}
                                    variant={"unstyled"}
                                    fontSize={"sm"}
                                    width={"200px"}
                                    _hover={{ backgroundColor: "#eee" }}
                                    pl={"1rem"}
                                >
                                    Jaipur, Rajasthan
                                </Button>
                                <Button
                                    textAlign={"left"}
                                    variant={"unstyled"}
                                    fontSize={"sm"}
                                    width={"200px"}
                                    _hover={{ backgroundColor: "#eee" }}
                                    pl={"1rem"}
                                >
                                    Surat, Gujarat
                                </Button>
                            </Flex>
                        </PopoverBody>
                    </PopoverContent>
                </Popover>
                <Popover>
                    <PopoverTrigger>
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
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>Confirmation!</PopoverHeader>
                        <PopoverBody></PopoverBody>
                    </PopoverContent>
                </Popover>
            </Flex>
            <Flex className="w-full md:w-5/12" justifyContent={"space-evenly"}>
                <Popover>
                    <PopoverTrigger>
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
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>Confirmation!</PopoverHeader>
                        <PopoverBody>
                            <Text>
                                {range[0]} {range[1]}
                            </Text>
                            <RangeSlider
                                aria-label={["min", "max"]}
                                defaultValue={[10, 30]}
                                value={range}
                                onChange={(value) => setRange(value)}
                            >
                                <RangeSliderTrack>
                                    <RangeSliderFilledTrack />
                                </RangeSliderTrack>
                                <RangeSliderThumb index={0} />
                                <RangeSliderThumb index={1} />
                            </RangeSlider>
                        </PopoverBody>
                    </PopoverContent>
                </Popover>
                <Popover>
                    <PopoverTrigger>
                        <Button
                            textAlign={"left"}
                            variant={"unstyled"}
                            minWidth={"130px"}
                        >
                            <Box>
                                <Text fontSize={"xs"} color={"gray"}>
                                    Property Type
                                </Text>
                                <Text fontSize={"sm"}>
                                    Select Property Type
                                </Text>
                            </Box>
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>Confirmation!</PopoverHeader>
                        <PopoverBody>
                            <Flex direction={"column"} gap={"2"}>
                                <Button
                                    textAlign={"left"}
                                    variant={"unstyled"}
                                    fontSize={"sm"}
                                    width={"200px"}
                                    _hover={{ backgroundColor: "#eee" }}
                                    pl={"1rem"}
                                >
                                    Apartment
                                </Button>
                                <Button
                                    textAlign={"left"}
                                    variant={"unstyled"}
                                    fontSize={"sm"}
                                    width={"200px"}
                                    _hover={{ backgroundColor: "#eee" }}
                                    pl={"1rem"}
                                >
                                    House
                                </Button>
                                <Button
                                    textAlign={"left"}
                                    variant={"unstyled"}
                                    fontSize={"sm"}
                                    width={"200px"}
                                    _hover={{ backgroundColor: "#eee" }}
                                    pl={"1rem"}
                                >
                                    Vacation rental
                                </Button>
                            </Flex>
                        </PopoverBody>
                    </PopoverContent>
                </Popover>
            </Flex>
            <Flex className="w-full md:w-2/12">
                <Button width={"full"} size={"sm"}>
                    Apply
                </Button>
            </Flex>
        </Flex>
    );
};

export default Filter;
