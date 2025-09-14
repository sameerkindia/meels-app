import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Stack
        screenOptions={{
          contentStyle:{
            backgroundColor: '#6e5a30ff'
          },
          headerStyle: {
            backgroundColor: "#382805ff",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "500",
          },
        }}
      >
        <Stack.Screen name="index" options={{ title: "All Categories" }} />
        {/* <Stack.Screen name="overview/[id].jsx" /> */}
        {/* <Stack.Screen options={({route, navigation})=>{
          const id = route.params.categoryId;

          return {
            title: `${id}`
          }
        }} /> */}
      </Stack>
    </>
  );
}
