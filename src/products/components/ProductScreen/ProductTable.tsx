import {
  AntDesign,
  Feather,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import React from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import { Product } from "../../screens/ProductScreen/dummy";
import { styles } from "./ProductTable.styles";

type ProductTableProps = {
  productList: Product[];
};

const ProductTable = ({ productList }: ProductTableProps) => {
  const renderItemData = (item: Product) => {
    return (
      <View style={styles.tableRow}>
        <Text style={[styles.colSku, styles.tableRowItemText]}>{item.sku}</Text>
        <View style={styles.colProduct}>
          <Image
            style={styles.tableRowItemIcon}
            source={{ uri: item.imageUrl }}
          />
          <Text style={styles.tableRowItemText}>{item.name}</Text>
        </View>
        <Text style={[styles.colCategory, styles.tableRowItemText]}>
          {item.category}
        </Text>
        <Text style={[styles.colBrand, styles.tableRowItemText]}>
          {item.brand}
        </Text>
        <Text style={[styles.colPrice, styles.tableRowItemText]}>
          ₹ {item.price}
        </Text>
        <Text style={[styles.colUnit, styles.tableRowItemText]}>
          {item.unit}
        </Text>
        <Text style={[styles.colQty, styles.tableRowItemText]}>
          {item.quantity}
        </Text>
        <View style={styles.colCreatedBy}>
          <Image
            style={styles.tableRowItemIcon}
            source={{ uri: item.createdBy.avatarUrl }}
          />
          <Text style={styles.tableRowItemText}>{item.createdBy.name}</Text>
        </View>
        <View style={styles.colActions}>
          <Pressable
            style={({ pressed }) => [
              styles.tableRowAction,
              pressed && styles.pressed,
            ]}
          >
            <AntDesign name="eye" size={18} color="black" />
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              styles.tableRowAction,
              pressed && styles.pressed,
            ]}
          >
            <Feather name="edit" size={18} color="black" />
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              styles.tableRowAction,
              pressed && styles.pressed,
            ]}
          >
            <MaterialCommunityIcons
              name="delete-circle-outline"
              size={18}
              color="darkred"
            />
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.table}>
      <View style={styles.tableTopBar}>
        <View style={styles.colSku}>
          <Text style={styles.tableTopText}>SKU</Text>
          <FontAwesome name="sort" size={14} color="black" />
        </View>
        <Text style={[styles.tableTopText, styles.colProduct]}>
          Product Name
        </Text>
        <Text style={[styles.tableTopText, styles.colCategory]}>Category</Text>
        <Text style={[styles.tableTopText, styles.colBrand]}>Brand</Text>
        <Text style={[styles.tableTopText, styles.colPrice]}>Price</Text>
        <Text style={[styles.tableTopText, styles.colUnit]}>Unit</Text>
        <Text style={[styles.tableTopText, styles.colQty]}>Qty</Text>
        <Text style={[styles.tableTopText, styles.colCreatedBy]}>
          Created By
        </Text>
        <Text style={[styles.tableTopText, styles.colActions]}></Text>
      </View>
      <FlatList
        data={productList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => renderItemData(item)}
        ItemSeparatorComponent={() => <View style={styles.separator}></View>}
      />
    </View>
  );
};

export default ProductTable;
