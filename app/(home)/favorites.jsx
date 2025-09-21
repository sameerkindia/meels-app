import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import MealsList from "../../components/MealsList/MealsList.jsx";
import { MEALS } from "../../data/DummyData.js";
// import { FavoritesContext } from "../../store/context/favorites-context.js";

export default function Favorites() {
  // const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMealsIds = useSelector(state => state.favoriteMeals.ids)

  const favoriteMeals = MEALS.filter((meal) => {
    return favoriteMealsIds.includes(meal.id);
  });


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
