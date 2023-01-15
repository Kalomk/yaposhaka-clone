module.exports = {
  appProps: {
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
    draggable: false,
  },
  AdvantagesProps: {
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
  },
  bannerProps: {
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
  },
};
