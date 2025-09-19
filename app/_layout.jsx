import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import { store } from "../store/redux/store";
// import { Drawer } from "react-native-drawer-layout";
// import { Drawer } from "expo-router/drawer";

export default function RootLayout() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      {/* <FavoritesContextProvider> */}
      <Provider store={store}>
        <Stack
          screenOptions={{
            contentStyle: {
              backgroundColor: "#6e5a30ff",
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
          <Stack.Screen
            name="(home)"
            options={{
              headerShown: false,
            }}
          />
        </Stack>
      </Provider>
      {/* </FavoritesContextProvider> */}
      {/* <Drawer
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#382805ff",
          },
          drawerActiveTintColor: "#fff",
          drawerInactiveTintColor: "#ccc",
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            title: "All Categories",
          }}
        />
      </Drawer> */}
    </>
  );
}

{
  /* <Stack.Screen name="overview/[id].jsx" /> */
}
{
  /* <Stack.Screen options={({route, navigation})=>{
  const id = route.params.categoryId;

  return {
    title: `${id}`
  }
}} /> */
}

// import { Drawer } from "expo-router/drawer";
// import { StatusBar } from "react-native";

// export default function RootLayout() {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />

//       {/* Main Drawer Navigation that includes only Home and Favorites */}
//       <Drawer
//         screenOptions={{
//           drawerStyle: {
//             backgroundColor: "#382805ff",
//           },
//           drawerActiveTintColor: "#fff",
//           drawerInactiveTintColor: "#ccc",
//         }}
//       >
//         {/* Home screen inside the Drawer */}
//         <Drawer.Screen
//           name="home" // Home screen accessible from the drawer
//           options={{
//             title: "Home",
//           }}
//         />

//         {/* Favorites screen inside the Drawer */}
//         <Drawer.Screen
//           name="favorites" // Favorites screen accessible from the drawer
//           options={{
//             title: "Favorites",
//           }}
//         />
//       </Drawer>
//     </>
//   );
// }
