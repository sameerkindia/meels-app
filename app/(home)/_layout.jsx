import { Drawer } from "expo-router/drawer";
import { StatusBar } from "react-native";

export default function HomeLayout() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      
      <Drawer
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#382805ff",
          },
          drawerActiveTintColor: "#fff",
          drawerInactiveTintColor: "#ccc",
          headerStyle: {
            backgroundColor: "#382805ff",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "500",
          },
          contentStyle: {
            backgroundColor: "#6e5a30ff",
          },
        }}
      >
        {/* Home screen */}
        <Drawer.Screen
          name="(tabs)" // This will be your home stack
          options={{
            title: "Home",
            headerShown: false,
          }}
        />
        
        {/* Favorites screen */}
        <Drawer.Screen
          name="favorites"
          options={{
            title: "Favorites",
          }}
        />
      </Drawer>
    </>
  );
}