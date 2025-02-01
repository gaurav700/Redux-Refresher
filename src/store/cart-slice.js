import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: { items: [], totalQuantity: 0 },
  reducers: {
    addItemToCart(state, action) {
      state.totalQuantity++;
      const newItem = action.payload;
      const isItemExists = state.items.find((item) => item.id === newItem.id);
      if (!isItemExists) {
        state.items.push({
          itemId: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        isItemExists.quantity++;
        isItemExists.totalPrice = isItemExists.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      state.totalQuantity--;
      const id = action.payload;
      const isItemExists = state.items.find((item) => item.id === id);
      if (isItemExists == 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        isItemExists.quantity--;
        isItemExists.totalPrice = isItemExists.totalPrice - isItemExists.price;
      }
    },
  },
});

export const cartActions = CartSlice.actions;
export default CartSlice;
