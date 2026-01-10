import { images } from "@/src/shared/constants/images";
import {
  AntDesign,
  Entypo,
  Feather,
  Fontisto,
  Ionicons,
} from "@expo/vector-icons";
import React from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";
import { styles } from "./HeaderLayout.styles";

type HeaderLayoutProps = {
  onMenuPress: () => void;
};

const HeaderLayout = ({ onMenuPress }: HeaderLayoutProps) => {
  return (
    <View style={styles.header}>
      <View style={styles.leftSection}>
        <View style={styles.leftSectionIconWrapper}>
          <Pressable onPress={onMenuPress}>
            <AntDesign
              style={styles.leftSectionIcon}
              name="pic-left"
              size={24}
            />
          </Pressable>
        </View>
        <View style={styles.leftSectionInputWrapper}>
          <Fontisto
            style={styles.leftSectionInputIcon}
            name="search"
            size={16}
          />
          <TextInput
            style={styles.leftSectionInput}
            placeholder="Search"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
            returnKeyType="search"
          />
        </View>
      </View>

      <View style={styles.rightSection}>
        <View style={styles.rightTitleWrapper}>
          <Image source={images.org} />
          <Text style={styles.rightTitleText}>Freshmart</Text>
          <Entypo name="chevron-thin-down" size={14} />
        </View>
        <View style={styles.rightActionButtons}>
          <Pressable
            style={({ pressed }) => [
              styles.rightAction,
              pressed && styles.pressed,
            ]}
          >
            <Entypo style={styles.rightActionIcon} name="flag" size={20} />
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              styles.rightAction,
              pressed && styles.pressed,
            ]}
          >
            <Ionicons
              style={styles.rightActionIcon}
              name="notifications-outline"
              size={20}
            />
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              styles.rightAction,
              pressed && styles.pressed,
            ]}
          >
            <Feather style={styles.rightActionIcon} name="settings" size={20} />
          </Pressable>
        </View>
        <View style={styles.rightIconWrapper}>
          <Image style={styles.rightIcon} source={images.profile_pic} />
        </View>
      </View>
    </View>
  );
};

export default HeaderLayout;
