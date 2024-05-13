import logoImg from '@/assets/logo/logo.png';
import { useNavigation } from '@react-navigation/native';
import { Props } from '.';
import { BackButton, BackIcon, Container, Logo } from "./styles";



export function Header({ showBackButton = false }: Props) {

    const navigation = useNavigation();

    function handleGoBack() {
        // navigation.navigate('groups')
        // navigation.goBack()
    }


    return (
        <Container>
            {showBackButton &&
                <BackButton onPress={handleGoBack}>
                    <BackIcon />
                </BackButton>}



            <Logo source={logoImg} />
        </Container>
    );
}
