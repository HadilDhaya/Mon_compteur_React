import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, clearCart, applyPromoCode } from '../redux/cartSlice';

export default function Cart() {
  const { items, totalCount, totalPrice, discountPercent } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [code, setCode] = useState('');

  const discountedPrice = totalPrice * (1 - discountPercent / 100);

  return (
    <div className="cart-card">
      <div className="cart-header">
        <h3>🛒 Mon Panier Redux</h3>
        {items.length > 0 && (
          <button className="btn-danger" onClick={() => dispatch(clearCart())}>
            Vider
          </button>
        )}
      </div>

      {items.length === 0 ? (
        <p className="cart-empty">Le panier est actuellement vide.</p>
      ) : (
        <>
          {items.map((item) => (
            <div key={item.id} className="cart-row">
              <span>
                {item.name} ({item.price} DT x {item.quantity})
              </span>
              <div className="qty-controls">
                <button onClick={() => dispatch(removeItem(item.id))}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch(addItem(item))}>+</button>
              </div>
            </div>
          ))}

          <p>
            Nombre total d'articles : <strong>{totalCount}</strong>
          </p>
          <p>
            Montant Total : <strong>{totalPrice} DT</strong>
          </p>

          <div className="promo-box">
            <input
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Code promo"
            />
            <button className="btn-primary" onClick={() => dispatch(applyPromoCode(code))}>
              Appliquer
            </button>
          </div>

          {discountPercent > 0 && (
            <p className="discount">
              Remise -{discountPercent}% : <strong>{discountedPrice} DT</strong>
            </p>
          )}
        </>
      )}
    </div>
  );
}
