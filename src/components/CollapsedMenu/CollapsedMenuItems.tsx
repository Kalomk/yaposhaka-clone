type SpollerItemType = {
  title: string;
  link: string;
  img: string;
};

const SpollerItem: React.FC<SpollerItemType> = ({ link, img, title }) => {
  return (
    <li>
      <a className="img-link" href={link}>
        <div>
          <img src={img} alt={title} width="120" height="120" />
        </div>
      </a>
      <a href={link}>
        <span title={title}>{title}</span>
      </a>
    </li>
  );
};
export default SpollerItem;
