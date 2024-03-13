import styled from "styled-components/native";

import {List} from 'phosphor-react-native'
import {Gear} from 'phosphor-react-native'

export const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 48px;
    margin-bottom: 24px;
`

export const IconMenu = styled(List).attrs(({theme}) => ({
    size: 24,
    color: theme.COLORS.WHITE
}))``

export const IconConfig = styled(Gear).attrs(({theme}) => ({
    size: 24,
    color: theme.COLORS.WHITE
}))``

export const Logo = styled.Image`
    width: 46px;
    height: 46px;
`