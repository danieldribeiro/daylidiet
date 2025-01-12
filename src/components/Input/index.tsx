import React, { useState } from "react";
import { Container, Label, InputText, InputStyleProps } from "./styles";

type Props = InputStyleProps & {
  title: string;
  description?: boolean;
  mask?: (value: string) => string;
  maxLength?: number;
  value?: string; // Permite controle externo
  onChangeText?: (text: string) => void; // Callback para controle externo
};

export default function Input({
  title,
  description = false,
  mask,
  maxLength,
  value: externalValue,
  onChangeText,
}: Props) {
  const [internalValue, setInternalValue] = useState("");

  // Determina qual valor usar (interno ou externo)
  const value = externalValue ?? internalValue;

  const handleChangeText = (text: string) => {
    const maskedValue = mask ? mask(text) : text;

    // Atualiza o estado interno se não houver controle externo
    if (externalValue === undefined) {
      setInternalValue(maskedValue);
    }

    // Chama o callback externo, se fornecido
    onChangeText?.(maskedValue);
  };

  return (
    <Container>
      <Label>{title}</Label>
      <InputText
        value={value}
        onChangeText={handleChangeText}
        maxLength={maxLength}
        multiline={description}
        numberOfLines={description ? 4 : 1}
        textAlignVertical={description ? "top" : "center"}
      />
    </Container>
  );
}
