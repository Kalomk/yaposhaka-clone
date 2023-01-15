import './ProductItem.scss';
type ProductItemProps = {
  weight: string;
  price: string;
  name: string;
  description: string;
  switcher?: Switcher;
  currency: string;
  img: Images;
  listOfDescription?: string[];
  count: number;
  topLabel?: string[];
};

interface Images {
  desc: any;
  mob: any;
}
interface Switcher {
  active: string;
  only: string;
}

const ProductItem: React.FC<ProductItemProps> = ({
  weight,
  name,
  price,
  description,
  switcher,
  currency,
  img,
  listOfDescription,
  count,
  topLabel,
}) => {
  return (
    <li className="product-item">
      <div className="product-item__content">
        <div className="product-item__image-wrap">
          <picture>
            {img.desc.map((item) => (
              <picture key={item}>
                <source srcSet={item.webp} type="image/webp" />
                <img className="photo image" src={item.jpg} alt={name} loading="lazy" />
              </picture>
            ))}
            {img.mob.map((item) => (
              <picture key={item}>
                <source srcSet={item.webp} type="image/webp" />
                <img className="photo image" src={item.jpg} alt={name} loading="lazy" />
              </picture>
            ))}
          </picture>
        </div>
        {topLabel && (
          <div className="top-labels-wrap">
            {topLabel.map((item) => (
              <span className={`label-${item} item-label`}>{item}</span>
            ))}
          </div>
        )}
        <div className="product-item__description">
          {description ? (
            <p className="description-content">
              <span>{description}</span>
            </p>
          ) : (
            <ul className="description-content">
              {listOfDescription &&
                listOfDescription.map((item) => (
                  <li key={item} style={{ textAlign: 'justify' }}>
                    <span style={{ fontSize: 'medium' }}>{item}</span>
                  </li>
                ))}
            </ul>
          )}
        </div>
        <div className="product-item__footer">
          <form className="form">
            <div className="form__name-wrap">
              <a href="https://www.yaposhka.kh.ua/ua/losos-de-jukrejn.html" className="form__name">
                <span className="name">{name}</span>
              </a>
            </div>
            {count ? (
              <div className="count">
                <span>{count}</span>шт.
              </div>
            ) : (
              <div className="switcher-wrap">
                {switcher && (
                  <div className="switcher">
                    <span className="switcher__combo active">{switcher.active}</span>
                    <span className="switcher__only">{switcher.only}</span>
                  </div>
                )}
              </div>
            )}
            <div className="weight-item">{weight}</div>
            <div className="button-wrap">
              <label title="Додати в кошик" className="btn yellow btn-buy">
                <span className="price-box price-final_price">
                  <span className="price-container price-final_price tax weee">
                    <span className="price-wrapper ">
                      <span className="price">
                        {price}
                        <span className="currency">{currency}</span>
                      </span>
                    </span>
                  </span>
                </span>{' '}
                <span className="ico-wrap"></span>
                <button type="submit"></button>
              </label>
            </div>{' '}
          </form>
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
