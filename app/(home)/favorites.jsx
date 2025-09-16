import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import MealsList from "../../components/MealsList/MealsList.jsx";
import { MEALS } from "../../data/DummyData.js";
import { FavoritesContext } from "../../store/context/favorites-context.js";

export default function Favorites() {
  const favoriteMealsCtx = useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter((meal) => {
    // console.log(favoriteMealsCtx.ids.includes(mealId) , "this is from favorites")
    return favoriteMealsCtx.ids.includes(meal.id);
  });

  // console.log(favoriteMealsCtx, "This is from fav ");
  // console.log(favoriteMealsCtx.ids, "This is from fav ");
  // // console.log(favoriteMeals, "This is all meal ids");

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return (
    <>
      <MealsList items={favoriteMeals} />;
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
