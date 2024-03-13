import { StyleSheet, TouchableOpacity } from "react-native";

import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.GRAY_600};
    padding: 16px;
`

export const Button = styled(TouchableOpacity)`
    justify-content: center;
    align-items: center;
    padding: 16px;
    border-radius: 8px;
    background-color: ${({theme}) => theme.COLORS.GREEN_500};
`
export const TextButton = styled.Text`
    color: ${({theme}) => theme.COLORS.GRAY_600};
    font-size: ${({theme}) => theme.FONT_SIZE.LG}px;
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
`
