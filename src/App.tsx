import Footer from "./components/Footer";
import Guitar from "./components/Guitar";
import Header from "./components/Header";
import useCar from "./hooks/useCar";

function App() {
  const {
    data,
    cart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    isEmpty,
    calculeTotal,
    noStock,
  } = useCar();
  return (
    <>
      <Header
        cart={cart}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        clearCart={clearCart}
        isEmpty={isEmpty}
        calculeTotal={calculeTotal}
      />
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>
        <div className="row mt-5">
          {data?.map((guitar) => (
            <Guitar
              key={guitar?.id}
              guitar={guitar}
              addToCart={addToCart}
              noStock={noStock}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
