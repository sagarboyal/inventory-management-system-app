import HeaderLayout from "@/src/main/header/HeaderLayout";
import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { SafeAreaView } from "react-native-safe-area-context";
import DrawerContent from "../DrawerContent";

function CustomDrawerContent() {
  const navigation = useNavigation();

  return (
    <>
      <SafeAreaView edges={["top"]}>
        <HeaderLayout
          onMenuPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        />
      </SafeAreaView>
    </>
  );
}

export default function SidebarLayout() {
  return (
    <Drawer
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        header: (props) => <CustomDrawerContent />,
        drawerType: "slide",
        drawerStyle: {
          width: 280,
        },
      }}
    />
  );
}
