import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type BottomMenuStyleProps = {
    isActive?: boolean;
}

export const Container = styled.View`
    justify-content: flex-end;
    margin-bottom: 32px;
    padding: 0 32px;
`

export const Content = styled.View`
    
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
`

export const Button = styled(TouchableOpacity)`
`
export const ButtonHighlight = styled(TouchableOpacity)`
    border-radius: 100%;
    background-color: ${({theme}) => theme.COLORS.GREEN_500};
    padding: 12px;
`