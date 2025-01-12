import AsyncStorage from '@react-native-async-storage/async-storage'

import { Meal } from 'src/@types/meals'

const MEALS_KEY = '@meals'

export async function saveMeal(meal: Meal): Promise<void> {
  try {
    const storedMeals = await AsyncStorage.getItem(MEALS_KEY)
    const meals = storedMeals ? JSON.parse(storedMeals) : []
    meals.push(meal)
    await AsyncStorage.setItem(MEALS_KEY, JSON.stringify(meals))
  } catch (error) {
    console.error('Erro ao salvar a refeição:', error)
  }
}

// Função para recuperar todas as refeições
export async function getMeals(): Promise<Meal[]> {
  try {
    const storedMeals = await AsyncStorage.getItem(MEALS_KEY)
    return storedMeals ? JSON.parse(storedMeals) : []
  } catch (error) {
    console.error('Erro ao recuperar as refeições:', error)
    return [];
  }
}
