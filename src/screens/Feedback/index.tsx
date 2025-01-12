import { Image, Text } from "react-native";
import { Container, Title, Message } from "./styles";
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native'

import positiveFeedback from "@assets/Feedback/positive-feedback.png";
import negativeFeedback from "@assets/Feedback/negative-feedback.png";
import Button from "@components/Button";

// Definir a tipagem do parâmetro
type FeedbackRouteParams = {
  isPositive: boolean;
};

export default function Feedback() {
  const route = useRoute();
  const { isPositive } = route.params as FeedbackRouteParams;

  const navigation = useNavigation()

  function handleReturnHome() {
    navigation.navigate('home')
  }

  return (
    <Container>
      <Title isPositive={isPositive}>{isPositive ? "Continue assim!" : "Que pena!"}</Title>
      <Message>
        {isPositive ? (
          <>
            Você continua <Text style={{ fontWeight: "bold" }}>dentro da dieta</Text>. Muito bem!
          </>
        ) : (
          <>
            Você <Text style={{ fontWeight: "bold" }}>saiu da dieta</Text> dessa vez, mas continue se esforçando!
          </>
        )}
      </Message>
      <Image
        source={isPositive ? positiveFeedback : negativeFeedback}
        style={{ marginTop: 40, marginBottom: 40 }}
      />
      <Button title="Ir para página inicial" onPress={handleReturnHome}/>
    </Container>
  );
}
