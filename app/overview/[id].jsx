import { Stack } from "expo-router";
import { useLocalSearchParams } from "expo-router/build/hooks";
import { StyleSheet } from "react-native";
import MealsList from "../../components/MealsList/MealsList";
import { CATEGORIES, MEALS } from "../../data/DummyData";

const Overview = () => {
  const { id } = useLocalSearchParams();

  const displaydMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(id) >= 0;
  });

  const categoryTitle = CATEGORIES.find((category) => category.id === id).title;

  return (
    <>
      <Stack.Screen options={{ title: categoryTitle }} />

      <MealsList items={displaydMeals} />
    </>
  );
};

export default Overview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
