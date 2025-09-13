import { Stack } from "expo-router";
import { useLocalSearchParams } from "expo-router/build/hooks";
import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "../../components/MealItem";
import { MEALS } from "../../data/DummyData";

const Overview = () => {
  const { id } = useLocalSearchParams();

  const displaydMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(id) >= 0;
  });

  function renderMealItem(itemData) {
    const item = itemData.item;
    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return (
      <MealItem {...mealItemProps} />
    );
  }

  return (
    <>
      <Stack.Screen options={{ title: `Overview of ${id}` }} />

      <View style={styles.container}>
        <FlatList
          data={displaydMeals}
          keyExtractor={(item) => item.id}
          renderItem={renderMealItem}
        />
      </View>
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
