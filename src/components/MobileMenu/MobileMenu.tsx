import './MobileMenu.scss';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { useState } from 'react';
import data from '../../data/dropDownData';
import menu from '../../data/menu';
import ReactDOM from 'react-dom';

const MobileMenu = ({ mobileMenuRef, showBurger }) => {
  const [isActive, setActive] = useState('');

  const handleSetActiveClass = (e) => {
    setActive(e);
  };

  return ReactDOM.createPortal(
    <div ref={mobileMenuRef} className={showBurger ? 'mobile-menu active' : 'mobile-menu'}>
      <div
        className="header__switcher switcher-language"
        data-ui-id="language-switcher"
        id="switcher-language"
      >
        <ul className="switcher-list">
          <li className="view-ru switcher-option">
            <a href="#c">Ru</a>
          </li>
          <li className="view-ua switcher-option current">
            <a href="#f">Ua</a>
          </li>
          <li className="view-en switcher-option">
            <a href="#e">En</a>
          </li>
        </ul>
      </div>
      <div className="header__call call-header">
        <div className="call-header__number">
          <LocalPhoneIcon />
          <div className="info">
            <div className="num">2200 </div>
            <div className="phone-text">Цілодобово </div>
          </div>
        </div>
        <div className="callback-link">
          <span className="callback__link">call back</span>
        </div>
      </div>
      <nav className="header__navigation navigation-header">
        <ul className="navigation-header__navigation">
          {menu.navigationItems.map((item, id) => (
            <li key={id}>
              <div onClick={() => handleSetActiveClass(item.spollerData)}>
                <span>{item.name}</span>
                {item.spollerData && (
                  <span>
                    <KeyboardArrowDownIcon />
                  </span>
                )}
              </div>
              {item.spollerData && (
                <ul
                  className={
                    isActive === item.spollerData ? 'level0 submenu active' : 'level0 submenu'
                  }
                >
                  <button onClick={() => setActive('')} className="back-btn">
                    Назад
                  </button>
                  {data.dropdownMenuListItems[item.spollerData].map((subItem) => (
                    <li key={subItem.id}>
                      <a href={subItem.link}>
                        <span className="link-in" title={subItem.title}>
                          {subItem.title}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <div className="bottom-menu-wrapper">
        <div className="header__account account-header">
          {' '}
          <div className="account-header__title">Мій кабінет </div>
          <span className="header-account__icon">
            <PermIdentityIcon />
          </span>
        </div>
        <ul className="secondary-header__list">
          <li>Ресторани</li>
          <li>Доставка та оплата</li>
          <li>Про нас</li>
          <li>Бонуси</li>
        </ul>
        <form action="" className="header__form form-header">
          <div className="field-search">
            <div className="form-header__control">
              <input
                id="search"
                type="text"
                name="q"
                placeholder="Пошук"
                className="input-text"
                maxLength={128}
                autoComplete="off"
              ></input>
            </div>
          </div>
          <div className="form-header__actions">
            <button type="submit" title="Пошук" className="search">
              <SearchIcon />
            </button>
          </div>
        </form>
        <div
          style={{ display: 'flex', alignItems: 'center', gap: 5 }}
          className="header__region region-links"
        >
          <span className="label">Ваше місто</span>
          <div className="region-dropdown">
            <div style={{ display: 'flex', alignItems: 'center' }} className="region-toggle">
              <span className="selected">Харкiв</span>
              <span className="arrow-block">
                <KeyboardArrowDownIcon style={{ marginTop: 3 }} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('mobile-menu') as HTMLElement
  );
};

export default MobileMenu;
