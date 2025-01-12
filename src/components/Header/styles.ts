import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0 24px;
  width: 100%;
  height: 80px;
`;

export const ReturnButton = styled.TouchableOpacity`
  background-color: transparent;
`

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  flex: 1;
  text-align: center;
  margin-right: 30px;
`;