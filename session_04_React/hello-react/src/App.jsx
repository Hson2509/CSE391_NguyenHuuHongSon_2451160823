import UserProfile from "./components/UserProfile";
import ProductInfo from "./components/ProductInfo";
import LifecycleDemo from "./components/LifecycleDemo";
import BadCounter from "./components/BadCounter";
import GoodCounter from "./components/GoodCounter";
import FlowDemo from "./components/Flow";
import SimpleVariables from "./components/SimpleVariables";
import ConditionalChallenge from "./components/Conditional";
import ListRendering from "./components/ListRendering";
import Header from "./components/header";
import Footer from "./components/footer";
import ProductCard from "./components/ProductCard";
import UserCard from "./components/UserCard";
import PriceTag from "./components/PriceTag";
import NumberState from "./components/NumberState";
import StringState from "./components/StringState";
import BoolState from "./components/BoolState";
import MultipleStates from "./components/MultipleStates";
import ClickEvents from "./components/ClickEvent";
import InputEvents from "./components/InputEvents";
import KeyboardEvents from "./components/KeyboardEvents";
import FormEvents from "./components/FormEvent";
import ListBasics from "./components/ListBasic";
import CURD from "./components/CURD";
import DeleteItem from "./components/Delete";
import UpdateItem from "./components/Update";
function App() {
  const products = [
    {
      id: 1,
      name: "iPhone 15",
      price: "25.000.000",
      image: "https://via.placeholder.com/200",
    },
    {
      id: 2,
      name: "Samsung S24",
      price: "22.000.000",
      image: "https://via.placeholder.com/200",
    },
    {
      id: 3,
      name: "Xiaomi 14",
      price: "15.000.000",
      image: "https://via.placeholder.com/200",
    },
  ];
  return (
    <div>
      <Header />
      <main>
        {/* --- Phần 1: Các component bài tập cũ --- */}
        <div style={{ padding: "20px", borderBottom: "2px solid #ccc" }}>
          <UserProfile />
          <ProductInfo />
          <LifecycleDemo />
          <BadCounter />
          <GoodCounter />
          <FlowDemo />
          <SimpleVariables />
          <ConditionalChallenge />
          <ListRendering />
        </div>
        <div style={{ padding: "20px" }}>
          <h2 style={{ textAlign: "center" }}>Danh sách sản phẩm</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {products.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
              />
            ))}
          </div>
        </div>
        <div
          style={{
            padding: "20px",
            fontFamily: "sans-serif",
            maxWidth: "400px",
          }}
        >
          <h2>Danh sách thẻ người dùng</h2>
          {/* Hiển thị 3 UserCard với dữ liệu khác nhau qua Props */}
          <UserCard
            name="Nguyễn Hữu Sơn"
            email="son.nguyen@thuyloi.edu.vn"
            avatar="https://placehold.co/100x100/3498db/white?text=S"
          />

          <UserCard
            name="Satoru Gojo"
            email="gojo.sensei@jujutsu.jp"
            avatar="https://placehold.co/100x100/9b59b6/white?text=G"
          />

          <UserCard
            name="Son Goku"
            email="goku@capsulecorp.com"
            avatar="https://placehold.co/100x100/e67e22/white?text=K"
          />

          <hr
            style={{
              margin: "20px 0",
              border: "none",
              borderTop: "1px solid #eee",
            }}
          />

          <h2>Giá mô hình Resin</h2>
          {/* Sử dụng PriceTag */}
          <PriceTag originalPrice={1500000} salePrice={1250000} />
          <Footer />
        </div>

        <NumberState />
        <StringState />
        <BoolState />
        <MultipleStates />
        <ClickEvents />
        <InputEvents />
        <KeyboardEvents />
        <FormEvents />
        <ListBasics />
        <CURD />
        <DeleteItem />
        <UpdateItem />
      </main>
    </div>
  );
}

export default App;
