const products = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  name: `Beauty Product ${i + 1}`,
  price: (Math.random() * 900 + 100).toFixed(0),
  image: `https://source.unsplash.com/300x300/?makeup,cosmetics,beauty,product,${i}`
}));

export default products;