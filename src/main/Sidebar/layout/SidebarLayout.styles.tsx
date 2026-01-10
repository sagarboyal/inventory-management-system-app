import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
     sidebar: {
    width: 240,
    backgroundColor: "#ffffff",
    borderRightWidth: 1,
    borderRightColor: "#e5e7eb",
    paddingVertical: 20,
    paddingHorizontal: 16,
  },

  sidebarTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 24,
    color: "#111827",
  },

  menu: {
    gap: 12,
  },

  menuItem: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
    fontSize: 15,
    color: "#374151",
  },

  activeItem: {
    backgroundColor: "#eef2ff",
    color: "#4f46e5",
    fontWeight: "600",
  },
})