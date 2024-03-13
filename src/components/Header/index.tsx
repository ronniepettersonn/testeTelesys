import { TouchableOpacity } from "react-native";
import { Container, IconConfig, IconMenu, Logo } from "./styles";

import imgLogo from '../../assets/logo.png'

export function Header() {
    return (
        <Container>
            <TouchableOpacity>
                <IconMenu />
            </TouchableOpacity>

            <Logo source={imgLogo} />

            <TouchableOpacity>
                <IconConfig />
            </TouchableOpacity>
        </Container >
    )
}