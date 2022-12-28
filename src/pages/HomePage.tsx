import CustomSlider from '../components/CustomSlider/CustomSlider';
import './HomePage.scss';
import { useState } from 'react';
import AdavantageText from '../components/AdvantageText/AdvantageText';
import ProductGallery from '../components/ProductGallery/ProductGallery';
const bannerProps = {
  sliders: {
    pictures: [
      'https://www.yaposhka.kh.ua/media/home/gallery/_21_30.jpg',
      'https://www.yaposhka.kh.ua/media/home/gallery/file_7.jpg',
      'https://www.yaposhka.kh.ua/media/home/gallery/setswinua.jpg',
      'https://www.yaposhka.kh.ua/media/home/gallery/agentukr.jpg',
      'https://www.yaposhka.kh.ua/media/home/gallery/burgersua.jpg',
    ],
  },
  className: 'banner',
  dots: true,
  width: 1016,
  slide: 'a',
  autoplaySpeed: 2500,
  fade: false,
};
const AdvantagesProps = {
  sliders: {
    pictures: [
      'https://www.yaposhka.kh.ua/media/home/advantages/cache/460x460/file.png',
      'https://www.yaposhka.kh.ua/media/home/advantages/cache/460x460/_-1.png',
      'https://www.yaposhka.kh.ua/media/home/advantages/cache/460x460/24.7.png',
    ],
  },
  className: 'advantages',
  dots: false,
  width: 461,
  slide: 'div',
  autoplaySpeed: 4400,
  fade: true,
};
const appProps = {
  sliders: {
    trigger: [
      {
        img: 'https://www.yaposhka.kh.ua/static/version1670503576/frontend/Yaposhka/theme/uk_UA/images/app-bonuses/mobile-app-new.png',
        title: 'Мобільний додаток',
        text: 'Робіть замовлення прямо зі свого смартфону',
        appLinks:
          'href="https://apps.apple.com/ua/app/%D1%8F%D0%BF%D0%BE%D1%88%D0%BA%D0%B0-%D0%B4%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BA%D0%B0-%D0%B2%D0%BA%D1%83%D1%81%D0%BD%D0%BE%D0%B9-%D0%B5%D0%B4%D1%8B/id1541655931?l=ru"',
      },
      {
        img: 'https://www.yaposhka.kh.ua/static/version1670503576/frontend/Yaposhka/theme/uk_UA/images/app-bonuses/percent.png',
        title: 'Бонусна програма',
        text: 'Реєструйся та отримуй від 5 до 10% від суми замовлення на свій бонусний рахунок',
        appLinks:
          'href="https://apps.apple.com/ua/app/%D1%8F%D0%BF%D0%BE%D1%88%D0%BA%D0%B0-%D0%B4%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BA%D0%B0-%D0%B2%D0%BA%D1%83%D1%81%D0%BD%D0%BE%D0%B9-%D0%B5%D0%B4%D1%8B/id1541655931?l=ru"',
        switcher: true,
      },
    ],
  },
  className: 'app-mobile',
  dots: false,
  width: 1016,
  slide: 'div',
  fade: false,
};
const hits = {
  title: 'Хіти',
  filters: ['Новинки', 'Популярні'],
  items: [
    {
      weight: '430г',
      name: 'Лосось де Юкрейн',
      price: '279',
      currency: 'грн',
      description:
        'Бургер з норвезьким лососем, який захотів змінити громадянство, коли побачив мальовничі краєвиди України. Авокадо мус додає заморського смаку, але наші свіжі огірочки вже вчать його української. Лосось де Юкрейн — вишуканий бургер для поціновувачів свіжих смаків та червоної рибки.',
      img: {
        desc: [
          {
            webp: 'https://www.yaposhka.kh.ua/media/catalog/product/cache/2/image_product_list_mobile/588x500/beff4985b56e3afdbeabfc89641a4582/2/9/2900003346.webp',
            jpg: 'https://www.yaposhka.kh.ua/media/catalog/product/cache/2/image_product_list_mobile/588x499/4489a222f1f65f21100d7d0a545d3c40/2/9/2900003346.jpg',
          },
        ],
        mob: [
          {
            webp: 'https://www.yaposhka.kh.ua/media/catalog/product/cache/2/image_product_list_type1/508x348/beff4985b56e3afdbeabfc89641a4582/5/0/508x348_5_1.webp',
            jpg: 'https://www.yaposhka.kh.ua/media/catalog/product/cache/2/image_product_list_type1/508x347/4489a222f1f65f21100d7d0a545d3c40/5/0/508x348_5_1.jpg',
          },
        ],
      },
      switcher: {
        active: 'комбо',
        only: 'Лише бургер',
      },
    },
    {
      weight: '280г',
      name: 'Рол кранч лосось роял',
      price: '289',
      currency: 'грн',

      listOfDescription: [
        'рис',
        'норі',
        'сир філадельфія',
        'огірок',
        'соус фірмовий',
        'тобіко червона',
      ],
      img: {
        desc: [
          {
            webp: 'https://www.yaposhka.kh.ua/media/catalog/product/cache/2/image_product_list_mobile/588x500/beff4985b56e3afdbeabfc89641a4582/5/8/588x500_5.webp',
            jpg: 'https://www.yaposhka.kh.ua/media/catalog/product/cache/2/image_product_list_mobile/588x499/4489a222f1f65f21100d7d0a545d3c40/5/8/588x500_5.jpg',
          },
        ],
        mob: [
          {
            webp: 'https://www.yaposhka.kh.ua/media/catalog/product/cache/2/image_product_list_type2/445x350/beff4985b56e3afdbeabfc89641a4582/4/4/445x350_4.webp',
            jpg: 'https://www.yaposhka.kh.ua/media/catalog/product/cache/2/image_product_list_type2/445x349/4489a222f1f65f21100d7d0a545d3c40/4/4/445x350_4.jpg',
          },
        ],
      },
      count: 8,
    },
    {
      weight: '280г',
      name: 'Рол кранч лосось роял',
      price: '289',
      currency: 'грн',

      listOfDescription: [
        'рис',
        'норі',
        'сир філадельфія',
        'огірок',
        'соус фірмовий',
        'тобіко червона',
      ],
      img: {
        desc: [
          {
            webp: 'https://www.yaposhka.kh.ua/media/catalog/product/cache/2/image_product_list_mobile/588x500/beff4985b56e3afdbeabfc89641a4582/5/8/588x500_5.webp',
            jpg: 'https://www.yaposhka.kh.ua/media/catalog/product/cache/2/image_product_list_mobile/588x499/4489a222f1f65f21100d7d0a545d3c40/5/8/588x500_5.jpg',
          },
        ],
        mob: [
          {
            webp: 'https://www.yaposhka.kh.ua/media/catalog/product/cache/2/image_product_list_type2/445x350/beff4985b56e3afdbeabfc89641a4582/4/4/445x350_4.webp',
            jpg: 'https://www.yaposhka.kh.ua/media/catalog/product/cache/2/image_product_list_type2/445x349/4489a222f1f65f21100d7d0a545d3c40/4/4/445x350_4.jpg',
          },
        ],
      },
      count: 8,
    },
    {
      weight: '280г',
      name: 'Рол кранч лосось роял',
      price: '289',
      currency: 'грн',

      listOfDescription: [
        'рис',
        'норі',
        'сир філадельфія',
        'огірок',
        'соус фірмовий',
        'тобіко червона',
      ],
      img: {
        desc: [
          {
            webp: 'https://www.yaposhka.kh.ua/media/catalog/product/cache/2/image_product_list_mobile/588x500/beff4985b56e3afdbeabfc89641a4582/5/8/588x500_5.webp',
            jpg: 'https://www.yaposhka.kh.ua/media/catalog/product/cache/2/image_product_list_mobile/588x499/4489a222f1f65f21100d7d0a545d3c40/5/8/588x500_5.jpg',
          },
        ],
        mob: [
          {
            webp: 'https://www.yaposhka.kh.ua/media/catalog/product/cache/2/image_product_list_type2/445x350/beff4985b56e3afdbeabfc89641a4582/4/4/445x350_4.webp',
            jpg: 'https://www.yaposhka.kh.ua/media/catalog/product/cache/2/image_product_list_type2/445x349/4489a222f1f65f21100d7d0a545d3c40/4/4/445x350_4.jpg',
          },
        ],
      },
      count: 8,
    },
  ],
};

const HomePage = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  return (
    <>
      <div className="home-page">
        <div className="container gallery-wrap">
          {' '}
          <CustomSlider {...bannerProps} />
        </div>
        <div className="advantages-wrapper">
          <div className="container">
            <CustomSlider autoplay={false} slideIndex={slideIndex} {...AdvantagesProps} />
            <AdavantageText currentSlide={slideIndex} changeSlide={setSlideIndex} />
          </div>
        </div>
        <ProductGallery {...hits} />
        <div className="container">
          <CustomSlider autoplay={false} {...appProps} />
        </div>
      </div>
    </>
  );
};

export default HomePage;
