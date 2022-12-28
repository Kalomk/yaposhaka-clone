import './FeedBack.scss';
import ReactDOM from 'react-dom';
import Input from '../Input/Input';
const FeedBack = ({ openModal, feedBackRef, closeModal }) => {
  return ReactDOM.createPortal(
    <div
      ref={feedBackRef}
      className={
        openModal
          ? 'feedback-popup-content feedback-popup active'
          : 'feedback-popup-content feedback-popup'
      }
    >
      <div className="feedback-inner">
        <div className="feedback-container">
          <h3 className="title">Замовити дзвінок </h3>
          <div className="intro">Ми зателефонуємо через декілька хвилин </div>
          <form
            className="form"
            action="https://www.yaposhka.kh.ua/ua/callback/callback/send/"
            id="callback-form"
            method="post"
          >
            <div className="error-wrap">
              <Input type="text" name="name" title="Ім'я" />
            </div>
            <div className="error-wrap">
              <Input type="text" name="name" title="Телефон" />
            </div>
            <div className="g-recaptcha" id="callback-recaptcha"></div>
            <div className="recaptcha-message-callback"></div>
            <div className="btn-wrap">
              <button type="submit" className="btn yellow">
                <span className="wayra-inner">Зателефонуйте мені </span>
              </button>
            </div>
          </form>
        </div>
        <div className="feedback-message"></div>
      </div>

      <div className="spinner-wrap">
        <div className="spinner">
          <div className="double-bounce1"></div>
          <div className="double-bounce2"></div>
        </div>
      </div>
      <a onClick={() => closeModal(false)} href="#" className="closer"></a>
    </div>,
    document.getElementById('feedback-popup') as HTMLElement
  );
};

export default FeedBack;
