import Slider from 'react-slick';
import './CustomSlider.scss';
import { useEffect, useRef, useState } from 'react';
interface CustomSliderProps {
  className: string;
  dots: boolean;
  width: number;
  slide: string;
  sliders: Sliders;
  autoplaySpeed?: number;
  slideIndex?: number;
  fade: boolean;
  autoplay?: boolean;
  draggable?: boolean;
}
type Trigger = {
  title: string;
  text: string;
  appLinks: string;
  img: string;
  switcher?: boolean;
};
interface Sliders {
  trigger?: Trigger[];
  pictures?: string[];
}
const CustomSlider: React.FC<CustomSliderProps> = ({
  className,
  dots,
  width,
  slide,
  sliders,
  autoplaySpeed,
  fade,
  slideIndex = 0,
  autoplay = true,
  draggable = true,
}) => {
  const [thing, setThing] = useState('thing1');
  const settings = {
    dots,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay,
    fade,
    autoplaySpeed,
    className,
    slide,
    slideWidth: width,
    draggable,
    beforeChange: (oldIndex, newIndex) => {
      switch (newIndex) {
        case 0:
          setThing('thing1');
          break;
        case 1:
          setThing('thing2');
          break;
      }
    },
  };
  const slider = useRef<any>(null);

  useEffect(() => {
    if (slider.current) {
      slider.current.slickGoTo(slideIndex);
    }
  }, [slideIndex]);
  const handleOnClick = () => {
    if (thing === 'thing1') {
      slider.current.slickGoTo(1);
    } else {
      slider.current.slickGoTo(0);
    }
  };
  return (
    <>
      <Slider ref={slider} {...settings}>
        {sliders.pictures
          ? sliders.pictures.map((item, id) => (
              <div key={id} className="slide">
                <img className="slick-img" src={item} alt="" />
              </div>
            ))
          : sliders.trigger &&
            sliders.trigger.map((item, id) => (
              <div className={item.switcher ? 'slide bonus' : 'slide'} key={id}>
                {item.switcher && (
                  <div onClick={handleOnClick} className="slide-trigger">
                    <span className="trigger-text header-2">
                      <span>{thing === 'thing1' ? 'Бонуси' : 'Додаток'} </span>
                    </span>
                  </div>
                )}
                <div className="content">
                  <div className="slide-content">
                    <h3 className="slide-title">{item.title}</h3>
                    <p className="slide-text">{item.text}</p>
                    {/* <div className="slide-applinks">
                      <a href="#">{item.appLinks}</a>
                    </div> */}
                  </div>
                  <img className="slide-img" src={item.img} alt="alt" />
                </div>
              </div>
            ))}
      </Slider>
    </>
  );
};

export default CustomSlider;
