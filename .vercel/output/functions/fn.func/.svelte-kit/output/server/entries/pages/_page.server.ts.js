const load = () => {
  const plan = {
    name: 'Foo Bar',
    pricing: {
      price: 99,
      discounts: [
        {
          quantity: 10,
          price: 89
        },
        {
          quantity: 25,
          price: 79
        }
      ]
    }
  };
  return { plan };
};
export { load };
