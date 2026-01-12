export type Product = {
  id: string;
  sku: string;
  name: string;
  category: string;
  brand: string;
  price: number;
  unit: string;
  quantity: number;

  imageUrl: string;

  createdBy: {
    name: string;
    avatarUrl: string;
  };
};

export const products: Product[] = [
  {
    id: "1",
    sku: "PT001",
    name: "Lenovo IdeaPad 3",
    category: "Computers",
    brand: "Lenovo",
    price: 600,
    unit: "Pc",
    quantity: 100,
    imageUrl:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=200",
    createdBy: {
      name: "James Kirwin",
      avatarUrl:
        "https://randomuser.me/api/portraits/men/32.jpg",
    },
  },
  {
    id: "2",
    sku: "PT002",
    name: "Beats Pro",
    category: "Electronics",
    brand: "Beats",
    price: 160,
    unit: "Pc",
    quantity: 140,
    imageUrl:
      "https://images.unsplash.com/photo-1518441902117-f0a9f145cb89?w=200",
    createdBy: {
      name: "Francis Chang",
      avatarUrl:
        "https://randomuser.me/api/portraits/men/52.jpg",
    },
  },
  {
    id: "3",
    sku: "PT003",
    name: "Nike Jordan",
    category: "Shoe",
    brand: "Nike",
    price: 110,
    unit: "Pc",
    quantity: 300,
    imageUrl:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200",
    createdBy: {
      name: "Antonio Engle",
      avatarUrl:
        "https://randomuser.me/api/portraits/men/61.jpg",
    },
  },
  {
    id: "4",
    sku: "PT004",
    name: "Apple Series 5 Watch",
    category: "Electronics",
    brand: "Apple",
    price: 120,
    unit: "Pc",
    quantity: 450,
    imageUrl:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200",
    createdBy: {
      name: "Leo Kelly",
      avatarUrl:
        "https://randomuser.me/api/portraits/men/44.jpg",
    },
  },
  {
    id: "5",
    sku: "PT005",
    name: "Amazon Echo Dot",
    category: "Electronics",
    brand: "Amazon",
    price: 80,
    unit: "Pc",
    quantity: 320,
    imageUrl:
      "https://images.unsplash.com/photo-1543512214-318c7553f230?w=200",
    createdBy: {
      name: "Annette Walker",
      avatarUrl:
        "https://randomuser.me/api/portraits/women/65.jpg",
    },
  },
  {
    id: "6",
    sku: "PT006",
    name: "Sanford Chair Sofa",
    category: "Furniture",
    brand: "Modern Wave",
    price: 320,
    unit: "Pc",
    quantity: 650,
    imageUrl:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200",
    createdBy: {
      name: "John Weaver",
      avatarUrl:
        "https://randomuser.me/api/portraits/men/13.jpg",
    },
  },
  {
    id: "7",
    sku: "PT007",
    name: "Red Premium Satchel",
    category: "Bags",
    brand: "Dior",
    price: 60,
    unit: "Pc",
    quantity: 700,
    imageUrl:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=200",
    createdBy: {
      name: "Gary Hennessy",
      avatarUrl:
        "https://randomuser.me/api/portraits/men/72.jpg",
    },
  },
  {
    id: "8",
    sku: "PT008",
    name: "iPhone 14 Pro",
    category: "Phone",
    brand: "Apple",
    price: 540,
    unit: "Pc",
    quantity: 630,
    imageUrl:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200",
    createdBy: {
      name: "Eleanor Panek",
      avatarUrl:
        "https://randomuser.me/api/portraits/women/18.jpg",
    },
  },
  {
    id: "9",
    sku: "PT009",
    name: "Gaming Chair",
    category: "Furniture",
    brand: "Arlime",
    price: 200,
    unit: "Pc",
    quantity: 410,
    imageUrl:
      "https://images.unsplash.com/photo-1616627988328-fb2f45c9b40f?w=200",
    createdBy: {
      name: "William Levy",
      avatarUrl:
        "https://randomuser.me/api/portraits/men/36.jpg",
    },
  },
  {
    id: "10",
    sku: "PT010",
    name: "Borealis Backpack",
    category: "Bags",
    brand: "The North Face",
    price: 45,
    unit: "Pc",
    quantity: 550,
    imageUrl:
      "https://images.unsplash.com/photo-1526481280695-3c687fd5432c?w=200",
    createdBy: {
      name: "Charlotte Klotz",
      avatarUrl:
        "https://randomuser.me/api/portraits/women/29.jpg",
    },
  },
];
