import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
  padding: 30px 0 0;
`;

export const Form = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  padding: 48px 24px;
`;

export const Row = styled.View`
  flex-direction: row;
  gap: 20px;
`

export const InputWrapper = styled.View`
  flex: 1;
`
