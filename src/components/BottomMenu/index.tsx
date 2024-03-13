import { House, MagnifyingGlass, NavigationArrow, Package, Plus, Truck } from "phosphor-react-native";
import { BottomMenuStyleProps, Button, ButtonHighlight, Container, Content } from "./styles";
import { Text } from "react-native";
import React, { useState } from "react";



export function BottomMenu() {
    const [selectedMenu, setSelectedMenu] = useState(false)

    return (
        <Container>
            <Content>
                <Button>
                    <House size={24} color="#fff" />
                    {
                        selectedMenu &&
                        <Text style={{ color: '#fff' }}>.</Text>
                    }
                </Button>

                <Button>
                    <Package size={24} color="#fff" />
                </Button>

                <ButtonHighlight>
                    <Plus size={32} color="#fff" />
                </ButtonHighlight>

                <Button>
                    <Truck size={24} color="#fff" />
                </Button>

                <Button>
                    <NavigationArrow size={24} color="#fff" />
                </Button>
            </Content>
        </Container>
    )
}