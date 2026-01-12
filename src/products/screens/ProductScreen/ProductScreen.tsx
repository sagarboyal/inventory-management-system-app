import {
  Entypo,
  Fontisto,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/CustomButton";
import ProductTable from "../../components/ProductScreen/ProductTable";
import { products } from "./dummy";
import { styles } from "./ProductScreen.styles";

const ProductScreen = () => {
  return (
    <SafeAreaView style={styles.screen} edges={["left", "right", "bottom"]}>
      <View style={styles.screen}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={styles.headerLeftText}>Products</Text>
          </View>
          <View style={styles.headerRight}>
            <View style={styles.headerRightActions}>
              <Pressable
                style={({ pressed }) => [
                  pressed && styles.pressed,
                  styles.headerRightAction,
                ]}
              >
                <MaterialCommunityIcons
                  name="file-pdf-box"
                  size={24}
                  color="red"
                />
              </Pressable>

              <Pressable
                style={({ pressed }) => [
                  pressed && styles.pressed,
                  styles.headerRightAction,
                ]}
              >
                <MaterialCommunityIcons
                  name="microsoft-excel"
                  size={24}
                  color="green"
                />
              </Pressable>

              <Pressable
                style={({ pressed }) => [
                  pressed && styles.pressed,
                  styles.headerRightAction,
                ]}
              >
                <MaterialCommunityIcons name="refresh" size={24} color="blue" />
                <Text style={styles.headerRightActionText}>Refresh</Text>
              </Pressable>
            </View>
            <View style={styles.headerRightButtons}>
              <CustomButton
                title="Add Product"
                onComplete={() => {}}
                icon={
                  <Ionicons
                    style={{ marginLeft: 5 }}
                    name="add-circle-outline"
                    size={20}
                    color="white"
                  />
                }
                viewStyle={{ width: 125 }}
                textStyle={{ color: "white" }}
              />
            </View>
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.contentTop}>
            <View style={styles.contentTopRight}>
              <Fontisto name="search" size={16} color="black" />
              <TextInput
                style={styles.contentTopRightInput}
                placeholder="Search product"
              />
            </View>
            <View style={styles.contentTopLeft}>
              <Pressable style={styles.contentTopLeftActions}>
                <Text style={styles.contentTopLeftActionsText}>Category</Text>
                <Entypo name="chevron-down" size={14} color="black" />
              </Pressable>
              <Pressable style={styles.contentTopLeftActions}>
                <Text style={styles.contentTopLeftActionsText}>Brand</Text>
                <Entypo name="chevron-down" size={14} color="black" />
              </Pressable>
            </View>
          </View>
          <ProductTable productList={products} />
          <View style={styles.footer}>
            <View style={styles.footerLeft}>
              <Text>Row Per Page</Text>
            </View>
            <View style={styles.footerRight}>
              <Text>Pagination</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductScreen;
