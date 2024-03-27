import type { Guitar } from "../types/type";

type GuitarProps = {
  guitar: Guitar;
  addToCart: (guitar: Guitar) => void;
  noStock: (guitar: Guitar) => boolean;
};
const Guitar = ({ guitar, addToCart, noStock }: GuitarProps) => {
  const { name, price, image, description, stock } = guitar || {};

  return (
    <div className="col-md-6 col-lg-4 my-4 row align-items-center">
      <div className="col-4">
        <img
          className="img-fluid"
          src={`/img/${image}.jpg`}
          alt="imagen guitarra"
        />
      </div>
      <div className="col-8">
        <h3 className="text-black fs-4 fw-bold text-uppercase">{name} </h3>
        <p>{description}</p>
        <p className="fw-black text-primary fs-3">${price}</p>
        <p>Stock: {stock}</p>
        <button
          type="button"
          className="btn btn-dark w-100"
          disabled={noStock(guitar)}
          onClick={() => {
            addToCart(guitar);
          }}
        >
          {noStock(guitar) ? "Agotado" : "Agregar al Carrito"}
        </button>
      </div>
    </div>
  );
};

export default Guitar;
