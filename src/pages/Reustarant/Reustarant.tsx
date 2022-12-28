import CustomSlider from '../../components/CustomSlider/CustomSlider';
import GoogleMap from '../../components/Map/GoogleMap';
import './Reustarant.scss';

const bannerProps = {
  sliders: {
    pictures: [
      'https://www.yaposhka.kh.ua/media/restaurant/gallery/cache/1016x540/20-ll-min.jpg',
      'https://www.yaposhka.kh.ua/media/restaurant/gallery/cache/1016x540/n3.jpg',
      'https://www.yaposhka.kh.ua/media/restaurant/gallery/cache/1016x540/4_1_k-min.jpg',
      'https://www.yaposhka.kh.ua/media/restaurant/gallery/cache/1016x540/18-02-0l-min.jpg',
      'https://www.yaposhka.kh.ua/media/restaurant/gallery/cache/1016x540/petr1.jpg',
      'https://www.yaposhka.kh.ua/media/restaurant/gallery/cache/1016x540/petrs2.jpg',
      'https://www.yaposhka.kh.ua/media/restaurant/gallery/cache/1016x540/18-04.jpg',
      'https://www.yaposhka.kh.ua/media/restaurant/gallery/cache/1016x540/20-ll-min.jpg',
    ],
  },
  className: 'banner',
  dots: true,
  width: 1016,
  slide: 'a',
  autoplaySpeed: 2500,
  fade: false,
};

const Reustarant = () => {
  return (
    <div className="container">
      <CustomSlider autoplay={true} {...bannerProps} />
      <section className="restaurant-description">
        <div className="content">
          <p>
            Мережа ресторанів японської та італійської кухні Япошка - це три заклади в центрі
            Харкова. Крім суші і піц, в меню гарячі страви, локшина WOK, салати-Боул, авторські
            десерти і коктейлі. Вранці в Япошка подають сніданки. Наші ресторани підходять для
            зустрічей великих компаній - в кожному є столи на 10-12 осіб. Для гостей з дітьми
            передбачені стільчики для годування, розмальовки та спеціальне дитяче меню. У ресторанах
            на пр. Науки та вул. Короленка є ігрові кімнати.
          </p>
          <p></p>
          <p>
            Кожен наш ресторан має неповторний стиль. Однак, всі вони об'єднані ідеєю східного
            мінімалізму, і по-своєму відображають це.
          </p>
          <p></p>
          <p>
            «Япошка» на Ярослава Мудрого став першим нашим рестораном і був відкритий у 2016 р. Його
            інтер'єр символізує тісний зв'язок людини і природи, характерний азіатській традиції.
            Меблі розробляли молоді українські дизайнери. В оформленні зали переважають натуральні
            матеріали: дерево, текстиль і багато живих рослин. Інтер'єр закладу став переможцем
            конкурсу Салон Design Awards (2017 р.)
          </p>
          <p></p>
          <p>Для броні стола в Япошці на Ярослава Мудрого, подзвоніть 0662202200 </p>
          <p></p>
          <p>
            У 2017 році ми відкрили наступний ресторан на пр. Науки. Інтер'єр «Япошки» на пр. Науки
            - це втілення гучного нічного міста: яскраві неонові вивіски та металеві конструкції на
            стінах. Меблі ресторану також створювали українські дизайнери. Для дітей ми обладнали
            ігрову кімнату, де вони можуть проводити час, поки батьки відпочивають.
          </p>
          <p></p>
          <p>Для броні стола в Япошці на проспекті Науки, подзвоніть 0662202200 </p>
          <p></p>
          <p>
            Япошка на Короленка - наш "найновіший" і найбільший ресторан. Він займає два поверхи.
            Ресторан витриманий в стилі міських джунглів. У залах багато світла, живої зелені і
            натуральних елементів. Меблі для ресторану була привезена з Італії. На другому поверсі
            ігрова кімната для дітей та панорамні вікна з видом на центр Харкова.{' '}
          </p>
          <p></p>
          <p>Для броні стола в Япошці на Короленко, подзвоніть 0662202200 </p>
          <p></p>
          <p>Чекаємо вас у гості!</p>
          <p> </p>
        </div>
        <section className="menu-block">
          <a href="https://storinka.menu/yaposhka" target="_blank">
            <button className="restaurant-menu btn wayra wayra-yellow">
              <span className="wayra-inner">Основне меню</span>
            </button>
          </a>
          <a href="https://storinka.menu/yaposhka/7yN/WRl" target="_blank">
            <button className="restaurant-season-menu season btn wayra wayra-yellow">
              <span className="wayra-inner">Сезонне меню</span>
            </button>
          </a>
        </section>
      </section>
      <section className="restaurant-contact">
        <div className="contact">
          <div className="content">
            <h3 className="title">Ресторани</h3>
            <div className="metro">Пушкінська </div>
            <div className="address">м. Харків, вул. Ярослава Мудрого, 33/35 </div>
            <div className="phone-list">
              <ul>
                <li>
                  <a href="tel:066-220-22-00">066-220-22-00</a>
                </li>
              </ul>
            </div>
            <div className="work-time">ПН-НД: 10.00 - 21.00</div>
            <div className="work-time"></div>
            <div className="metro">Наукова </div>
            <div className="address">м. Харків, пр. Науки, 11 </div>
            <div className="phone-list">
              <ul>
                <li>
                  <a href="tel:066-220-22-00">066-220-22-00</a>
                </li>
              </ul>
            </div>
            <div className="work-time">ПН-НД: 10.00 - 21.00 </div>
            <div className="metro">Майдан Конституції </div>
            <div className="address">м. Харків, вул. Короленка, 4 </div>
            <div className="phone-list">
              <ul>
                <li>
                  <a href="tel:066-220-22-00">066-220-22-00</a>
                </li>
              </ul>
            </div>
            <div className="work-time">ПН-НД: 10.00 - 21.00 </div>
          </div>
        </div>
        <div className="restaurant-map">
          <GoogleMap />
        </div>
      </section>
    </div>
  );
};
export default Reustarant;
