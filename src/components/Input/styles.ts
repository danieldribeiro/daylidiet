import styled from "styled-components/native";

export type InputStyleProps = {
  description?: boolean
}

export const Container = styled.View`
  gap: 6px;
`

export const Label = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 4px;
`

export const InputText = styled.TextInput<InputStyleProps>`
  height: ${({ description }) => description ? '140px' : '50px'};
  padding: 10px;
  margin-bottom: 40px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
`