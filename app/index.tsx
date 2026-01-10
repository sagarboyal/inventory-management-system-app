import { router } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const index = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.content}>
        <Text style={styles.contentTitle}>LOGIN SCREEN</Text>
        <Pressable
          style={({ pressed }) => [
            styles.contentButton,
            pressed && { opacity: 0.6 },
          ]}
          onPress={() => router.replace("/dashboard/home")}
        >
          <Text style={styles.contentButtonText}>GO TO DASHBOARD</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    alignItems: "center",
    gap: 20,
  },
  contentTitle: {
    fontSize: 20,
    textAlign: "center",
  },
  contentButton: {
    backgroundColor: "blue",
    width: 100,
    height: 50,
    justifyContent: "center",
  },
  contentButtonText: {
    color: "white",
    textAlign: "center",
  },
});
