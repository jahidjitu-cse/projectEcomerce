import { OrderFail } from "./components/OrderFail";
import { OrderSuccess } from "./components/OrderSuccess";

export const OrderPage = () => {
  const status=true;
  return (
    <main>
      {status?<OrderSuccess/>:<OrderFail/>}
    </main>
  )
}
