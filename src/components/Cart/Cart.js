import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const items = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map((item) => (
          <CartItem
            item={{
              id: item.id,
              price: item.price,
              quantity: item.quantity,
              total: item.totalPrice,
              title: item.name,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
