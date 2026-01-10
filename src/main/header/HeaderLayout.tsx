import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { styles } from "./HeaderLayout.styles";

type HeaderLayoutProps = {
  onMenuPress: () => void;
};

const HeaderLayout = ({ onMenuPress }: HeaderLayoutProps) => {
  return (
    <View style={styles.header}>
      <Pressable onPress={onMenuPress}>
        <Ionicons
          style={styles.menuButton}
          name="menu"
          size={24}
          color="white"
        />
      </Pressable>
      <Text style={styles.headerText}>Dashboard Header</Text>
    </View>
  );
};

export default HeaderLayout;
