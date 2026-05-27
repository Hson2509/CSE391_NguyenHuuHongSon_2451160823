import UserProfile from "./components/UserProfile";
import ProductInfo from "./components/ProductInfo";
import LifecycleDemo from "./components/LifecycleDemo";
import BadCounter from "./components/BadCounter";
import GoodCounter from "./components/GoodCounter";
import FlowDemo from "./components/Flow";
function App() {
  return (
    <div>
      <h1>Chào mừng đến với cửa hàng của chúng tôi!</h1>
      {/* <UserProfile />
      <ProductInfo />
      <LifecycleDemo /> */}
      <BadCounter />
      <GoodCounter />
      <FlowDemo />
    </div>
  );
}
export default App;
