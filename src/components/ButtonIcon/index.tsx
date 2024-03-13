import { Container, Icon, Title } from "./styles";
import { MaterialCommunityIcons } from '@expo/vector-icons'

type Props = {
    icon: keyof typeof MaterialCommunityIcons.glyphMap;
    title: string;
}

export function ButtonIcon({ icon, title, ...rest }: Props) {
    return (
        <Container {...rest}>
            <Icon
                name={icon}
            />

            <Title>
                {title}
            </Title>
        </Container>
    )
}