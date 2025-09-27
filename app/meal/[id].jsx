import { Stack, useLocalSearchParams } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import IconButton from "../../components/IconButton";
import List from "../../components/MealDetail/List";
import Subtitle from "../../components/MealDetail/Subtitle";
import MealDetails from "../../components/MealDetails";
import { MEALS } from "../../data/DummyData";
import { addFavorite, removeFavorite } from "../../store/redux/favroites";

export default function Meal() {
  // const favoriteMealsCtx = useContext(FavoritesContext);

  const favoriteMealIds = useSelector((state)=> state.favoriteMeals.ids)
  const dispatch = useDispatch()

  const { id } = useLocalSearchParams();
  const selectedMeal = MEALS.find((meal) => meal.id === id);


  const isFavoriteMeal = favoriteMealIds.includes(id);

  const changeFavoriteHandler = () => {
    if (isFavoriteMeal) {
      dispatch(removeFavorite({id: id}))
    } else {
      dispatch(addFavorite({id: id}))
    }
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: "Meal Overview",
          headerRight: () => {
            return (
              <IconButton
                icon={isFavoriteMeal ? "star" : "star-outline"}
                color="white"
                onPress={changeFavoriteHandler}
              />
            );
          },
        }}
      />
      <ScrollView style={styles.rootContainer}>
        <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{selectedMeal.title}</Text>

        <MealDetails
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability}
          textStyle={styles.detailText}
        />

        <View style={styles.listOuterContainer}>
          <View style={styles.listInnerContaier}>
            <Subtitle title={"Imgredients"} />
            <List data={selectedMeal.ingredients} />

            <Subtitle title={"Steps"} />
            <List data={selectedMeal.steps} />
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listInnerContaier: {
    width: "80%",
  },
});
