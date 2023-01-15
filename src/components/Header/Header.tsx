import './Header.scss';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MiniCart from '../MiniCart/MiniCart';
import { useState } from 'react';
import ColapsedMenu from '../CollapsedMenu/CollapsedMenu';
import MobileMenu from '../MobileMenu/MobileMenu';
import useMediaQuery from '@mui/material/useMediaQuery';
import FeedBack from '../FeedBack/FeedBack';
import { useClickOutside } from '../../hooks/useClickOutside';
import data from '../../data/menu';
import { Link, useLocation } from 'react-router-dom';

type ConditionalWrapperProps = {
  condition: boolean;
  children?: JSX.Element;
  wrapper: any;
};

const ConditionalWrapper: React.FC<ConditionalWrapperProps> = ({ condition, wrapper, children }) =>
  condition ? wrapper(children) : children;

const Header = () => {
  const [current, setCurrent] = useState('');
  const isLargerThan1024 = useMediaQuery('(max-width:1024px');
  const [mobileref, openMenu, setOpenMenu] = useClickOutside(false);
  const [feedBackRef, openModal, setOpenModal] = useClickOutside(false);
  const location = useLocation();

  let timer: number | ReturnType<typeof setTimeout> = 0;
  const TIMEOUT: number = 500;

  const mouseEnter = (e) => {
    timer = setTimeout(() => {
      setCurrent(e);
    }, TIMEOUT);
  };

  const mouseLeave = () => {
    setCurrent('');
    clearTimeout(timer);
  };

  const logoJsx = (
    <strong className="logo">
      <meta itemProp="name" content="Япошка - Итальяни" />
      <meta itemProp="email" content="info@yaposhka.com.ua>" />
      <meta itemProp="telephone" content="2200" />
      <meta itemProp="url" content="https://www.yaposhka.kh.ua/ua/" />
      <img
        className="desktop-logo"
        src="https://www.yaposhka.kh.ua/media/logo/stores/2/file.png"
        alt="Япошка - Итальяни"
        width="194"
        height="79"
      ></img>
      <img
        className="mobile-logo"
        src="https://www.yaposhka.kh.ua/media/shop/stores/2/file_1.png"
        alt="Япошка - Итальяни"
        width="189"
        height="64"
      ></img>
    </strong>
  );

  return (
    <header className="header">
      <div className="header__container container">
        <div ref={mobileref} onClick={setOpenMenu} className="header__burger">
          <span></span>
        </div>
        <div className="header__logo">
          <ConditionalWrapper
            condition={location.pathname !== '/'}
            wrapper={(children) => <Link to={'/'}>{children}</Link>}
          >
            {logoJsx}
          </ConditionalWrapper>
        </div>
        <div className="header__secondary secondary-header">
          <ul className="secondary-header__list">
            <li>
              <Link to={'/reustarant'}>Ресторани</Link>
            </li>
            <li>
              <Link to={'/delivery'}>Доставка та оплата</Link>
            </li>
            <li>
              <Link to={'/about'}>Про нас</Link>
            </li>
            <li>
              <Link to={'/bonus'}>Бонуси</Link>
            </li>
          </ul>
          <form action="" className="header__form form-header">
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
                <span style={{ fontWeight: 600, marginBottom: 2 }} className="selected">
                  Харкiв
                </span>
                <span className="arrow-block">
                  <KeyboardArrowDownIcon style={{ marginTop: 3 }} />
                </span>
              </div>
            </div>
          </div>
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

          <div className="header__account account-header">
            {' '}
            <div className="account-header__title">Мій кабінет </div>
            <span className="header-account__icon">
              <PermIdentityIcon />
            </span>
          </div>
        </div>
        <div className="header__primary">
          <nav className="header__navigation navigation-header">
            <ul className="navigation-header__navigation">
              {data.navigationItems.map((item, id) => {
                return (
                  <li
                    key={id}
                    onMouseEnter={() => mouseEnter(item.spollerData)}
                    onMouseLeave={mouseLeave}
                    className={'navigation__item ' + item.className}
                  >
                    {item.name}
                    {item.spollerData && (
                      <div className="item-nav__trigger">
                        <span className="item-nav__arrow">
                          <KeyboardArrowDownIcon />
                        </span>
                        <ColapsedMenu
                          collapsedMenuData={current}
                          showColapsedMenu={current === item.spollerData ? true : false}
                        />
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="header__call call-header">
            <div className="call-header__number">
              <LocalPhoneIcon />
              <div className="info">
                <div className="num">2200 </div>
                <div className="phone-text">Цілодобово </div>
              </div>
            </div>
            <div className="callback-link">
              <span onClick={setOpenModal} className="callback__link">
                call back
              </span>
            </div>
          </div>
        </div>
        <MiniCart />
      </div>
      {isLargerThan1024 && <MobileMenu mobileMenuRef={mobileref} showBurger={openMenu} />}
      <FeedBack feedBackRef={feedBackRef} closeModal={setOpenModal} openModal={openModal} />
    </header>
  );
};

export default Header;
