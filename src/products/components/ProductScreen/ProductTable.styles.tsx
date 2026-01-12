import { colors } from "@/src/shared/constants/colors";
import { fonts } from "@/src/shared/constants/fonts";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  table: {
    height: "80%",
  },
  tableTopBar: {
    flexDirection: "row",
    alignItems: "center",
    height: 33,
    backgroundColor: colors.grey[100] + "99",
  },
  tableTopText: {
    fontFamily: fonts.bold_700,
  },

  colSku: {
    width: 100,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    gap: 8,
  },
  colProduct: {
    paddingLeft: 10,
    width: 250,
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  colCategory: { width: 133 },
  colBrand: { width: 133 },
  colPrice: { width: 81, alignItems: "flex-end" },
  colUnit: { width: 72 },
  colQty: { width: 82, alignItems: "flex-end" },
  colCreatedBy: {
    width: 220,
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  colActions: {
    width: 142,
    flexDirection: "row",
    gap: 10,
    justifyContent: "flex-end",
  },

  tableRow: {
    flexDirection: "row",
    alignItems: "center",
    height: 56,
  },
  tableRowItemIcon: {
    width: 30,
    height: 30,
    borderRadius: 8,
  },
  tableRowItemText: {
    fontFamily: fonts.regular_400,
  },
  tableRowAction: {
    width: 30,
    height: 30,
    borderColor: colors.grey[100],
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5
  },

  pressed: {
    opacity: 0.5,
  },
  separator: {
    height: 1,
    backgroundColor: "#E5E7EB",
  },
});
