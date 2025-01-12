import React, { useState, useEffect } from 'react';
import { Container, Header, Logo, UserPicture, Text, MealsContainer } from './styles';
import { Plus } from 'phosphor-react-native';
import logo from '@assets/daily-diet-logo.png';
import user from '@assets/user.png';
import Button from '@components/Button';
import PercentualCard from '@components/PercentualCard';
import { SectionList, View } from 'react-native';
import MealCard from '@components/MealCard';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type Data = {
  name: string;
  description: string;
  date: string;
  hour: string;
  isPositive: boolean;
};

export default function Home() {
  const navigation = useNavigation();
  const [meals, setMeals] = useState<Data[]>([]);
  const [percentual, setPercentual] = useState(0);

  const formatDate = (date: Date): string => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear().toString().slice(2);
    return `${day}.${month}.${year}`;
  };

  const formatTime = (date: Date): string => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
  };

  const handleNewMeal = () => {
    navigation.navigate('mealCreation');
  };

  const loadMeals = async () => {
    try {
      const storedMeals = await AsyncStorage.getItem('@meals');
      if (storedMeals) {
        const mealsData = JSON.parse(storedMeals);
        setMeals(mealsData);
        calculatePercentual(mealsData); // Recalcula o percentual ao carregar as refeições
      }
    } catch (error) {
      console.error('Erro ao carregar refeições:', error);
    }
  };

  const calculatePercentual = (meals: Data[]) => {
    const totalMeals = meals.length;
    const positiveMeals = meals.filter(meal => meal.isPositive).length;
    const percentual = totalMeals > 0 ? (positiveMeals / totalMeals) * 100 : 0;
    setPercentual(parseFloat(percentual.toFixed(2)));
  };

  // Agrupando as refeições por data
  const groupMealsByDate = (meals: Data[]) => {
    return meals.reduce((groups, meal) => {
      const { date } = meal;
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(meal);
      return groups;
    }, {} as Record<string, Data[]>);
  };

  const groupedMeals = groupMealsByDate(meals);
  const groupedMealsArray = Object.entries(groupedMeals); // Transforma em [[data, refeições], ...]

  useFocusEffect(
    React.useCallback(() => {
      loadMeals();
    }, [])
  );

  return (
    <Container>
      <Header>
        <Logo source={logo} />
        <UserPicture source={user} />
      </Header>

      <PercentualCard percentage={percentual} />

      <MealsContainer>
        <Text>Refeições</Text>
        <Button
          title="Nova refeição"
          icon={<Plus color="#fff" style={{ marginRight: 10 }} />}
          onPress={handleNewMeal}
        />
      </MealsContainer>

      <SectionList
        sections={groupedMealsArray.map(([date, data]) => ({ title: date, data }))}
        keyExtractor={(item, index) => index.toString()}
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={{ fontWeight: 'bold', marginTop: 20, fontSize: 18 }}>{title}</Text>
        )}
        renderItem={({ item }) => (
          <MealCard hour={item.hour} name={item.name}>
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 50,
                backgroundColor: item.isPositive ? '#CBE4B4' : '#F3BABD',
              }}
            />
          </MealCard>
        )}
        ListEmptyComponent={<Text>Nenhuma refeição cadastrada.</Text>}
      />
    </Container>
  );
}
