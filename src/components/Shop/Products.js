import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    name: "Atomic Habits",
    description: "First book i wrote",
  },
  {
    id: "p2",
    price: 5,
    name: "The subtle art of not giving a f*ck",
    description: "second book i wrote",
  },
  {
    id: "p3",
    price: 7,
    name: "How to win friends and influence people",
    description: "third book i wrote",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
