import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import ProductGallery from '../../components/ProductGallery/ProductGallery';

type GalleryDataProps = {
  title: string;
  filters: string[];
  items: any;
};
interface ItemProps {
  weight: string;
  name: string;
  price: string;
  currency: string;
  img: { desc: { webp: string; jpg: string }[]; mob: { webp: string; jpg: string }[] };
  listOfDescription?: string[];
  count?: number;
}
const Gallery: React.FC<GalleryDataProps> = (props) => {
  return (
    <>
      <BreadCrumbs title={props.title} />
      <ProductGallery {...props} />
    </>
  );
};
export default Gallery;
