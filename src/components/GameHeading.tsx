import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
    gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
    // 避免出现 undefined，使用或运算符（原来在模板字符串内还可以这样！）
    const heading = `${gameQuery.platform?.name || ""} ${
        gameQuery.genre?.name || ""
    } Games`;
    return (
        <Heading as="h1" marginY={5} fontSize="5xl">
            {heading}
        </Heading>
    );
};

export default GameHeading;
