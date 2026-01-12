import { colors } from "@/src/shared/constants/colors";
import { fonts } from "@/src/shared/constants/fonts";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.grey[100].concat("1A"),
  },

  header: {
    flexDirection: "row",
    marginHorizontal: 24,
    marginVertical: 10,
    height: 48,
    alignItems: "center",
  },
  headerLeft: {
    flex: 1,
  },
  headerLeftText: {
    fontFamily: fonts.bold_700,
    fontSize: 20,
  },
  headerRight: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 8,
  },
  headerRightActions: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
    gap: 10,
  },
  headerRightAction: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 4,
    borderRadius: 8,
    gap: 2,
  },
  headerRightActionText: {
    fontFamily: fonts.regular_400,
    marginRight: 2,
  },
  headerRightButtons: {},

  content: {
    height: "91%",
    backgroundColor: "white",
    marginHorizontal: 24,
  },
  contentTop: {
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    marginHorizontal: 12,
  },
  contentTopRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginLeft: 25,
    borderColor: colors.grey[100],
    borderWidth: 1,
    width: 250,
    height: 40,
    borderRadius: 5,
    paddingLeft: 8
  },
  contentTopRightInput: {
    fontFamily: fonts.regular_400,
    color: colors.grey[900],
    fontSize: 14
  },
  contentTopLeft: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 8,
  },
  contentTopLeftActions: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: colors.grey[100],
    borderWidth: 1,
    paddingHorizontal: 8,
    borderRadius: 5,
    height: 29,
    paddingVertical: 2,
  },
  contentTopLeftActionsText: {
    fontFamily: fonts.regular_400,
    fontSize: 14,
  },

  footer: {
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    marginHorizontal: 24,
  },
  footerLeft: { flex: 1 },
  footerRight: {},
  pressed: {
    opacity: 0.5,
  },
});
