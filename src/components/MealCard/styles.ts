import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  flex: 1;
  height: 60px;
  border-radius: 8px;
  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;
  padding: 0 16px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
`

export const Hour = styled.Text`
  font-weight: bold;
  font-size: 14px;
`

export const Name = styled.Text`
  flex: 1;
  font-size: 16px;
  margin: 0 16px;
  border-left-width: 2px;
  border-left-color: ${({ theme }) => theme.COLORS.GRAY_400};
  border-left-style: solid;
  padding-left: 8px;
`