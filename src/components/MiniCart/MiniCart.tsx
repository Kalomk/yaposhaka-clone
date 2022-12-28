import './MiniCart.scss';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
const MiniCart = () => {
  return (
    <div className="miniCart">
      <div className="miniCart__header">
        <div className="miniCart__header-title title-miniCart">
          <span className="title-miniCart__img">
            <LocalMallIcon />
          </span>
          <span className="title-minicart__empty empty-cart">
            <span className="empty-cart__counter-number">0</span>
            <span className="empty-cart__counter-label">
              <span className="empty-cart__price">
                0<span className="empty-cart__currency"> грн</span>
              </span>
            </span>
          </span>
        </div>
      </div>
      <div className="miniCart__content content-minicart">
        <div className="content-minicart__wrapper"></div>
      </div>
      <div className="miniCart__total">
        <span className="miniCart__total-img">
          <ReceiptLongIcon />
        </span>
      </div>
    </div>
  );
};

export default MiniCart;
