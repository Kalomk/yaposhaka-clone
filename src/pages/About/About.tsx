import './About.scss';

const About = () => {
  return (
    <div className="about">
      <div className="page-title-wrapper">
        <h1 className="page-title">
          <span className="base" data-ui-id="page-title-wrapper">
            Про нас
          </span>{' '}
        </h1>
      </div>
      <div className="container-small">
        <div className="seo-text mCustomScrollbar _mCS_2 mCS-autoHide">
          <div id="mCSB_2" className="mCustomScrollBox mCS-minimal-dark mCSB_vertical mCSB_outside">
            <div id="mCSB_2_container" dir="ltr" className="mCSB_container">
              <p style={{ textAlign: 'justify' }}>
                <span style={{ color: '#000000' }}>
                  <span>
                    Наша історія розпочалася у Харкові у 2011 р. Тоді ми відкрили цілодобову
                    доставку суші та піци "Япошка". За 9 років ми змінили фірмовий стиль, відкрили 5
                    кухонь доставки та 3 ресторани у центрі міста. В меню, окрім суші та піци,
                    з'явилися гарячі страви, WOK, боули, десерти, ексклюзивні лінійки Royal ролів та
                    сезонних страв від бренд-шефа. Восени 21-го ми розпочали роботу в Одесі та
                    планували відкриватися й в інших містах.{' '}
                  </span>
                  <br />
                  <span>
                    Але ці плани зруйнував напад 24-го лютого. З першого дня війни ми почали
                    готувати обіди нашим захисникам та всім, хто потребував допомоги. Незважаючи на
                    зруйновану рашистською ракетою кухню, навесні ми відновили роботу доставки та
                    ресторанів. Тому що, ніякі ракети не завадять нам дарувати гарний настрій
                    смачною їжею та працювати заради перемоги!
                  </span>
                  <br />
                  <span>
                    У цьому відео ви можете побачити як ми працювали у перші місяці війни.
                  </span>
                </span>
              </p>
              <p>
                <span style={{ color: '#000000' }}>
                  <span></span>
                </span>
                &nbsp;
                <iframe
                  data-src="https://www.youtube.com/embed/l8B4hpQDdiw"
                  width="560"
                  height="500"
                  frameBorder="0"
                  //   allowFullScreen=""
                  src="https://www.youtube.com/embed/l8B4hpQDdiw"
                ></iframe>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
