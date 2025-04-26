import React from "react";
import Product from "./Product";

const products = [
  {
    id: 1,
    name: "Classic T-Shirt",
    description: "Comfortable cotton t-shirt perfect for casual wear.",
    price: 19.99,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 2,
    name: "Sneakers",
    description: "Stylish and comfortable sneakers for everyday use.",
    price: 59.99,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    name: "Mac Book",
    description: "Powerful laptop for professionals and creators.",
    price: 99.99,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 4,
    name: "DSLR Camera",
    description: "High-quality DSLR for stunning photography.",
    price: 99.99,
    quantity: 1,
    image:
      "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 5,
    name: "SD Card",
    description: "High-speed memory card for cameras and mobile devices.",
    price: 99.99,
    quantity: 1,
    image:
      "https://images.pexels.com/photos/1738641/pexels-photo-1738641.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 6,
    name: "Perfume Queen",
    description: "Long-lasting fragrance with elegant notes.",
    price: 99.99,
    quantity: 1,
    image:
      "https://images.pexels.com/photos/3989394/pexels-photo-3989394.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 7,
    name: "Suncreen SPF 50+",
    description: "Protects your skin from harmful UV rays.",
    price: 99.99,
    quantity: 1,
    image:
      "https://images.pexels.com/photos/19049367/pexels-photo-19049367/free-photo-of-a-tube-of-a-cosmetic-product-without-a-label.png?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 8,
    name: "Serum",
    description: "Hydrating serum for glowing, nourished skin.",
    price: 99.99,
    quantity: 1,
    image:
      "https://images.pexels.com/photos/9395858/pexels-photo-9395858.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 9,
    name: "Nikon Camera",
    description: "Advanced camera with versatile shooting modes.",
    price: 99.99,
    quantity: 1,
    image:
      "https://images.pexels.com/photos/3907507/pexels-photo-3907507.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 10,
    name: "Green Shirt",
    description: "Trendy emerald green shirt with soft fabric.",
    price: 99.99,
    quantity: 1,
    image:
      "https://tigc.in/cdn/shop/files/compress_0620-sh44-1-emerald-green__1.jpg?v=1720764778",
  },
  {
    id: 11,
    name: "Twilly",
    description: "Elegant scarf accessory for versatile styling.",
    price: 99.99,
    quantity: 1,
    image:
      "https://images.pexels.com/photos/5812092/pexels-photo-5812092.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 12,
    name: "Brush",
    description: "Soft bristles for smooth makeup application.",
    price: 99.99,
    quantity: 1,
    image:
      "https://images.pexels.com/photos/4202924/pexels-photo-4202924.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 13,
    name: "7 Up juice",
    description: "Refreshing lemon-lime soda for every occasion.",
    price: 99.99,
    quantity: 1,
    image:
      "https://images.pexels.com/photos/31681161/pexels-photo-31681161/free-photo-of-refreshing-heineken-beer-in-outdoor-leisure-setting.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 14,
    name: "Wool",
    description: "Warm wool for knitting or winter crafts.",
    price: 99.99,
    quantity: 1,
    image:
      "https://images.pexels.com/photos/6461513/pexels-photo-6461513.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 15,
    name: "Gillete Guard",
    description: "Smooth shaving experience with Gillette blades.",
    price: 99.99,
    quantity: 1,
    image:
      "https://images.pexels.com/photos/6371841/pexels-photo-6371841.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 16,
    name: "Nail Polish",
    description: "Glossy finish nail polish with vibrant colors.",
    price: 99.99,
    quantity: 1,
    image:
      "https://images.pexels.com/photos/7615877/pexels-photo-7615877.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 17,
    name: "Moisturizing Conditioner",
    description: "Nourishes and softens dry hair deeply.",
    price: 99.99,
    quantity: 1,
    image:
      "https://images.pexels.com/photos/7428103/pexels-photo-7428103.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 18,
    name: "Blue Shirt",
    description: "Formal blue shirt ideal for office or meetings.",
    price: 99.99,
    quantity: 1,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuC3vzZYgW6UUDmtFbCsWIeqAG9JrxomgGhw&s",
  },
  {
    id: 19,
    name: "Navy Blue Shirt",
    description: "Elegant navy shirt for formal or party wear.",
    price: 99.99,
    quantity: 1,
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS380uNiKZMj5ADd65OOrNnow-VxQM8jeUjuzOMDWBywJBQT-eP9GNgye9HrhRs02mH6sQoiV7W8sXzF02yM9_RjS2OB_7IVVeCw8HdWcZ_ov5jU-T8oxN9",
  },
  {
    id: 20,
    name: "Brown Printed Shirt",
    description: "Stylish printed shirt with a touch of tradition.",
    price: 99.99,
    quantity: 1,
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRlK9_QMA8eclzsje8AXko32SSKLJGcPkLfrzmlXwjD6LQp15n1IX-yagXgy7i7dcK40fCWBPBOx-KtVMgTaIUFTbpmj72fGbMy8dmvqVMlzgEU7_UY91yoeg",
  },
];

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
