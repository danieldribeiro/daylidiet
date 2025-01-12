import styled from "styled-components/native";

export const Container = styled.TouchableOpacity<{percentage: number}>`
  width: 100%;
  height: 120px;
  padding: 30px 40px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: ${({ theme, percentage }) =>
    percentage >= 80 ? theme.COLORS.GREEN_300 : theme.COLORS.RED_500};
  text-align: center;
`

export const IconWrapper = styled.View`
  position: absolute;
  top: 16px;
  right: 16px;
`;

export const Percentage = styled.Text`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 4px;
`

export const Text = styled.Text`
  flex: 1;
  text-align: center;
`