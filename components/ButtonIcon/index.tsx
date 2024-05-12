import { MaterialIcons } from '@expo/vector-icons';
import { Container, Icon } from './styles';

import { TouchableOpacityProps } from 'react-native';

type Props = TouchableOpacityProps & {
    type?: 'PRIMARY' | 'SECONDARY';
    icon: keyof typeof MaterialIcons.glyphMap
}

export function ButtonIcon({ icon, type = 'PRIMARY', ...rest }: Props) {
    return (
        <Container {...rest}>
            <Icon
                name={icon}
                type={type} />
        </Container>
    )
}