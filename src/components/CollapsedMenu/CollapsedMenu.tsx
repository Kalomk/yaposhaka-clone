import './CollapsedMenu.scss';
import ColapsedMenuItem from './CollapsedMenuItems';
import { useRef, useEffect, useState } from 'react';
import data from '../../data/dropDownData';
type CollapsedMenuType = {
  showColapsedMenu: boolean;
  collapsedMenuData: string;
};
type CollapsedMenuData = {
  id: string;
  title: string;
  link: string;
  img: string;
};

const INITIAL_MAX_HEIGHT = 1000;

const ColapsedMenu: React.FC<CollapsedMenuType> = ({ showColapsedMenu, collapsedMenuData }) => {
  const collapseMenuRef = useRef<HTMLUListElement>(null);
  const isFirstRender = useRef(true);
  const firstShowColapsedMenu = useRef(true);
  const maxHeightRef = useRef(INITIAL_MAX_HEIGHT);
  const [checkStyle, setCheckStyle] = useState<'' | 'hidden'>('hidden');
  const [dataType, setDataType] = useState<CollapsedMenuData[]>([]);

  const getDataType = (collapsedMenuData: string) => {
    switch (collapsedMenuData) {
      case 'sushi':
        setDataType(data.dropdownMenuListItems.sushi);
        break;
      case 'pizzas':
        setDataType(data.dropdownMenuListItems.pizzas);
        break;
      case 'others':
        setDataType(data.dropdownMenuListItems.others);
        break;
    }
  };
  useEffect(() => {
    console.log(data.dropdownMenuListItems.sushi);
  }, []);
  const closeDelaySpoller = async (ms) => {
    await new Promise((r) => setTimeout(r, ms));
    setCheckStyle('hidden');
  };

  useEffect(() => {
    if (collapseMenuRef.current && !isFirstRender.current) {
      if (
        maxHeightRef.current > collapseMenuRef.current.offsetHeight &&
        maxHeightRef.current !== INITIAL_MAX_HEIGHT
      ) {
        // HALT!! // Someone collapsed the menu too early! // The offsetHeight is not full.
        return;
      }
      maxHeightRef.current = collapseMenuRef.current.offsetHeight;
    }

    if (showColapsedMenu && isFirstRender.current) {
      isFirstRender.current = false;
    }
    console.log(dataType);
  }, [showColapsedMenu, collapsedMenuData]);

  useEffect(() => {
    getDataType(collapsedMenuData);
    if (!firstShowColapsedMenu.current) {
      // eslint-disable-next-line
      const show = showColapsedMenu ? setCheckStyle('') : closeDelaySpoller(550);
    } else {
      firstShowColapsedMenu.current = false;
    }
  }, [showColapsedMenu, setCheckStyle]);

  return (
    <ul
      className={`item_nav__submenu ${checkStyle}
`}
      style={
        showColapsedMenu
          ? {
              maxHeight: maxHeightRef.current,
            }
          : {
              maxHeight: 0,
            }
      }
      ref={collapseMenuRef}
    >
      {dataType.map((item) => (
        <ColapsedMenuItem key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default ColapsedMenu;
