export type MenuItem = {
  label: string;
  icon: string;
  route?: string;
  children?: MenuItem[];
};

export const menuData: { section: string; items: MenuItem[] }[] = [
  {
    section: "Main",
    items: [
      { label: "Dashboard", icon: "grid-outline", route: "/dashboard/(inventory)/home" },
      { label: "Super Admin", icon: "person-outline", route: "/(dashboard)/super-admin" },
    ],
  },
  {
    section: "Inventory",
    items: [
      { label: "Products", icon: "cube-outline", route: "/dashboard/(inventory)/products" },
      { label: "Create Product", icon: "add-circle-outline", route: "/(dashboard)/(inventory)/create-product" },
      { label: "Expired Products", icon: "alert-circle-outline", route: "/(dashboard)/(inventory)/expired" },
      { label: "Low Stocks", icon: "trending-down-outline", route: "/(dashboard)/(inventory)/low-stocks" },
      { label: "Category", icon: "list-outline", route: "/(dashboard)/(inventory)/category" },
      { label: "Sub Category", icon: "list-circle-outline", route: "/(dashboard)/(inventory)/sub-category" },
      { label: "Brands", icon: "pricetag-outline", route: "/(dashboard)/(inventory)/brands" },
      { label: "Units", icon: "calculator-outline", route: "/(dashboard)/(inventory)/units" },
      { label: "Variant Attributes", icon: "options-outline", route: "/(dashboard)/(inventory)/variants" },
      { label: "Warranties", icon: "shield-checkmark-outline", route: "/(dashboard)/(inventory)/warranties" },
      { label: "Print Barcode", icon: "barcode-outline", route: "/(dashboard)/(inventory)/print-barcode" },
      { label: "Print QR Code", icon: "qr-code-outline", route: "/(dashboard)/(inventory)/print-qr" },
    ],
  },
  {
    section: "Stock",
    items: [
      { label: "Manage Stock", icon: "layers-outline", route: "/(dashboard)/stock/manage" },
      { label: "Stock Adjustment", icon: "git-compare-outline", route: "/(dashboard)/stock/adjustment" },
      { label: "Stock Transfer", icon: "swap-horizontal-outline", route: "/(dashboard)/stock/transfer" },
    ],
  },
  {
    section: "Sales",
    items: [
      { label: "Sales", icon: "cart-outline", route: "/(dashboard)/sales" },
      { label: "Invoices", icon: "document-text-outline", route: "/(dashboard)/sales/invoices" },
      { label: "Sales Return", icon: "return-down-back-outline", route: "/(dashboard)/sales/return" },
      { label: "Quotation", icon: "clipboard-outline", route: "/(dashboard)/sales/quotation" },
    ],
  },
];