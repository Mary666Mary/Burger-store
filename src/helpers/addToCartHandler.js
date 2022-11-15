export const addToCartHandler = (
  product,
  quantity,
  setQuantity,
  cart,
  setCart,
  uniqId,
  done = {
    label: "Well done",
    value: "well-done",
  }
) => {
  // find existing cart item

  const isNeededProduct = (item, product) => {
    return item.id === product.id && item.done.value === done.value;
  };

  const foundCartItem = cart.find((item) => isNeededProduct(item, product));

  // set to cart new cart items
  setCart(
    foundCartItem
      ? cart.map((item) => {
          if (isNeededProduct(item, foundCartItem)) {
            item.quantity = item.quantity + quantity;
            item.done = done;
          }
          return item;
        })
      : [
          ...cart,
          {
            id: product.id,
            title: product.title,
            image: product.image,
            price: product.price,
            done,
            quantity,
            cartItemId: uniqId,
          },
        ]
  );

  setQuantity(1);
};
