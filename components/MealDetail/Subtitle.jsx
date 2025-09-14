import { StyleSheet, Text, View } from "react-native";

export default function Subtitle({title}) {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subTitle: {
    color: "#d6c159ff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subTitleContainer: {
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomColor: "#d6c159ff",
    borderBottomWidth: 2,
  },
});
