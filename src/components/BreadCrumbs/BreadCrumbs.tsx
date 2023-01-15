import { useLocation, Link } from 'react-router-dom';
import './BreadCrumbs.scss';
type BreadCrumbsprops = {
  title?: string;
  name?: string;
};

const BreadCrumbs: React.FC<BreadCrumbsprops> = ({ title, name }) => {
  const pathname = useLocation().pathname;
  const currentLocationLink: string[] = [];
  const crumbs = pathname
    .split('/')
    .filter((crumb) => crumb !== '')
    .map((crumb) => {
      currentLocationLink.push(`/${crumb}`);
      return (
        <li key={crumb} className={'item'}>
          <Link to={currentLocationLink.join('')}>{title ? title : name}</Link>
        </li>
      );
    });

  return (
    <div className="breadcrumbs">
      <ul className="items">
        <li className="item home">
          <Link to={'/'} key={'/'}>
            Головна
          </Link>
        </li>
        {crumbs}
      </ul>
    </div>
  );
};
export default BreadCrumbs;
