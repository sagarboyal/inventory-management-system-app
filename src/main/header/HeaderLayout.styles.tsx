import { colors } from "@/src/shared/constants/colors";
import { fonts } from "@/src/shared/constants/fonts";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    height: 65,
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: colors.grey[100],
    borderBottomWidth: 1,
  },

  leftSection: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  leftSectionIconWrapper: {
    marginHorizontal: 12,
  },
  leftSectionIcon: {
    color: colors.primary[900],
  },
  leftSectionTime: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  leftSectionTimeText: {
    fontFamily: fonts.medium_500,
    fontSize: 24,
    textAlignVertical: "center",
  },
  leftSectionAmPm: {
    fontFamily: fonts.medium_500,
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
    width: 140,
    height: 40,
    paddingHorizontal: 12,
    borderColor: colors.grey[100],
    borderWidth: 1,
    borderRadius: 5,
  },

  rightTitleText: {
    fontFamily: fonts.regular_400,
    fontSize: 15,
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
  rightFlagIcon: {
    width: 24,
    height: 24,
  },
  rightIcon: {
    width: 40,
    height: 40,
  },
  pressed: {
    opacity: 0.7,
  },
});
