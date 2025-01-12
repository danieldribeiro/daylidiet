import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 12px;
`

export const Row = styled.View`
  flex-direction: row;
  gap: 20px;
`

export const Button = styled(TouchableOpacity)`
  flex: 1;
  height: 50px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 10px;
`

export const TextButton = styled.Text`
  font-weight: bold;
  font-size: 15px;
`