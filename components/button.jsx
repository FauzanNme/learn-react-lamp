import { useState } from "react";
import { Botton, Box, Container } from "./button.styled";

export default function Button() {
    const [lamp, SetLamp] = useState(false);

    const togle = () => {
        SetLamp(lamp === true ? false : true);
    }

    return (
        <Container BgChange={lamp}>
            <Box BoxChange={lamp}></Box><br />
    <Botton onClick = {togle}>{lamp === false ? "off" : "on"}</Botton> 
    </Container>
    );
}

