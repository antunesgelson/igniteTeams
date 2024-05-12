import { CaretLeft } from 'phosphor-react-native';
import styled from 'styled-components/native';



export const Container = styled.View`
width: 100%;

flex-direction: row;
align-items: center;
justify-content: center;

background-color: ${({ theme }) => theme.COLORS.GRAY_600};

`


export const Logo = styled.Image`
width: 45px;
height: 45px;
`


export const BackButton = styled.TouchableOpacity`
flex: 1;
`




export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
    size: 32,
    color: theme.COLORS.WHITE,

}))``;

