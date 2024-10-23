// pages/fruits.js
import styles from "./Fruits.module.css";

const fruitsData = [
  {
    id: 1,
    name: "Apple",
    price: "$1.00",
    imageUrl: "/images/apple.jpg", // Replace with your image path
    description: "Fresh and juicy apples.",
  },
  {
    id: 2,
    name: "Banana",
    price: "$0.50",
    imageUrl: "/images/banana.jpg", // Replace with your image path
    description: "Sweet and ripe bananas.",
  },
  {
    id: 3,
    name: "Orange",
    price: "$0.75",
    imageUrl: "/images/orange.jpg", // Replace with your image path
    description: "Citrusy and refreshing oranges.",
  },
  // Add more fruit items as needed
];

const Fruits = () => {
  return (
    <div className={styles.container}>
      <h1>Fruits Category</h1>
      <div className={styles.productGrid}>
        {fruitsData.map((fruit) => (
          <div key={fruit.id} className={styles.productCard}>
            <img
              src={fruit.imageUrl}
              alt={fruit.name}
              className={styles.productImage}
            />
            <h2>{fruit.name}</h2>
            <p>{fruit.description}</p>
            <p className={styles.price}>{fruit.price}</p>
            <button className={styles.addToCartButton}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fruits;
