import GoogleMap from '../../components/Map/GoogleMap';
import './Delivery.scss';
import { useClickOutside } from '../../hooks/useClickOutside';

const Delivery = () => {
  const [popupRef, openPopup, setOpenPopup] = useClickOutside(false);

  return (
    <div className="delivery">
      <div className="container">
        {' '}
        <section className="text-pages-banner">
          <img
            src="https://www.yaposhka.kh.ua/media/paymentdelivery/cache/1016x540/stores/2/file.jpg"
            className="main-image"
            alt="delivery"
          />
        </section>
        <section className="shipping-variants-wrap container-small-textpage">
          <ul className="shipping-variants">
            <li className="shipping-variant">
              <strong className="title">Від 199 грн </strong>
              <strong className="sub-title">безкоштовно* </strong>
              <div className="desc">детальні умови доставки дивіться на карті нижче </div>
            </li>
            <li className="shipping-variant">
              <strong className="title">До 199 грн </strong>
              <strong className="sub-title">50 грн </strong>
              <div className="desc">при замовленні до 199 грн доставка по Харкову 50 грн </div>
            </li>
            <li className="shipping-variant">
              <strong className="title">Час доставки </strong>
              <strong className="sub-title">від 30 хв </strong>
              <div className="desc">для замовлень на певний час інтервал +/- 9 хв </div>
            </li>
            <li className="shipping-variant">
              <strong className="title">Доставка їжі </strong>
              <strong className="sub-title">10.00-21.00 </strong>
              <div className="desc">
                якщо розрахунковий час доставки замовлення перевищує 22:00 - ми не можемо прийняти
                замовлення, щоб кур'єри встигли роз'їхатись по домівках до комендантської години{' '}
              </div>
            </li>
            <li className="shipping-variant">
              <strong className="title">Ресторани </strong>
              <strong className="sub-title">10.00-21.00 </strong>
              <div className="desc">
                Адреси <a href="https://www.yaposhka.kh.ua/ua/restaurant"> та контакти </a>{' '}
              </div>
            </li>
            <li className="shipping-variant">
              <strong className="title">Самовивіз </strong>
              <strong className="sub-title">знижка 10% </strong>
              <div className="desc">
                Адреси та режим роботи дивіться на
                <a href="http://www.yaposhka.kh.ua/blog/skidka-na-samovynos-10.html"> карті</a>{' '}
              </div>
            </li>
          </ul>
        </section>
        <section className="shipping-map">
          <h3 className="title container-small-textpage">Доставка в передмістя </h3>
          <div className="map-wrap">
            <div className="street-map">
              <GoogleMap />
            </div>
            <button onClick={setOpenPopup} className="btn wayra wayra-yellow btn-dest">
              <span className="wayra-inner">
                Куди доставити <span className="svg-wrap"></span>
              </span>
            </button>
            <div className={openPopup ? 'places-popup active' : 'places-popup'}>
              <div className="places-wrap">
                <div className="scroll-container">
                  <ul ref={popupRef} className="places">
                    <li className="place" data-value="16">
                      Харків
                    </li>
                    <li className="place">Бабаї</li>
                    <li className="place">Безлюдівка</li>
                    <li className="place">Велика Данилівка</li>
                    <li className="place">Гаврилівка</li>
                    <li className="place">Горбани</li>
                    <li className="place">Жихор</li>
                    <li className="place">сел. Жуковського</li>
                    <li className="place">Котляри</li>
                    <li className="place">Кулінічі</li>
                    <li className="place">Лідне</li>
                    <li className="place">Лелюки</li>
                    <li className="place">Мовчани</li>
                    <li className="place">Пісочин</li>
                    <li className="place">Подвірки</li>
                    <li className="place">Покотилівка</li>
                    <li className="place">Солоницівка</li>
                    <li className="place">Федорці, Павленки</li>
                    <li className="place">Хроли</li>
                  </ul>
                </div>
                <div className="closer">
                  <svg className="i-svg i-closer">
                    <use xlinkHref="#i-closer"></use>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="place-note container-small-textpage">
            <div className="note-content">
              Якщо ваш населений пункт не зазначений, уточнюйте вартість у оператора. При замовленні
              за акціями, підсумкова вартість замовлення враховується без знижки. Допустима похибка
              у вазі замовлення +-3%.{' '}
            </div>
          </div>
        </section>
        <section className="container-small-textpage payment-methods-wrap">
          <h3 className="title">Способи оплати </h3>
          <div className="payment-note"></div>

          <ul className="payment-methods">
            <li className="payment-method">
              <div className="content">
                <strong className="title">готівкою кур'єру при передачі замовлення</strong>
                <div className="desc"></div>
              </div>
            </li>
            <li className="payment-method">
              <div className="content">
                <strong className="title">карткою кур'єру</strong>
                <div className="desc">
                  недоступно для замовлень, час доставки яких після 19.00!{' '}
                </div>
              </div>
            </li>
            <li className="payment-method">
              <div className="content">
                <strong className="title">карткою на сайті</strong>
                <div className="desc"></div>
              </div>
            </li>
          </ul>

          <br />

          <h3 className="title">Режим роботи </h3>
          <div className="payment-note">Доставка їжі з 10:00-20:00. Працюємо без вихідних. </div>
        </section>
        <section className="supplements-block container-small-textpage">
          <h3 className="title">Соуси та імбир</h3>
          <div className="content">До замовлень безкоштовно надаються:</div>
          <table className="supplements-table">
            <tbody>
              <tr>
                <td>Імбир:</td>
                <td>Соєвий соус:</td>
                <td>Васабі:</td>
              </tr>
              <tr>
                <td className="cell">1-4 роли = 1 шт.</td>
                <td className="cell">1-2 роли = 1 шт.</td>
                <td className="cell">1-4 роли = 1 шт.</td>
              </tr>
              <tr>
                <td className="cell">5-8 роли = 2 шт.</td>
                <td className="cell">3-4 роли = 2 шт.</td>
                <td className="cell">5-8 роли = 2 шт.</td>
              </tr>
              <tr>
                <td className="cell">+1 шт. на кожні 4 роли</td>
                <td className="cell">+1 шт. на кожні 2 роли</td>
                <td className="cell">+1 шт. на кожні 4 роли</td>
              </tr>
              <tr>
                <td className="cell">4 суші = 1 рол = 1 шт</td>
                <td className="cell">4 суші = 1 рол = 1 шт</td>
                <td className="cell">4 суші = 1 рол = 1 шт</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default Delivery;
