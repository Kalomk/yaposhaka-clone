import './ProductGallery.scss';
import ProductItem from '../ProductItem/ProductItem';

const ProductGallery = ({ title, filters, items }) => {
  return (
    <div className={'product-gallery'}>
      <div className="product-gallery__header header-gallery container">
        <div className="header-gallery__title container-small">{title}</div>
      </div>
      <div className="container">
        <ul className="tabs-nav">
          {filters.map((item, id) => (
            <li key={id} className={id === 0 ? 'tab-link-wrap active' : 'tab-link-wrap'}>
              <span className="tab-link">{item}</span>
            </li>
          ))}
        </ul>
        <div className={title === 'Хіти' ? 'product-grid background' : 'product-grid'}>
          <ul className="product-list">
            {items.map((item) => (
              <ProductItem key={item.name} {...item} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default ProductGallery;
