import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";

export default function IconButton({icon="star", color="white", onPress}) {
  return (
    <Pressable onPress={onPress} style={({pressed})=> pressed ? styles.pressed : null}>
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
    pressed: {
        opacity: '0.7'
    }
})