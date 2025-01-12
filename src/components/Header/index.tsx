import { Container, ReturnButton, Title } from "./styles";
import { ArrowLeft } from 'phosphor-react-native'

import { useNavigation } from "@react-navigation/native";

type Props = {
  title: string
}

export default function Header({ title }: Props){

  const navigation = useNavigation()

  const handleBackPress = () => {
    navigation.goBack()
  }

  return (
    <Container>
      <ReturnButton onPress={handleBackPress}>
        <ArrowLeft size={30} color="#000"/>
      </ReturnButton>
      <Title>{title}</Title>
    </Container>
  );
}