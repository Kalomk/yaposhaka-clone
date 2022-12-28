import './Bonus.scss';

const Bonus = () => {
  return (
    <div className="bonus-page">
      <section className="text-pages-banner container">
        <img
          src="https://www.yaposhka.kh.ua/media/bonus/cache/1016x540/stores/2/file.jpg"
          alt="img"
          className="main-image general"
        />
        <img
          src="https://www.yaposhka.kh.ua/media/bonus/cache/640x756/stores/2/file_1.jpg"
          alt="img"
          className="main-image mobile"
        />
        <div className="text-wrap"></div>
      </section>

      <div className="container-small">
        <section className="get-percents">
          <h3 className="main-title">
            Реєструйся та отримуй <span className="orange">від 5 до 10%</span> від суми замовлення
            на свій бонусний рахунок{' '}
          </h3>

          <p>Відсоток бонусу залежить від загальної суми здійснених замовлень</p>
          <br />

          <div className="percents-list">
            <div className="percent-item">
              <div className="percent-value">5%</div>
              <div className="percent-cost">
                <span>от</span>
                <span className="price">
                  1&nbsp;000&nbsp;<span className="currency">грн</span>
                </span>{' '}
              </div>
            </div>
            <div className="percent-item">
              <div className="percent-value">6%</div>
              <div className="percent-cost">
                <span>от</span>
                <span className="price">
                  3&nbsp;000&nbsp;<span className="currency">грн</span>
                </span>{' '}
              </div>
            </div>
            <div className="percent-item">
              <div className="percent-value">7%</div>
              <div className="percent-cost">
                <span>от</span>
                <span className="price">
                  5&nbsp;000&nbsp;<span className="currency">грн</span>
                </span>{' '}
              </div>
            </div>
            <div className="percent-item">
              <div className="percent-value">8%</div>
              <div className="percent-cost">
                <span>от</span>
                <span className="price">
                  7&nbsp;000&nbsp;<span className="currency">грн</span>
                </span>{' '}
              </div>
            </div>
            <div className="percent-item">
              <div className="percent-value">9%</div>
              <div className="percent-cost">
                <span>от</span>
                <span className="price">
                  10&nbsp;000&nbsp;<span className="currency">грн</span>
                </span>{' '}
              </div>
            </div>
            <div className="percent-item">
              <div className="percent-value">10%</div>
              <div className="percent-cost">
                <span>от</span>
                <span className="price">
                  15&nbsp;000&nbsp;<span className="currency">грн</span>
                </span>{' '}
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="percent-validation">
        <div className="container-small">
          <h3 className="title">Бонуси прив'язуються до номера телефону</h3>
          <div className="about-bonuses-list">
            <div className="bonus-item">
              <div className="secondary">1 бонус дорівнює </div>
              <div className="primary">1 гривні </div>
            </div>
            <div className="bonus-item">
              <div className="secondary">Бонуси дійсні </div>
              <div className="primary">4 місяца з моменту останнього замовлення на доставку </div>
            </div>
            <div className="bonus-item">
              <div className="secondary">Бонусами можно оплатити </div>
              <div className="primary">
                <span>до</span>
                100% замовлення{' '}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-small">
        <section className="get-percents">
          <div className="intro">
            <h3 className="title"></h3>
            <div className="text"></div>
            <h3 className="title">Як почати користуватися?</h3>
            <p>Хочете отримувати бонуси? Просто повідомте про це оператору. </p>
            <h3 className="title"></h3>
            <p>
              Для того щоб оплачувати онлайн замовлення бонусами, необхідно увійти в особистий
              кабінет. В особистому кабінеті також можна дізнатися стан бонусного рахунку. Щоб
              отримати доступ до особистого кабінету, потрібно пройти просту реєстрацію на нашому
              сайті.{' '}
            </p>
            <a className="btn yellow" href="https://www.yaposhka.kh.ua/ua/customer/account/create/">
              Зареєструватися
            </a>
          </div>
        </section>

        <section className="bonus-description">
          <h3 className="title">Правила бонусної системи</h3>
          <p style={{ textAlign: 'justify' }}>
            <span>
              Бонуси починають нараховуватися після того, як сума попередніх замовлень перевищить
              1000 грн. Бонусний рахунок прив'язан на номер телефона, з якого здійснюється
              замовлення. При замовленні з іншого номера необхідно на початку оформлення замовлення
              попросити оператора зарахувати бонуси на рахунок, який закріплен до вашого основного
              номера. Ви повинні використовувати для входу в особистий кабінет саме основний номер -
              якщо бажаєте сплатити замовлення на сайті бонусами.
            </span>
            &nbsp;&nbsp;
          </p>
          <p>Бонуси не нараховуються:</p>
          <p>- за замовлення, оформлені з будь-якою знижкою;&nbsp;</p>
          <p>
            - за замовлення,&nbsp;<span>оформлені в сервісах доставки&nbsp;</span>
            <span>Glovo, Rocket та Bolt, та через інші сайти-посередники;</span>
          </p>
          <p>- за замовлення напоїв та подарункових сертифікатів.</p>
          <p dir="ltr" style={{ textAlign: 'justify' }}>
            <span>
              Замовлення, що містять алкогольну продукцію, неможливо оплатити за допомогою бонусів.
            </span>
          </p>
          <p dir="ltr" style={{ textAlign: 'justify' }}>
            <span>
              Якщо ви використовуєте для замовлення отриману раніше знижку-компенсацію, то в такому
              випадку, відсоток бонусів від замовлення буде додано до величини знижки і використано
              для оплати цього замовлення.
            </span>
          </p>
          <p dir="ltr" style={{ textAlign: 'justify' }}>
            Дізнатися про поточний стан бонусного рахунку і відсотку бонусів можна у наших
            операторів або в особистому кабінеті, в нашому{' '}
            <a href="https://tinyurl.com/ycyhwka6" target="_blank">
              Viber-боті
            </a>
            . <br />
            Відсоток нарахування бонусів і умови бонусної програми можуть змінюватися, подробиці
            уточнюйте у операторів.
          </p>
          <div style={{ textAlign: 'justify' }}>
            <span>
              Бонуси можна закріпити за іншим номером телефону. Для цього, скажіть про це оператору
              під час оформлення замовлення, напишіть на пошту okk@yaposhka.com.ua або в наш чат на
              сайті, або зателефонувавши на 2200.
            </span>
          </div>{' '}
        </section>
      </div>
    </div>
  );
};
export default Bonus;
