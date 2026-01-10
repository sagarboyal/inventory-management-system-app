import { colors } from "@/src/shared/constants/colors";
import { fonts } from "@/src/shared/constants/fonts";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    height: 70,
    flexDirection: "row",
    alignItems: "center",
  },

  leftSection: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  leftSectionIconWrapper:{
    marginHorizontal: 12
  },
  leftSectionIcon:{
    color: colors.primary[900]
  },
  leftSectionInputWrapper:{
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    height: 46,
    borderColor: colors.grey[300],
    borderWidth: 1,
    borderRadius: 16
  },
  leftSectionInputIcon:{
    marginHorizontal: 8,
    color: colors.grey[300],
  },
  leftSectionInput:{
    fontFamily: fonts.regular_400,
    color: colors.grey[300],
    fontSize: 16
  },

  rightSection: {
    flex: 2,
    flexDirection: "row",
    gap: 12,
    justifyContent: "flex-end",
    alignItems: "center",
    marginRight: 24,
  },
  rightTitleWrapper: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
  },
  rightTitleText: {
    fontFamily: fonts.regular_400,
    fontSize: 17,
    color: colors.grey[900],
  },
  rightActionButtons: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    marginRight: 20,
  },
  rightAction: {},
  rightActionIcon: {
    color: colors.grey[600],
  },
  rightIconWrapper: {},
  rightIcon: {
    width: 40,
    height: 40,
  },
  pressed: {
    opacity: 0.7
  }
});
