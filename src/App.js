import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { uiActions } from "./store/ui-slice";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.isVisible);
  const quantity = useSelector((state) => state.cart.totalQuantity);
  const wholeCart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        uiActions.showNotification({
          title: "sending...",
          message: "sending cart data!",
          status: "pending",
        })
      );
      const response = await fetch(
        "https://react-http-e8020-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(wholeCart),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed");
      }

      dispatch(
        uiActions.showNotification({
          title: "success!",
          message: "sent cart data successfully!",
          status: "success",
        })
      );
    };

    if (isInitial) {
      isInitial = false;
      return;
    }

    sendCartData().catch((error) => {
      dispatch(
        uiActions.showNotification({
          title: "Error!",
          message: error.message,
          status: "error",
        })
      );
    });
  }, [dispatch, wholeCart]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {(showCart || quantity > 0) && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
