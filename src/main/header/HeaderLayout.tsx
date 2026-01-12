import { images } from "@/src/shared/constants/images";
import { AntDesign, Entypo, Feather, Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./HeaderLayout.styles";

type HeaderLayoutProps = {
  onMenuPress: () => void;
};

const HeaderLayout = ({ onMenuPress }: HeaderLayoutProps) => {
  const [time, setTime] = useState(new Date());

  const timeString = time.toLocaleTimeString("en-IN", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  const match = timeString.match(/(am|pm)/i);
  const period = match ? match[0].toUpperCase() : "";
  const clock = timeString.replace(/(am|pm)/i, "").trim();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
        <View style={styles.leftSectionTime}>
          <Text style={styles.leftSectionTimeText}>{clock}</Text>
          <Text style={styles.leftSectionAmPm}>{period?.toUpperCase()}</Text>
        </View>
      </View>

      <View style={styles.rightSection}>
        <View style={styles.rightTitleWrapper}>
          <Image source={images.org} />
          <Text style={styles.rightTitleText}>Freshmart</Text>
          <Entypo name="chevron-thin-down" size={14} />
        </View>
        <View style={styles.rightActionButtons}>
          <Image style={styles.rightFlagIcon} source={images.flag} />
          <Pressable
            style={({ pressed }) => [
              styles.rightAction,
              pressed && styles.pressed,
            ]}
          >
            <Ionicons
              style={styles.rightActionIcon}
              name="notifications-outline"
              size={24}
            />
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              styles.rightAction,
              pressed && styles.pressed,
            ]}
          >
            <Feather style={styles.rightActionIcon} name="settings" size={24} />
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
