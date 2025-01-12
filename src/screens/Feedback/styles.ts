import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  align-items: center;
  justify-content: center;
`

export const Title = styled.Text<{ isPositive: boolean }>`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme, isPositive }) =>
    isPositive ? theme.COLORS.GREEN_700 : theme.COLORS.RED_700};
  margin-bottom: 12px;
`

export const Message = styled.Text`
  font-size: 18px;
  text-align: center;
  padding: 0 30px;
`