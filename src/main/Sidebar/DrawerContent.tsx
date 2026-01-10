import { colors } from "@/src/shared/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { usePathname, useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { styles } from "../Sidebar/DrawerContent.styles";
import { menuData } from "./ContentData";

const DrawerContent = (props: DrawerContentComponentProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const cleanRoute = (route: string) => route.replace(/\(.*?\)\//g, "");

  const isActive = (route?: string) => {
    if (!route) return false;

    return pathname === cleanRoute(route);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../../assets/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {menuData.map((section) => (
        <View key={section.section} style={styles.section}>
          <Text style={styles.sectionTitle}>{section.section}</Text>
          {section.items.map((item, index) => {
            const active = isActive(item.route);
            return (
              <Pressable
                key={index}
                style={styles.menuItem}
                onPress={() => {
                  if (item.route) {
                    router.push(item.route as any);
                  }
                }}
              >
                <Ionicons
                  name={item.icon as any}
                  size={20}
                  color={active ? colors.primary[900] : colors.grey[600]}
                  style={styles.icon}
                />
                <Text
                  style={[
                    styles.menuText,
                    isActive(item.route) && styles.menuTextActive,
                  ]}
                >
                  {item.label}
                </Text>
                {item.children && (
                  <Ionicons
                    name="chevron-forward"
                    size={16}
                    color={colors.primary[100]}
                    style={styles.chevron}
                  />
                )}
              </Pressable>
            );
          })}
        </View>
      ))}
    </ScrollView>
  );
};

export default DrawerContent;
