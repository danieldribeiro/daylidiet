import { View } from "react-native";
import { Container, Title, Row, Button, TextButton } from "./styles";
import { useState } from "react";

type DietFormProps = {
  onSelectDiet: (value: boolean) => void; 
};

export default function DietForm({ onSelectDiet }: DietFormProps) {
  const [selected, setSelected] = useState<"sim" | "nao" | null>(null);

  const handleDiet = (choice: "sim" | "nao") => {
    setSelected(choice);
    onSelectDiet(choice === "sim");
  };

  return (
    <Container>
      <Title>Está dentro da dieta?</Title>
      <Row>
        <Button
          style={{
            backgroundColor: selected === "sim" ? "#CBE4B4" : "#EFF0F0",
            borderColor: selected === "sim" ? "#639336" : "transparent",
            borderWidth: selected === "sim" ? 2 : 0,
          }}
          onPress={() => handleDiet("sim")}
        >
          <View
            style={{
              width: 14,
              height: 14,
              borderRadius: 50,
              backgroundColor: "#639336",
            }}
          />
          <TextButton>Sim</TextButton>
        </Button>

        <Button
          style={{
            backgroundColor: selected === "nao" ? "#F3BABD" : "#EFF0F0",
            borderColor: selected === "nao" ? "#BF3B44" : "transparent",
            borderWidth: selected === "nao" ? 2 : 0,
          }}
          onPress={() => handleDiet("nao")}
        >
          <View
            style={{
              width: 14,
              height: 14,
              borderRadius: 50,
              backgroundColor: "#BF3B44",
            }}
          />
          <TextButton>Não</TextButton>
        </Button>
      </Row>
    </Container>
  );
}
