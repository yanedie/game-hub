import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
    const { toggleColorMode, colorMode } = useColorMode();

    return (
        <HStack>
            <Switch
                colorScheme="green"
                isChecked={colorMode === "dark"}
                onChange={toggleColorMode}
            />
            {/* fix the text wrap after adding the search input */}
            <Text whiteSpace="nowrap">Dark Mode</Text>
        </HStack>
    );
};

export default ColorModeSwitch;
