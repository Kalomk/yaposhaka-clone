import './AdavantageText.scss';
import { useState, useEffect } from 'react';

const AdavantageText = ({ changeSlide, currentSlide }) => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let timer: number | ReturnType<typeof setTimeout> = 0;
    const TIMEOUT: number = 4400;
    if (!isHovered) {
      if (currentSlide < 3) {
        timer = setTimeout(() => {
          changeSlide((prev) => prev + 1);
        }, TIMEOUT);
      } else {
        changeSlide(0);
      }
    }
    return () => {
      clearTimeout(timer);
    };
  }, [currentSlide, isHovered]);

  const mouseEnter = (index) => {
    changeSlide(index);
    setIsHovered(true);
  };
  const mouseLeave = () => {
    setIsHovered(false);
  };

  const advantages = [
    {
      title: 'Графік роботи 10.00-21.00',
      description: 'У період воєнного часу',
      index: 0,
    },
    {
      title: 'Точний час доставки',
      description:
        'Запізнимося більше, ніж на 9 хвилин - подаруємо промокод на 150 грн (не діє, якщо доставка відбувається у час повітряної тривоги або відключення електроенергії)',
      index: 1,
    },
    {
      title: 'Трекінг замовлення',
      description: 'Відстежуйте доставку на карті у реальному часі',
      index: 2,
    },
  ];

  return (
    <div className="advantages-text">
      {advantages.map((item, id) => (
        <div
          key={id}
          onMouseEnter={() => mouseEnter(item.index)}
          onMouseLeave={mouseLeave}
          className={item.index === currentSlide ? 'advantage active' : 'advantage'}
        >
          <div className="inner">
            <strong className="title">{item.title}</strong>
            {item.description}{' '}
          </div>
        </div>
      ))}
    </div>
  );
};
export default AdavantageText;
