import React, { useState } from 'react'
import DietForm from '@components/DietForm'
import { Container, Form, Row, InputWrapper } from './styles'
import Header from '@components/Header'
import Input from '@components/Input'
import Button from '@components/Button'
import { useNavigation } from '@react-navigation/native'
import { saveMeal } from '@storage/storage'
import { dateMask, hourMask } from '@utils/masks'

type Meal = {
  name: string;
  description: string;
  date: string;
  hour: string;
  isPositive: boolean;
};

export default function MealCreation() {
  const navigation = useNavigation();

  // Estados para armazenar os dados da refeição
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [hour, setHour] = useState('');
  const [isPositive, setIsPositive] = useState<boolean | null>(null);

  // Salva a refeição e navega para a tela de feedback
  async function handleSaveMeal() {
    if (!name || !description || !date || !hour || isPositive === null) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    const newMeal: Meal = { name, description, date, hour, isPositive };

    try {
      await saveMeal(newMeal)
      navigation.navigate('feedback', { isPositive })
    } catch (error) {
      console.error('Erro ao salvar a refeição:', error)
      alert('Não foi possível salvar a refeição.')
    }
  }

  return (
    <Container>
      <Header title="Nova refeição" />

      <Form>
        <Input title="Nome" value={name} onChangeText={setName} />
        <Input
          title="Descrição"
          description
          value={description}
          onChangeText={setDescription}
        />
        <Row>
          <InputWrapper>
            <Input
              title="Data"
              mask={dateMask}
              maxLength={8}
              value={date}
              onChangeText={setDate}
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              title="Hora"
              mask={hourMask}
              maxLength={5}
              value={hour}
              onChangeText={setHour}
            />
          </InputWrapper>
        </Row>
        <DietForm onSelectDiet={(value: boolean) => setIsPositive(value)} />
        <Button title="Cadastrar refeição" onPress={handleSaveMeal} />
      </Form>
    </Container>
  );
}
