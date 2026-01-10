import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    padding: 20,
    paddingTop: 40,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  logo: {
    width: 120,
    height: 40,
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "600",
    color: "#1a1a1a",
    paddingHorizontal: 20,
    paddingVertical: 8,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    borderRadius: 8,
  },
  menuItemActive: {
    backgroundColor: "#FFF5F2",
  },
  icon: {
    marginRight: 12,
  },
  menuText: {
    flex: 1,
    fontSize: 14,
    color: "#666",
  },
  menuTextActive: {
    color: "#FF6B35",
    fontWeight: "500",
  },
  chevron: {
    marginLeft: "auto",
  },
});