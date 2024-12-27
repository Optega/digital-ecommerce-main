import { AiOutlineLink } from 'react-icons/ai';
import { BsLightningCharge, BsPhone } from 'react-icons/bs';
import { FaPinterest, FaTruck } from 'react-icons/fa';
import { FaHeadphones, FaXTwitter } from 'react-icons/fa6';
import { IoGameControllerOutline, IoLogoFacebook } from 'react-icons/io5';
import { LuDivide } from 'react-icons/lu';
import {
  Ri24HoursLine,
  RiExchangeDollarLine,
  RiToolsFill,
} from 'react-icons/ri';
import phoneheader from 'src/images/Group_103-1.webp';
import headphonesheader from 'src/images/Group_105.webp';
import watchheader from 'src/images/Group_106.webp';
import gamingheader from 'src/images/Group_157.webp';
import slider_hp from 'src/images/new_arrival/Slider_1.webp';
import slider_pc from 'src/images/new_arrival/slider_laptop.webp';
import slider_watch from 'src/images/new_arrival/Slider_watch.webp';
import ae from 'src/images/payments/american-express-svgrepo-com.svg';
import dc from 'src/images/payments/diners-club-svgrepo-com.svg';
import dic from 'src/images/payments/discover-svgrepo-com.svg';
import mc from 'src/images/payments/mastercard-svgrepo-com.svg';
import pp from 'src/images/payments/paypal-svgrepo-com.svg';
import visa from 'src/images/payments/visa-logo-svgrepo-com.svg';

import type { NavItemType } from '@/components/NavItem';
import antennaBanner from '@/images/categories/antenna-banner.png';
import antennaCat from '@/images/categories/antennaCat.png';
import cableBanner from '@/images/categories/cable-banner.png';
import cableCat from '@/images/categories/cableCat.png';
import gamingCat from '@/images/categories/gaming.webp';
import gamingBanner from '@/images/categories/gaming-banner.webp';
import headphonesCat from '@/images/categories/headphones.webp';
import headphonesBanner from '@/images/categories/headphones-banner.webp';
import laptopBanner from '@/images/categories/laptop-banner.webp';
import laptopCat from '@/images/categories/laptops.webp';
import phonesBanner from '@/images/categories/phone-banner.webp';
import phonesCat from '@/images/categories/phones.webp';
import speakersBanner from '@/images/categories/speaker-banner.webp';
import speakersCat from '@/images/categories/speakers.jpg';
import smartWatchBanner from '@/images/categories/watch-banner.webp';
import smartWatchCat from '@/images/categories/watches.webp';
import amiga from '@/images/companies/Amiga.svg';
import amiga_dark from '@/images/companies/Amiga-white.svg';
import helenSmith from '@/images/companies/HelenSmith.svg';
import helenSmith_dark from '@/images/companies/HelenSmith-white_f9d76722-bd61-40b5-846a-39ccd4003eb3.svg';
import johnson from '@/images/companies/Johnson_Berg.svg';
import johnson_dark from '@/images/companies/Johnson_Berg-white.svg';
import stela from '@/images/companies/Stela.svg';
import stela_dark from '@/images/companies/Stela-white.svg';
import antena3gUmts21db from '@/images/products/3g-antena-umts-21-db.jpg';
import jumper_3m_cable_43_10_male_male_1 from '@/images/products/3m-jumper-cable-43-10-male-male-1.webp';
import jumper_3m_cable_43_10_male_male_2 from '@/images/products/3m-jumper-cable-43-10-male-male-2.webp';
import jumper_3m_cable_43_10_male_male_3 from '@/images/products/3m-jumper-cable-43-10-male-male-3.webp';
import amazfit_watch_1 from '@/images/products/amazfit_watch_1.png';
import amazfit_watch_2 from '@/images/products/amazfit_watch_2.jpg';
import amazfit_watch_3 from '@/images/products/amazfit_watch_3.jpg';
import ankerSoundcore1 from '@/images/products/ankerSoundcore1.jpg';
import ankerSoundcore2 from '@/images/products/ankerSoundcore2.avif';
import ankerSoundcore3 from '@/images/products/ankerSoundcore3.avif';
import antennaHuaweiAtr4518r7v07 from '@/images/products/antenna-huawei-atr4518r7v07.jpg';
import applewatch1 from '@/images/products/applewatch1.png';
import applewatch2 from '@/images/products/applewatch2.webp';
import applewatch3 from '@/images/products/applewatch3.webp';
import dualsense1 from '@/images/products/dualsense1.jpg';
import dualsense2 from '@/images/products/dualsense2.jpg';
import dualsense3 from '@/images/products/dualsense3.jpg';
import ear2 from '@/images/products/ear2.avif';
import ear3 from '@/images/products/ear3.jpeg';
import ear from '@/images/products/earphones.jpg';
import fifa from '@/images/products/fifa.jpg';
import harman from '@/images/products/Harman-Kardon.jpg';
import hf_adapter_nf_ericsson_rnt1565_1 from '@/images/products/hf-adapter-nf-ericsson-rnt1565-1.jpg';
import hf_adapter_nf_ericsson_rnt1565_2 from '@/images/products/hf-adapter-nf-ericsson-rnt1565-2.webp';
import hf_adapter_nf_ericsson_rnt1565_3 from '@/images/products/hf-adapter-nf-ericsson-rnt1565-3.webp';
import iphone1 from '@/images/products/iphone_14_1.jpg';
import iphone2 from '@/images/products/iphone_14_2.jpg';
import iphone3 from '@/images/products/iphone_14_3.jpg';
import jbl1 from '@/images/products/jbl_go_3_black_1.jpg';
import jbl2 from '@/images/products/jbl_go_3_black_2.jpg';
import jbl3 from '@/images/products/jbl_go_3_black_3.jpg';
import krugovaAntenna5dbIndoor from '@/images/products/krugova-antenna-5db-900-1800-indoor.jpg';
import macbook1 from '@/images/products/Macbook 1.jpg';
import macbook2 from '@/images/products/Macbook 2.jpg';
import macbook3 from '@/images/products/Macbook 3.jpg';
import mikrotikSRj01 from '@/images/products/mikrotik-s-rj01.jpg';
import moduleTpLinkTlSm311lm from '@/images/products/modul_tp-link_tl-sm311lm.jpg';
import modulSfp2mm from '@/images/products/modul-sfp-2mm.jpg';
import mouse1 from '@/images/products/mouse1.png';
import mouse2 from '@/images/products/mouse2.jpg';
import mouse3 from '@/images/products/mouse3.jpg';
import nokia_fosh_472579a_sfp_850nm_1 from '@/images/products/nokia-fosh-472579a-sfp-850nm-1.jpg';
import nokia_fosh_472579a_sfp_850nm_2 from '@/images/products/nokia-fosh-472579a-sfp-850nm-2.jpg';
import nokia_fosh_472579a_sfp_850nm_3 from '@/images/products/nokia-fosh-472579a-sfp-850nm-3.jpg';
import opticalModule472579 from '@/images/products/optical-module-472579.jpg';
import pixel1 from '@/images/products/pixel1.png';
import pixel2 from '@/images/products/pixel2.jpg';
import pixel3 from '@/images/products/pixel3.jpg';
import SFPMikroTikS85DLC05D from '@/images/products/SFP-MikroTik-S-85DLC05D.jpg';
import tzc_500_ericsson1 from '@/images/products/tzc-500-ericsson1.jpg';
import tzc_500_ericsson2 from '@/images/products/tzc-500-ericsson2.jpg';
import tzc_500_ericsson3 from '@/images/products/tzc-500-ericsson3.jpg';
import {
  generateRandomRating,
  generateRandomReviews,
  generateSlug,
} from '@/utils/utilities';

import type { BlogType } from './types';

export const headerNavData = {
  mainNavLinks: [
    {
      id: 'ee46t',
      name: 'Каталог',
      href: '/collections',
    },
    {
      id: 'eerrrt',
      name: 'Новини',
      href: '/blogs/news',
    },
    {
      id: 'eexct',
      name: 'Контакти',
      href: '/contact',
    },
  ],
  bottomNavLinks: [
    {
      id: 'ee46t',
      name: 'Телефони',
      href: `/collections/${generateSlug('Phones')}`,
      megaMenuData: {
        title: 'ТЕЛЕФОНИ & СМАРТ ГОДИННИКИ',
        menu1Data: {
          title: 'Телефони',
          links: [
            {
              href: `/collections/${generateSlug('Phones')}`,
              name: 'Fusion F-22',
            },
            {
              href: `/collections/${generateSlug('Phones')}`,
              name: 'Hyperion HX-1',
            },
            {
              href: `/collections/${generateSlug('Phones')}`,
              name: 'Horizon H-88',
            },
            {
              href: `/collections/${generateSlug('Phones')}`,
              name: 'Nova N-s5',
            },
            {
              href: `/collections/${generateSlug('Phones')}`,
              name: 'Zenith z-9',
            },
            {
              href: `/collections/${generateSlug('Phones')}`,
              name: 'Vortex v-5',
            },
          ],
        },
        menu2Data: {
          title: 'Смарт Годинники',
          links: [
            {
              href: `/collections/${generateSlug('Smart Watches')}`,
              name: 'Apex Fitness Watch',
            },
            {
              href: `/collections/${generateSlug('Smart Watches')}`,
              name: 'Horizon Smart Watch',
            },
            {
              href: `/collections/${generateSlug('Smart Watches')}`,
              name: 'Horizon Smart Watch',
            },
            {
              href: `/collections/${generateSlug('Smart Watches')}`,
              name: 'Nexus Smart Watch',
            },
            {
              href: `/collections/${generateSlug('Smart Watches')}`,
              name: 'Nova Smart Watch',
            },
          ],
        },
      },
    },
    {
      id: 'eerrrt',
      name: 'Ноутбуки',
      href: `/collections/${generateSlug('Laptops')}`,
      type: 'dropdown',
      dropDownMenuData: [
        {
          href: '/products/macbook-air-13inch-m1-chip-256gb-143',
          label: 'Echelon Edge 15',
        },
        {
          href: '/products/macbook-air-13inch-m1-chip-256gb-143',
          label: 'EliteBook 15R',
        },
        {
          href: '/products/macbook-air-13inch-m1-chip-256gb-143',
          label: 'NovaBook 17X',
        },
        {
          href: '/products/macbook-air-13inch-m1-chip-256gb-143',
          label: ' Nuvomax',
        },
      ],
    },
    {
      id: 'eexct',
      name: 'Навушники',
      href: `/collections/${generateSlug('Headphones')}`,
    },
    {
      id: 'h6ii8g',
      name: 'Колонки',
      href: `/collections/${generateSlug('Speakers')}`,
    },
    {
      id: 'h678ty',
      name: 'Смарт годинники',
      href: `/collections/${generateSlug('Smart Watches')}`,
    },
    {
      id: 'h6i78g',
      name: 'Геймінг',
      href: `/collections/${generateSlug('Gaming')}`,
    },
    {
      id: 'f578ty',
      name: 'Кабелі та аксесуари',
      href: `/collections/${generateSlug('Cables and accessories')}`,
    },
    {
      id: 'f548ty',
      name: 'Антени',
      href: `/collections/${generateSlug('Antennas')}`,
    },
  ],
};

// remove this
export const topNavLinks2: NavItemType[] = [
  {
    id: 'ee46t',
    name: 'Каталог',
    href: '/collections',
  },
  {
    id: 'eerrrt',
    name: 'Новини',
    href: '/blogs/news',
  },
  {
    id: 'eexct',
    name: 'Контакти',
    href: '/contact',
  },
];

export const catalogNavLinks: NavItemType[] = [
  {
    id: 'ee46t',
    name: 'Телефони',
    href: `/collections/${generateSlug('Phones')}`,
  },
  {
    id: 'eerrrt',
    name: 'Ноутбуки',
    href: `/collections/${generateSlug('Laptops')}`,
  },
  {
    id: 'eexct',
    name: 'Навушники',
    href: `/collections/${generateSlug('Headphones')}`,
  },
  {
    id: 'h6ii8g',
    name: 'Колонки',
    href: `/collections/${generateSlug('Speakers')}`,
  },
  {
    id: 'h678ty',
    name: 'Смарт годинники',
    href: `/collections/${generateSlug('Smart Watches')}`,
  },
  {
    id: 'h6i78g',
    name: 'Геймінг',
    href: `/collections/${generateSlug('Gaming')}`,
  },
  {
    id: 'f578ty',
    name: 'Кабелі та аксесуари',
    href: `/collections/${generateSlug('Cables and accessories')}`,
  },
  {
    id: 'f548ty',
    name: 'Антени',
    href: `/collections/${generateSlug('Antennas')}`,
  },
];

export const guideData = [
  {
    Icon: IoGameControllerOutline,
    text: 'how to choose the right gaming laptop for your needs',
    href: '#',
  },
  {
    Icon: BsPhone,
    text: 'the best accessories to enhance your smartphone experience',
    href: '#',
  },
  {
    Icon: FaHeadphones,
    text: 'the benefits of nosie-Cancelling headphones',
    href: '#',
  },
  {
    Icon: RiToolsFill,
    text: '10 tips for maintaining your electronics and extending their lifespan',
    href: '#',
  },
  {
    Icon: BsLightningCharge,
    text: `the future of wearable technology: what's coming next?`,
    href: '#',
  },
  {
    Icon: BsPhone,
    text: '5G phones: how will the latest network technology affect your experience?',
    href: '#',
  },
];

export const categoriesData = [
  {
    title: 'Навушники',
    slug: generateSlug('Headphones'),
    imgUrl: headphonesCat,
    bannerUrl: headphonesBanner,
    href: `/collections/${generateSlug('Headphones')}`,
  },
  {
    title: 'Телефони',
    slug: generateSlug('Phones'),
    imgUrl: phonesCat,
    bannerUrl: phonesBanner,
    href: `/collections/${generateSlug('Phones')}`,
  },
  {
    title: 'Колонки',
    slug: generateSlug('Speakers'),
    imgUrl: speakersCat,
    bannerUrl: speakersBanner,
    href: `/collections/${generateSlug('Speakers')}`,
  },
  {
    title: 'Смарт годинники',
    slug: generateSlug('Smart Watches'),
    imgUrl: smartWatchCat,
    bannerUrl: smartWatchBanner,
    href: `/collections/${generateSlug('Smart Watches')}`,
  },
  {
    title: 'Геймінг',
    slug: generateSlug('Gaming'),
    imgUrl: gamingCat,
    bannerUrl: gamingBanner,
    href: `/collections/${generateSlug('Gaming')}`,
  },
  {
    title: 'Ноутбуки',
    slug: generateSlug('Laptops'),
    imgUrl: laptopCat,
    bannerUrl: laptopBanner,
    href: `/collections/${generateSlug('Laptops')}`,
  },
  {
    title: 'Кабелі та аксесуари',
    slug: generateSlug('Cables and accessories'),
    imgUrl: cableCat,
    bannerUrl: cableBanner,
    href: `/collections/${generateSlug('Cables and accessories')}`,
  },
  {
    title: 'Антени',
    slug: generateSlug('Antennas'),
    imgUrl: antennaCat,
    bannerUrl: antennaBanner,
    href: `/collections/${generateSlug('Antennas')}`,
  },
];

export const benefitsData = [
  {
    Icon: FaTruck,
    title: `Безкоштовна доставка та повернення`,
    text: `Робіть покупки з упевненістю та доставляйте свою улюблену електроніку без будь-яких додаткових витрат.`,
  },
  {
    Icon: RiExchangeDollarLine,
    title: `Гарантія повернення грошей`,
    text: `Якщо ви не повністю задоволені своєю покупкою, ми виправимо це. Без питань.`,
  },
  {
    Icon: Ri24HoursLine,
    title: `Онлайн підтримка 24/7`,
    text: `Потрібна допомога з електронікою? Зв’яжіться з нами в будь-який час і в будь-якому місці, і ми допоможемо Вам.`,
  },
  {
    Icon: LuDivide,
    title: `Регулярні розпродажі`,
    text: `Не пропустіть наші дивовижні пропозиції з регулярними розпродажами нашої першокласної електроніки.`,
  },
];

export const FAQsData = {
  faqs: [
    {
      question: `Які способи оплати приймаються у вашому магазині?`,
      answer: `Наш інтернет-магазин приймає різні способи оплати, щоб забезпечити зручність покупок для наших клієнтів. Ми приймаємо основні кредитні картки, такі як Visa, MasterCard, American Express і Discover, а також дебетові картки. Крім того, ми пропонуємо підтримку таких платформ цифрових платежів, як PayPal, Apple Pay і Google Pay. Ми постійно працюємо над розширенням наших варіантів оплати, щоб задовольнити потреби наших клієнтів.`,
    },
    {
      question: `Скільки часу займає обробка та відправка мого замовлення?`,
      answer: `Відповідь: Ми прагнемо обробляти та відправляти замовлення якомога швидше. Як правило, замовлення обробляються протягом 1-2 робочих днів після оформлення. Час доставки залежить від вибраного способу доставки та місця призначення посилки. Стандартна доставка зазвичай займає 1-3 робочих днів у межах України. Час міжнародної доставки залежить від країни та часу митної обробки.`,
    },
    {
      question: `Чи можу я повернути або обміняти товар, який я придбав у вашому інтернет-магазині?`,
      answer: `Наш інтернет-магазин пропонує безпроблемне повернення та обмін. Ви можете повернути або обміняти будь-які відповідні товари протягом 14 днів з дати доставки, за умови, що вони знаходяться в оригінальному, невикористаному стані з усіма бірками та упаковкою. Щоб ініціювати повернення або обмін, зв’яжіться з нашою командою підтримки клієнтів через наш веб-сайт або електронною поштою, і вони допоможуть вам пройти цей процес. Будь ласка, зверніть увагу, що витрати на зворотну доставку покладаються на клієнта, якщо тільки товар не має дефектів або з нашого боку сталася помилка.`,
    },
  ],
};

export const socialLinks = [
  { title: 'facebook', href: '#', Icon: <IoLogoFacebook /> },
  { title: 'twitter', href: '#', Icon: <FaXTwitter /> },
  { title: 'pinterest', href: '#', Icon: <FaPinterest /> },
  { title: 'link', href: '#', Icon: <AiOutlineLink /> },
];

export const landingPageHeaderData = [
  {
    title: 'Оновіть свою технічну гру',
    image: phoneheader,
    tag: 'Телефони',
    href: `/collections/${generateSlug('Phones')}`,
  },
  {
    title: 'Відкрийте для себе ідеальні ігрові рішення',
    image: gamingheader,
    tag: 'Геймінг',
    href: `/collections/${generateSlug('Gaming')}`,
  },
  {
    title: 'Почуйте різницю',
    image: headphonesheader,
    tag: 'Навушники',
    href: `/collections/${generateSlug('Headphones')}`,
  },
  {
    title: 'Відчуйте новітні технології',
    image: watchheader,
    tag: 'Смарт годинники',
    href: `/collections/${generateSlug('Smart Watches')}`,
  },
];

export const productCharacterData = [
  {
    title: `Display Resolutions`,
    text: `Retina XDR Display 2532 x 1170 pixels, 19.5:9 ratio, 457 PPI 60Hz`,
  },
  {
    title: `Sound`,
    text: `Custom Tempest Engine 3D Audio, Dolby Atmos & DTS:X (Blu-ray video & UHD Blu-ray video)`,
  },
  {
    title: `Memory`,
    text: `16 GB/256-bit GDDR6 SDRAM 512 MB DDR4 RAM (for background tasks)`,
  },
  {
    title: `Connectivity`,
    text: `Wi-Fi IEEE 802.11ax; Bluetooth 5.1; Gigabit Ethernet; 2× USB 3.2 Gen 2×1; 1× USB 2.0; 1× USB-C with USB 3.2 Gen 2×1; 1× HDMI 2.1`,
  },
];

export const newArrivalsData = [
  {
    title: 'Покращуйте своє життя з передовою електронікою',
    content:
      'Передова електроніка, яка виводить вас на передовий рівень інновацій і технологій',
    image: slider_hp,
    href: '/collections/headphones',
  },
  {
    title: 'Відчуйте майбутнє з нашими новими технологіями',
    content:
      'Найновіші технології, щоб вирушити у захоплюючу цифрову подорож сьогодні.',
    image: slider_pc,
    href: '/collections/laptops',
  },
  {
    title: 'Будьте першим, хто розкриє інновації з новітніми технологіями',
    content: 'Будьте попереду в цьому цифровому світі, що постійно змінюється.',
    image: slider_watch,
    href: '/collections/smart-watches',
  },
];
// unused from here
export const NavLinks: NavItemType[] = [
  {
    id: 'ee46t',
    name: 'Домашня',
    href: '/home',
  },
  {
    id: 'eerrrt',
    name: 'Блог',
    href: '/blog',
  },
  {
    id: 'eexct',
    name: 'Колекція',
    href: '/products',
  },

  {
    id: 'h6ii8g',
    name: 'Контакти',
    href: '/contact',
  },
  {
    id: 'h678ty',
    name: 'FAQ',
    href: '/faqs',
  },
  {
    id: 'h6i78g',
    name: 'Оплата',
    href: '/checkout',
  },
  {
    id: 'f678ty',
    name: 'Кошик',
    href: '/cart',
  },
];

export const products = [
  // ~~~ Ноутбуки
  // Macbook Air 13inch M1 Chip 256GB
  {
    slug: 'macbook-air-13inch-m1-chip-256gb-143',
    name: 'Macbook Air 13inch M1 Chip 256GB',
    brand: 'Apple',
    coverImage: macbook1,
    currentPrice: 39499,
    previousPrice: 41499,
    category: 'Ноутбуки',
    rating: generateRandomRating(),
    reviews: generateRandomReviews(),
    pieces_sold: 41499,
    onSale: true,
    shots: [macbook1, macbook2, macbook3],
    sku: '',
    unit: 'Штук',
    overview:
      '### MacBook Air — найтонший і найлегший ноутбук від Apple. А тепер завдяки чипу Apple M1 він іще й надпотужний. Цей чип забезпечив грандіозний прорив у продуктивності центрального й графічного процесорів\n' +
      '### Найтонший і найлегший ноутбук від Apple стає надпотужним завдяки чипу Apple M1. Легко виконуйте будь-які завдання завдяки надшвидкісному 8-ядерному центральному процесору.\n' +
      'Графічний процесор із щонайбільше **8 ядрами** забезпечує відмінне зображення в додатках та іграх зі складною графікою. **16-ядерна** система Neural Engine прискорює виконання всіх операцій, у яких використовується машинне навчання. Конструкція без вентилятора гарантує безшумну роботу. А ще новий MacBook Air побив власний рекорд роботи від акумулятора — тепер він працює без підзарядки **до 18 годин**.',
    characterData: [
      {
        title: `Діагональ екрану`,
        text: `13,3"`,
      },
      {
        title: `Роздільна здатність екрану`,
        text: `2560x1600`,
      },
      {
        title: `Частота оновлення екрану`,
        text: `60 Гц`,
      },
      {
        title: `Тип матриці`,
        text: `IPS`,
      },
      {
        title: `Яcкравість (nit)`,
        text: `400`,
      },
      {
        title: `Процесор`,
        text: `Apple M1 8 ядер`,
      },
      {
        title: `Об'єм ОЗП`,
        text: `8 ГБ`,
      },
      {
        title: `Накопичувач`,
        text: `256 ГБ SSD`,
      },
    ],
  },
  // Logitech M190 Wireless Mouse
  {
    slug: 'logitech-m190-wireless-mouse-391',
    name: 'Logitech M190 Wireless Mouse',
    brand: 'Logitech',
    coverImage: mouse1,
    currentPrice: 499,
    previousPrice: 699,
    category: 'Ноутбуки',
    rating: generateRandomRating(),
    reviews: generateRandomReviews(),
    pieces_sold: 699,
    onSale: false,
    shots: [mouse1, mouse2, mouse3],
    sku: '',
    unit: 'Штук',
    overview:
      "### ЗРУЧНІСТЬ ПОВНОРОЗМІРНОЇ МИШІ. БЕЗДРОТОВИЙ ЗВ'ЯЗОК БЕЗ ЗАТРИМОК\n" +
      'Ніяких кабелів і повна свобода пересувань — стабільне підключення практично без затримок та збоїв на відстані до 10 метрів. Відмінна якість збірки, 18 місяців роботи від батареї, точне відстеження та порядкова прокрутка — все за доступною ціною\n' +
      '### ПОВНОРОЗМІРНА КОНСТРУКЦІЯ. АБСОЛЮТНИЙ КОМФОРТ\n' +
      'Пристрій добре підходить для роботи як правою, так і лівою рукою; ергономічний дизайн повторює природні вигини долонь великого розміру. Спеціальні округлі кнопки призначені для оптимального розташування пальців, а додаткова підтримка для кисті забезпечує комфорт протягом всього дня.',
    characterData: [
      {
        title: `Тип пристрою`,
        text: `оптична миша`,
      },
      {
        title: `Бездротова`,
        text: `є`,
      },
      {
        title: `Тип бездротового зв'язку`,
        text: `радіозв'язок`,
      },
      {
        title: `Конструктивні особливості`,
        text: `симетрична форма, ергономічний дизайн`,
      },
      {
        title: `Кількість кнопок`,
        text: `2 + колесо прокручування`,
      },
      {
        title: `Макс. роздільна здатність`,
        text: `1000 dpi`,
      },
      {
        title: `Живлення`,
        text: `1xAA`,
      },
      {
        title: `Довжина кабелю/радіус дії`,
        text: `до 10 м`,
      },
    ],
  },
  // !Ноутбуки

  // ~~~ Телефони
  // iPhone 14 128GB
  {
    slug: 'iphone-14-128gb-12',
    name: 'iPhone 14 128GB',
    brand: 'Apple',
    coverImage: iphone1,
    currentPrice: 31999,
    previousPrice: 34999,
    category: 'Телефони',
    rating: generateRandomRating(),
    reviews: generateRandomReviews(),
    pieces_sold: 34999,
    onSale: true,
    shots: [iphone1, iphone2, iphone3],
    sku: '',
    unit: 'Штук',
    overview:
      '### iPhone 14 Більше ніж вражає.\n' +
      '### Неймовірні фотографії як при слабкому, так і при яскравому освітленні.',
    characterData: [
      {
        title: `Кількість sim-карт`,
        text: `2`,
      },
      {
        title: `Формат SIM-карти`,
        text: `Nano-SIM та e-SIM`,
      },
      {
        title: `Стандарти зв'язку`,
        text: `GSM, 3G, 4G (LTE), 5G`,
      },
      {
        title: `Діагональ екрану`,
        text: `6.1"`,
      },
      {
        title: `Роздільна здатність дисплея`,
        text: `2532x1170`,
      },
      {
        title: `Щільність пікселів`,
        text: `460 ppi`,
      },
      {
        title: `Тип екрану`,
        text: `OLED`,
      },
      {
        title: `Процесор`,
        text: `A15 Bionic`,
      },
      {
        title: `Кількість ядер`,
        text: `6`,
      },
      {
        title: `Внутрішня пам'ять`,
        text: `128 ГБ`,
      },
      {
        title: `Камера`,
        text: `12 Мп + 12 Мп`,
      },
      {
        title: `Діафрагма`,
        text: `f/1.5 + f/2.4`,
      },
      {
        title: `Запис відео`,
        text: `4К UHD (3840x2160)`,
      },
      {
        title: `Операційна система`,
        text: `iOS 16`,
      },
    ],
  },
  // Google Pixel 8 Pro 128GB
  {
    slug: 'google-pixel-8-pro-128gb-663',
    name: 'Google Pixel 8 Pro 128GB',
    brand: 'Google',
    coverImage: pixel1,
    currentPrice: 27799,
    previousPrice: 29499,
    category: 'Телефони',
    rating: generateRandomRating(),
    reviews: generateRandomReviews(),
    pieces_sold: 29499,
    onSale: true,
    shots: [pixel1, pixel2, pixel3],
    sku: '',
    unit: 'Штук',
    overview:
      '### Super Actua дисплей 6,7 дюйма: найяскравіший в історії Pixel\n' +
      'Ексклюзивно для Pixel 8 Pro, дисплей Super Actua забезпечує яскравість і чіткість зображення на новому рівні. Завдяки вдосконаленим технологіям, цей дисплей гарантує чудову видимість навіть під прямим сонячним світлом, забезпечуючи винятковий користувацький досвід\n' +
      '### Елегантний дизайн: поєднання полірованого алюмінію та матового скла\n' +
      'Pixel 8 Pro виділяється завдяки своєму преміальному дизайну з полірованою алюмінієвою рамкою та матовою скляною задньою панеллю. Цей елегантний дизайн не лише надає смартфону сучасного вигляду, але й забезпечує комфортне відчуття в руці.' +
      '### Нова ера потужності: чіп Google Tensor G3\n' +
      'Pixel 8 Pro працює на базі нового чіпа Google Tensor G3, спеціально розробленого для підтримки функцій штучного інтелекту від Google. Цей чіп забезпечує неймовірну швидкість та ефективність роботи, дозволяючи використовувати передові функції фото та відео, а також отримувати ще більш розумні рішення на кожен день.',
    characterData: [
      {
        title: `Операційна система`,
        text: `Android 14`,
      },
      {
        title: `Діагональ`,
        text: `6.7"`,
      },
      {
        title: `Технологія дисплею`,
        text: `OLED`,
      },
      {
        title: `Роздільна здатність`,
        text: `3120 x 1440`,
      },
      {
        title: `PPI (щільність пікселів)`,
        text: `513`,
      },
      {
        title: `Частота оновлення екрану`,
        text: `120 Гц`,
      },
      {
        title: `Особливості дисплею`,
        text: `Corning Gorilla Glass Victus 2`,
      },
      {
        title: `Процесор`,
        text: `Google Tensor G3`,
      },
      {
        title: `Частота процесора`,
        text: `3 ГГц`,
      },
      {
        title: `Кількість ядер процесора`,
        text: `Immortalis-G715s MC10`,
      },
      {
        title: `Вбудована пам'ять`,
        text: `128 ГБ`,
      },
      {
        title: `Оперативна пам'ять`,
        text: `8 ГБ`,
      },
      {
        title: `Підтримка карт пам'яті`,
        text: `не підтримує`,
      },
    ],
  },
  // !Телефони

  // ~~~ Колонки
  // JBL GO 3
  {
    slug: 'jbl-go-3-165',
    name: 'JBL GO 3',
    brand: 'JBL',
    coverImage: jbl1,
    currentPrice: 1399,
    previousPrice: 1399,
    category: 'Колонки',
    rating: generateRandomRating(),
    reviews: generateRandomReviews(),
    pieces_sold: 1399,
    onSale: false,
    shots: [jbl1, jbl2, jbl3],
    sku: '',
    unit: 'Штук',
    overview:
      'JBL GO 3 – це нове покоління ультрапортативної колонки, що поєднує легендарний фірмовий звук JBL та яскравий сучасний дизайн. Вона створена для тих, хто не бажає розлучатися з улюбленою музикою ні на секунду, а тому має максимально компактний форм-фактор, водонепроникний корпус із захистом від пилу та вологи й місткий акумулятор. На прогулянці або під час велотренування, біля басейну або на пляжі – нехай улюблена музика супроводжує тебе всюди.',
    characterData: [
      {
        title: `Загальна потужність`,
        text: `4,2 Вт`,
      },
      {
        title: `Потужність сателітів`,
        text: `1x4,2 Вт`,
      },
      {
        title: `Кількість смуг (сателіти)`,
        text: `1`,
      },
      {
        title: `Бездротові інтерфейси`,
        text: `Bluetooth 5.1`,
      },
      {
        title: `Інші інтерфейси`,
        text: `USB Type-C`,
      },
      {
        title: `Відношення сигнал/шум`,
        text: `87 дБ`,
      },
      {
        title: `Діапазон частот`,
        text: `110-20000 Гц`,
      },
      {
        title: `Час роботи від батареї`,
        text: `до 5 годин`,
      },
    ],
  },
  {
    slug: 'harman-kardon-luna-652',
    name: 'Kardon Luna',
    brand: 'Harman',
    coverImage: harman,
    currentPrice: 5999,
    previousPrice: 6999,
    category: 'Колонки',
    rating: generateRandomRating(),
    reviews: generateRandomReviews(),
    pieces_sold: 6999,
    onSale: true,
    shots: [harman],
    sku: '',
    unit: 'Штук',
    overview:
      '### Кришталева чистота звуку\n' +
      "Harman/Kardon Luna Black пропонує вам звук вищого класу з кришталевою чистотою. Кожна нота, кожен акорд відтворюється з вражаючою деталізацією, заповнюючи простір потужним та глибоким звучанням. Захопіться естетикою Luna Black. Її елегантний чорний дизайн з інноваційним підсвічуванням надає акустиці вишуканості та стилю, які доповнюють будь-який інтер'єр.\n" +
      '### Бездротова свобода\n' +
      "Забудьте про непотрібні кабелі. Акустика оснащена технологією бездротового з'єднання, що робить процес слухання музики максимально комфортним та зручним. Легко керуйте акустикою за допомогою сенсорного управління. Просто доторкніться до панелі, щоб змінити трек, регулювати гучність або призупиняти відтворення.\n" +
      '### Портативність та автономія\n' +
      'Luna Black — це не тільки стильна, але і практична акустика. Портативна конструкція дозволяє вам брати її з собою, а довгий час автономної роботи гарантує неймовірні музичні подорожі. З Luna Black ви отримаєте не просто акустику, але й мистецтво звучання. Зробіть своє середовище наповненим музичним насолодженням завдяки цій вражаючій портативній аудіосистемі.',
    characterData: [
      {
        title: `Живлення та акумулятор`,
        text: `Від аккумулятора, повна зарядка за 2,5 години, до 12 годин роботи від одного заряду`,
      },
      {
        title: `Бездротові технології`,
        text: `Bluetooth 5.3`,
      },
      {
        title: `Потужність`,
        text: `40 Вт`,
      },
      {
        title: `Матеріал корпусу`,
        text: `алюмінієвий сплав, тканина`,
      },
      {
        title: `Порти та роз'єми`,
        text: `USB Type C`,
      },
    ],
  },
  // !Колонки

  // ~~~ Геймінг
  // Playstation DualSense Controller
  {
    slug: 'playstation-dualsense-controller-146',
    name: 'Playstation DualSense Controller',
    brand: 'Sony',
    coverImage: dualsense1,
    currentPrice: 2599,
    previousPrice: 3299,
    category: 'Геймінг',
    rating: generateRandomRating(),
    reviews: generateRandomReviews(),
    pieces_sold: 3299,
    onSale: true,
    shots: [dualsense1, dualsense2, dualsense3],
    sku: '',
    unit: 'Штук',
    overview:
      '### Повний контроль над грою\n' +
      'Бездротовий контролер DualSense подарує вам відчуття занурення в геймінг. Завдяки переробленому дизайну і інноваційним функціям ви зможете пережити неймовірні ігрові пригоди і поділитися реалістичними враженнями в прямому ефірі.\n' +
      '### Нове відчуття ігрової реальності\n' +
      'Реалістична тактильна віддача і динамічні тригери дозволять вам відчути себе в епіцентрі ігрових подій. Парні приводи замість вібромоторчиків забезпечують реальну фізичну віддачу у відповідь на дії. Тригери демонструють різну ступінь зусилля і опору в залежності від подій, що відбуваються: чи натягаєте ви тятиву, ведете перехресний вогонь або тиснете на гальма.\n' +
      '### Мікрофон для спілкування\n' +
      "Вбудований мікрофон дасть можливість спілкуватися з друзями по команді і обговорювати стратегію в реальному часі. Ви також зможете скористатися роз'ємом 3.5 мм для підключення гарнітури. Натисніть на кнопку, щоб вимкнути звук, обмежити спілкування і зосередитися на грі.\n" +
      '### Створення контенту\n' +
      'Спеціальна кнопка створення дозволяє вести стріми і записувати найгостріші моменти гри. Кнопка створення дасть можливість проводити прямі трансляції для фанатів і розбирати гру прямо «з місця подій».\n' +
      '### Чудова ергономіка\n' +
      'Бездротовий контролер DualSense поєднує в дизайні вдалі моменти попередніх напрацювань з удосконаленою ергономікою і харизматичним стилем. Знайоме розташування кнопок і допрацьовані джойстики забезпечують комфорт і повний контроль над ігровим процесом.\n' +
      '### Динамік для більшої реалістичності\n' +
      'Вбудований динамік розширює межі сприйняття, додаючи в геймінг звукові ефекти. Ви зможете чітко почути кожен шерех і шелест, щоб миттєво зорієнтуватися і відбити небезпеку.\n' +
      '### Датчики рухів\n' +
      'Вбудований акселерометр і гіроскоп дозволяють більш точно управляти рухами вашого персонажа і краще орієнтуватися в ігровому світі.\n' +
      '### Проста підзарядка\n' +
      "Скористайтеся універсальним роз'ємом USB Type-C, щоб швидко зарядити батарею контролера і продовжити пригоди.",
    characterData: [
      {
        title: `Тип`,
        text: `Геймпад`,
      },
      {
        title: `Призначення`,
        text: `Для ігрової приставки, Для PC, Для ноутбуків`,
      },
      {
        title: `Сумісні платформи`,
        text: `PlayStation 5, Windows, Android, Apple iOS, Apple Mac OS`,
      },
      {
        title: `Загальна кількість кнопок`,
        text: `18`,
      },
      {
        title: `Підключення`,
        text: `Комбіноване`,
      },
      {
        title: `Інтерфейс приєднання`,
        text: `Bluetooth та дротове`,
      },
      {
        title: `Роз'єми`,
        text: `Jack 3.5 mm, USB Type-C`,
      },
      {
        title: `Живлення`,
        text: `Акумулятор`,
      },
    ],
  },
  // FIFA 23
  {
    slug: 'fifa-23-157',
    name: 'FIFA 23',
    brand: 'EA Sports',
    coverImage: fifa,
    currentPrice: 999,
    previousPrice: 1499,
    category: 'Геймінг',
    rating: generateRandomRating(),
    reviews: generateRandomReviews(),
    pieces_sold: 1499,
    onSale: false,
    shots: [fifa],
    sku: '',
    unit: 'Штук',
    overview:
      'FIFA 23 - гра, яка ознаменує кінець епохи для EA. FIFA 23 стане останньою грою в серії, що зветься FIFA. Надалі серія називатиметься EA Sports FC. Тому розробники зробили все можливе щоб нова і остання гра серії була в рази кращою за попередню.',
    characterData: [
      {
        title: `Тип`,
        text: `Гра`,
      },
      {
        title: `Виробник`,
        text: `Sony`,
      },
      {
        title: `Платформа`,
        text: `PlayStation 5`,
      },
      {
        title: `Видання`,
        text: `Standart`,
      },
      {
        title: `Вік`,
        text: `3+`,
      },
      {
        title: `Макс. Кількість Гравців`,
        text: `4`,
      },
      {
        title: `Дата Виходу`,
        text: `01.10.2022`,
      },
      {
        title: `Рік випуску`,
        text: `2022`,
      },
      {
        title: `Видавець`,
        text: `Electronic Arts`,
      },
      {
        title: `Носій`,
        text: `Blu-ray`,
      },
      {
        title: `Комплектація`,
        text: `Диск, Коробка`,
      },
    ],
  },
  // !Геймінг

  // ~~~ Навушники
  // Samsung Type-C AKG Earphones
  {
    slug: 'samsung-type-c-akg-earphones-112',
    name: 'Samsung Type-C AKG Earphones',
    brand: 'Samsung',
    coverImage: ear,
    currentPrice: 579,
    previousPrice: 712,
    category: 'Навушники',
    rating: generateRandomRating(),
    reviews: generateRandomReviews(),
    pieces_sold: 712,
    onSale: true,
    shots: [ear, ear2, ear3],
    sku: '',
    unit: 'Штук',
    overview:
      '### Відчуття від прослуховування на новому рівні\n' +
      "Насолоджуйтесь звуком із винятковою якістю, без спотворень. Навушники Samsung USB Type-C створені таким чином, що розділяють звук на правий та лівий канали вдесятеро ефективніше, ніж звичайні навушники з роз'ємом 3.5 мм. А вбудований ЦАП підвищує якість звучання так, що можливо навіть давно відомий трек заграє для вас по-новому.\n" +
      '### Музика для ваших вух\n' +
      'Створені за участю світових фахівців AKG в галузі аудіотехніки, дротові навушники з двосмуговими динаміками Samsung USB Type-C забезпечують чітке, природне та збалансоване звучання.\n' +
      '### Розроблено для вашого комфорту\n' +
      'Зручна посадка забезпечується завдяки легкій вазі та ергономічній формі навушників, а також можливості підібрати вушні вкладиші відповідного розміру з комплекту. Обплетення з тканини не дозволить дроту перегинатися або сплутуватися в сумці чи кишені.\n' +
      '*інформація про товар може змінюватися або доповнюватися виробником без попередження.',
    characterData: [
      {
        title: `Матеріал корпусу`,
        text: `Пластик`,
      },
      {
        title: `Матеріал амбушур`,
        text: `Силікон`,
      },
      {
        title: `Виробник`,
        text: `Samsung`,
      },
      {
        title: `Тип навушників`,
        text: `Вкладиші`,
      },
      {
        title: `Тип підключення`,
        text: `Дротове`,
      },
      {
        title: `Мікрофон`,
        text: `Так`,
      },
      {
        title: `Шумозаглушення`,
        text: `Так`,
      },
      {
        title: `Опір`,
        text: `32 Ом`,
      },
    ],
  },
  // Anker Life 2 Neo
  {
    slug: 'anker-life-2-neo-54',
    name: 'Anker Life 2 Neo',
    brand: 'Anker',
    coverImage: ankerSoundcore1,
    currentPrice: 2094,
    previousPrice: 2159,
    category: 'Навушники',
    rating: generateRandomRating(),
    reviews: generateRandomReviews(),
    pieces_sold: 52,
    onSale: false,
    shots: [ankerSoundcore1, ankerSoundcore2, ankerSoundcore3],
    sku: '',
    unit: 'Штук',
    overview: `Anker Soundcore Life 2 Neo — це бездротові накладні навушники Bluetooth із швидкою зарядкою через USB-C, які забезпечують 60-годинний час відтворення та 40-міліметровий драйвер, а також підсилення низьких частот і вхід AUX — навушники Bluetooth гарного чорного кольору`,
    characterData: [
      {
        title: `Тип навушників`,
        text: `Повнорозмірні (повний обхват вуха)`,
      },
      {
        title: `Тип підключення`,
        text: `Бездротові`,
      },
      {
        title: `Регульоване наголов'я`,
        text: `Так`,
      },
      {
        title: `Поворотні чашки`,
        text: `Так`,
      },
      {
        title: `Aкустичне оформлення`,
        text: `Закриті`,
      },
      {
        title: `Конструкція випромінювача`,
        text: `Динамічні`,
      },
      {
        title: `Матеріал амбушур`,
        text: `Штучна шкіра`,
      },
      {
        title: `Форма роз'єму навушника`,
        text: `Прямий`,
      },
      {
        title: `Типи роз'ємів`,
        text: `3.5 мм`,
      },
      {
        title: `Довжина кабелю`,
        text: `1,2 м`,
      },
      {
        title: `Підвід кабелю`,
        text: `Одностороннє`,
      },
      {
        title: `З'єднання кабелю`,
        text: `Від'єднуваний`,
      },
      {
        title: `Регулювання гучності`,
        text: `Так`,
      },
      {
        title: `Діапазон частот`,
        text: `20 - 20000 Гц`,
      },
      {
        title: `Опір`,
        text: `16 Ом`,
      },
      {
        title: `Час автономної роботи`,
        text: `До 60 годин`,
      },
      {
        title: `Bluetooth`,
        text: `Так`,
      },
      {
        title: `Радіус дії бездротового зв'язку`,
        text: `До 15 м`,
      },
      {
        title: `Мікрофон`,
        text: `Так`,
      },
      {
        title: `Конструкція мікрофона`,
        text: `Вбудований в корпус навушників`,
      },
      {
        title: `Спрямованість мікрофона`,
        text: `Всеспрямований`,
      },
    ],
  },
  // !Навушники

  // ~~~ Смарт годинники
  // Apple Watch Series 9 45MM
  {
    slug: 'apple-watch-series-9-45mm-616',
    name: 'Apple Watch Series 9 45MM',
    brand: 'Apple',
    coverImage: applewatch1,
    currentPrice: 18399,
    previousPrice: 20999,
    category: 'Смарт годинники',
    rating: generateRandomRating(),
    reviews: generateRandomReviews(),
    pieces_sold: 252,
    inStock: 0,
    onSale: true,
    shots: [applewatch1, applewatch2, applewatch3],
    sku: '',
    unit: 'Штук',
    overview:
      '### Міцніший. Розумніший. Яскравіший.\n' +
      'Apple Watch Series 9 допомагає залишатися на зв’язку, підтримувати здоров’я, безпеку й активний спосіб життя. Подвійний дотик — магічний спосіб взаємодії з Apple Watch, який оснащено ще яскравішим дисплеєм.\n' +
      '### ЧОМУ APPLE WATCH SERIES 9\n' +
      'Ваш незамінний помічник для здорового способу життя став іще потужнішим. Завдяки чипу S9 у цього годинника надяскравий дисплей і новий магічний спосіб швидко та легко взаємодіяти з Apple Watch, не торкаючись екрана. Удосконалені функції моніторингу показників здоров’я, безпеки та активності забезпечують потужну аналітику та допомогу в потрібний момент. А оновлені додатки у watchOS дають змогу отримувати більше інформації одночасно.\n' +
      '### ВУГЛЕЦЕВА НЕЙТРАЛЬНІСТЬ\n' +
      'Алюмінієвий корпус Apple Watch Series 9 у парі з найновішим спортивним ремінцем роблять годинник вуглецевонейтральним. Детальніше про Apple і довкілля на apple.com/2030.',
    characterData: [
      {
        title: `Функціональність`,
        text: `для дорослих`,
      },
      {
        title: `Операційна система`,
        text: `Watch OS`,
      },
      {
        title: `Сумісність`,
        text: `iOS (Apple)`,
      },
      {
        title: `Вид діяльності`,
        text: `плавання; велоспорт; біг`,
      },
      {
        title: `Дизайн`,
        text: `спортивний`,
      },
      {
        title: `Форма корпусу`,
        text: `прямокутна`,
      },
      {
        title: `Розмір корпусу`,
        text: `45`,
      },
      {
        title: `Тип індикації`,
        text: `стрілочно-цифровий`,
      },
      {
        title: `Особливості корпусу`,
        text: `захист від води (можливість занурення)`,
      },
      {
        title: `Керування`,
        text: `кнопки сенсорний екран`,
      },
      {
        title: `Датчики та модулі`,
        text: `крокомір; альтиметр; компас; гіроскоп акселерометр; ЕКГ; оксиметр;`,
      },
      {
        title: `Корисні функції`,
        text: `виявлення автомобільної аварії, режим енергозбереження, виявлення падіння, швидка зарядка`,
      },
      {
        title: `Джерело живлення`,
        text: `акумулятор`,
      },
      {
        title: `Процесор`,
        text: `S9`,
      },
    ],
  },
  // Amazfit Pop 3R
  {
    slug: 'amazfit-pop-3r-860',
    name: 'Amazfit Pop 3R',
    brand: 'Amazfit',
    coverImage: amazfit_watch_1,
    currentPrice: 2299,
    previousPrice: 2799,
    category: 'Смарт годинники',
    rating: generateRandomRating(),
    reviews: generateRandomReviews(),
    pieces_sold: 124,
    onSale: false,
    shots: [amazfit_watch_1, amazfit_watch_2, amazfit_watch_3],
    sku: '',
    unit: 'Штук',
    overview:
      "### Стиль на вашому зап'ясті.\n" +
      "Компактний розумний годинник Amazfit Pop 3R додасть елегантності у ваш повсякденний вигляд. Модель із циферблатом діаметром 45.5 мм важить всього 55.48 г – і це вже із силіконовим ремінцем шириною 22.2 мм. AMOLED-дисплей 1.43” дає вдосталь робочої площі для взаємодії, яскравий на сонці та в тіні, має доступ до бібліотеки з цифровими циферблатами. Девайс оснащений модулем Bluetooth та тримає заряд до 12 днів. Фітнес-функції та моніторинг показників здоров'я дозволить завжди тримати на контролі важливі фізичні параметри.\n" +
      '### Вражаюча автономність\n' +
      'Батарею спроєктовано так, щоб давати тривалий час роботи без необхідності частих підзарядок. При цьому вона зберігає компактний розмір, не збільшуючи девайс у габаритах. У середньому тривалість роботи з одного заряду становить до 12 днів, що робить цей годинник відмінним вибором для тих, хто живе в динамічному ритмі і не відволікається на дрібниці. Моніторинг активності, відстеження сну, сповіщення про дзвінки та повідомлення – все це доступно в режимі 24/7.\n' +
      '### Персоналізуйте техніку під себе\n' +
      'Модель надає користувачеві доступ до вражаючої бібліотеки цифрових циферблатів, що включає понад 100 варіантів. Змінюйте їх, дотримуючись конкретних потреб та поточного настрою. Деякі з них відображають додаткову інформацію, таку як дата, погода або рівень активності – ви можете вибрати ті віджети, які більш актуальні.\n' +
      "### Bluetooth-дзвінки з зап'ястя\n" +
      'Завдяки вбудованому в Amazfit Pop 3R мікрофону та динамікам ви можете відповідати на дзвінки безпосередньо на годиннику. Швидкий доступ до книги контактів, панелі набору та історії дзвінків робить цей процес максимально зручним. Тепер не потрібно діставати смартфон – ви можете поговорити на ходу.\n' +
      "### Здоров'я насамперед\n" +
      'Вбудований пульсометр дозволяє відстежувати ваше серцебиття в реальному часі. Моніторинг рівня кисню у крові здійснюється вбудованим датчиком, що дуже важливо під час контролю деяких станів. Годинник також може аналізувати якість вашого сну, включаючи його тривалість і фази. Визначення рівня стресу допоможе швидше впоратися з емоціями та приділити час відпочинку. Жіночий календар корисний для ведення звітності з менструального циклу.\n' +
      '### Голосовий помічник\n' +
      'Техніка підтримує функціонал голосового асистента, що дозволить вам легко керувати пристроєм та отримувати інформацію за допомогою голосових команд. Ця можливість реалізована як на платформі iOS, так і на Android. Досить лише озвучити свій запит, як підключений через Bluetooth до телефону смартгодинник швидко вирішить поставлені завдання.\n' +
      '### Ваш персональний фітнес-тренер\n' +
      'Модель адаптована під користувачів із різними уподобаннями. Любителі фізичної активності та професійні спортсмени знайдуть для себе досить корисного серед 100 спортивних режимів, лічильників кроків, калорій, пройденої відстані та інших корисних функцій.\n' +
      '### Жодного дня без музики' +
      'Зручне керування відтворенням музики робить життя меломана приємнішим. Більше не потрібно діставати смартфон, щоб переключити трек – цей функціонал доступний з екрану смартгодинника Amazfit Pop 3R. Усього пару кліків – і плейлист налаштований так, як це зручно вам.',
    characterData: [
      {
        title: `Призначення`,
        text: `Унісекс`,
      },
      {
        title: `Тип матриці`,
        text: `AMOLED`,
      },
      {
        title: `Матеріал дисплея`,
        text: `Загартоване скло`,
      },
      {
        title: `Розмір дисплея`,
        text: `1.43”`,
      },
      {
        title: `Роздільна здатність дисплея`,
        text: `466 x 466`,
      },
      {
        title: `Щільність пікселів`,
        text: `461 ppi`,
      },
      {
        title: `Процесор`,
        text: `A10 Fusion`,
      },
      {
        title: `Пам'ять`,
        text: `128 МБ`,
      },
      {
        title: `Оперативна пам'ять`,
        text: `4 МБ`,
      },
      {
        title: `Сумісність`,
        text: `iOS, Android`,
      },
      {
        title: `Бездротові технології та роз'єми`,
        text: `Bluetooth`,
      },
      {
        title: `Спосіб зарядки`,
        text: `Магнітний з'єднувач`,
      },
      {
        title: `Ємність акумулятора`,
        text: `320 mAh`,
      },
      {
        title: `Час роботи (звичайний режим)`,
        text: `12 днів`,
      },
      {
        title: `Форма`,
        text: `Круглі`,
      },
      {
        title: `Матеріал корпуса`,
        text: `Нержавіюча сталь`,
      },
      {
        title: `Можливість заміни браслета/ремінця`,
        text: `Є`,
      },
      {
        title: `Вологозахист`,
        text: `Плавання/Купання`,
      },
      {
        title: `Стандарт захисту`,
        text: `IP68`,
      },
    ],
  },
  // !Смарт годинники

  // ~~~ Кабелі та аксесуари
  // Модуль TP-Link TL-SM311LM
  {
    slug: generateSlug('module_tp-link_tl-sm311lm'),
    name: 'Модуль TP-Link TL-SM311LM',
    brand: 'TP-Link',
    coverImage: moduleTpLinkTlSm311lm,
    currentPrice: 759,
    previousPrice: 118,
    category: 'Кабелі та аксесуари',
    rating: generateRandomRating(),
    reviews: generateRandomReviews(),
    pieces_sold: 600,
    onSale: false,
    shots: [moduleTpLinkTlSm311lm],
    sku: '123845',
    unit: 'Штук',
    overview:
      'Серія оптоволоконних модульних карт TL-SM311LM призначена для збільшення дальності передавання даних і використовується разом із керованими/web smart комутаторами. Вони дають змогу збільшити дальність передавання на кілька десятків кілометрів, що здебільшого задовольняє вимоги локальних мереж. Залежно від потреби користувач може вибрати, з якими елементами використовувати оптоволоконні модулі, щоб знизити витрати.',
    characterData: [
      {
        title: `Тип`,
        text: `модуль SFP`,
      },
      {
        title: `Середовище поширення сигналу`,
        text: `оптоволоконний кабель`,
      },
      {
        title: `Пропускна спроможність`,
        text: `1,25 Гбіт/с`,
      },
      {
        title: `Хар-ки кабелю`,
        text: `багатомодовий, інтерфейс LC`,
      },
      {
        title: `Стандарти`,
        text: `IEEE 802.3z, CSMA/CD, TCP/IP`,
      },
      {
        title: `Інтерфейси`,
        text: `порт LC`,
      },
    ],
  },
  // Модуль SFP MikroTik S-85DLC05D
  {
    slug: generateSlug('SFP-MikroTik-S-85DLC05D'),
    name: 'Модуль SFP MikroTik S-85DLC05D',
    brand: 'MikroTik',
    coverImage: SFPMikroTikS85DLC05D,
    currentPrice: 685,
    previousPrice: 118,
    category: 'Кабелі та аксесуари',
    rating: generateRandomRating(),
    reviews: generateRandomReviews(),
    pieces_sold: 600,
    onSale: false,
    shots: [SFPMikroTikS85DLC05D],
    sku: '24530716',
    unit: 'Штук',
    overview: `**Модуль SFP MikroTik S-85DLC05D** — це приймач SFP, який підтримує швидкість до 1.25 Гбіт/с, має двоконтактний роз'єм, довжину хвилі 850nm і призначений для оптоволоконного під'єднання до 550 м з DDM.nnВиріб сумісний з RB260GS, RB2011LS, RB2011LS-IN, RB2011UAS-IN, RB2011UAS-RM, RB2011UAS-2HnD, RB2011UAS-2HnD-IN і CCR1036-12G-4S, а також аналогічними пристроями SFP не **MikroTik**.`,
    characterData: [
      {
        title: 'Тип конектора',
        text: 'LC',
      },
      {
        title: 'Країна-виробник',
        text: 'Китай',
      },
      {
        title: 'Швидкість передавання',
        text: ' 1 Гбіт/сек',
      },
      {
        title: 'Дальність передавання, км ',
        text: '0.55',
      },
      {
        title: 'Тип волокна',
        text: 'Multimode',
      },
      {
        title: 'Особливості',
        text: 'Підтримка функції DDM',
      },
      {
        title: 'Розміри (ДxШxВ), мм',
        text: '60 х 10 х 15',
      },
    ],
  },
  // Оптичний модуль NSN FOSH SFP+ 6G OBSAI 300m TDM 850nm
  {
    slug: generateSlug('optical-module-472579A'),
    name: 'Оптичний модуль NSN FOSH SFP+ 6G OBSAI 300m TDM 850nm',
    brand: 'Nokia',
    coverImage: opticalModule472579,
    currentPrice: 300,
    previousPrice: 450,
    category: 'Кабелі та аксесуари',
    rating: generateRandomRating(),
    reviews: generateRandomReviews(),
    pieces_sold: 52,
    onSale: false,
    shots: [opticalModule472579],
    sku: '472579A',
    unit: 'Штук',
    overview: `**Високошвидкісне підключення**: Цей модуль Nokia SFP FOSH 472579A підтримує швидкість 6G, забезпечуючи швидку та надійну передачу даних на великі відстані, що ідеально підходить для мереж з високою пропускною здатністю.nn**Можливість дальньої дії**: Цей модуль з радіусом дії до 300 метрів підходить для додатків, де потрібне високошвидкісне з'єднання на великих відстанях.nn**Оптичні характеристики:** довжина хвилі 850nm забезпечує оптимальну якість передачі та знижує погіршення сигналу, що робить його відмінним вибором для складних мережних середовищ.nn**Сумісність:** Цей модуль призначений для використання в OBSAI-сумісних системах, забезпечуючи плавну інтеграцію з наявною інфраструктурою.nn**Надійність бренду:** як справжній продукт Nokia, цей модуль має репутацію компанії за якість та продуктивність, надаючи користувачам душевний спокій та знижуючи витрати на технічне обслуговування.`,
    characterData: [
      {
        title: 'Тип',
        text: 'Волоконно-оптичні трансівери',
      },
      {
        title: 'Модель',
        text: 'Nokia SFP FOSH 472579A',
      },
      {
        title: 'Країна виробництва',
        text: 'Zhejiang, China',
      },
      {
        title: 'Марка',
        text: 'Nokia',
      },
      {
        title: 'Використання',
        text: 'Оптичний',
      },
    ],
  },
  // Nokia Fosh Optical SFP H 850nm 6g 300m Mm
  {
    slug: generateSlug('nokia-fosh-472579a-sfp-850nm'),
    name: 'Nokia Fosh Optical SFP H 850nm 6g 300m Mm',
    brand: 'Nokia',
    coverImage: nokia_fosh_472579a_sfp_850nm_1,
    currentPrice: 300,
    previousPrice: 450,
    category: 'Кабелі та аксесуари',
    rating: generateRandomRating(),
    reviews: generateRandomReviews(),
    pieces_sold: 83,
    onSale: false,
    shots: [
      nokia_fosh_472579a_sfp_850nm_1,
      nokia_fosh_472579a_sfp_850nm_2,
      nokia_fosh_472579a_sfp_850nm_3,
    ],
    sku: '9024995209',
    unit: 'Штук',
    overview:
      'Трансивер Nokia 472579A.101 SFP розроблений для швидкості до 6,25 ГБ на довжині хвилі 850nm на багатомодових оптоволоконних кабелях (MMF), що робить його ідеальним для передачі даних на короткі відстані в мережевих середовищах.\n' +
      'Компактний форм-фактор дозволяє легко інтегрувати його в існуючі налаштування без шкоди для підключення або продуктивності. Завдяки радіусу дії до 300 м цей трансивер є надійним і економічно ефективним при розширенні або модернізації мереж, які вимагають високошвидкісної передачі даних у складних налаштуваннях.\n' +
      'Приймач-передавач Nokia 472579A.101 6,25 ГБ 300 м 850nm MMF SFP',
    characterData: [
      {
        title: 'Форм-фактор',
        text: 'трансивер SFP',
      },
      {
        title: 'Швидкість',
        text: '6,25 ГБ',
      },
      {
        title: 'Довжина хвилі',
        text: '850nm',
      },
      {
        title: 'Тип кабелю',
        text: 'MMF',
      },
      {
        title: 'Тип підключення',
        text: 'Дуплекс LC',
      },
      {
        title: 'Відстань кабелю',
        text: '300 м',
      },
      {
        title: 'Номер моделі',
        text: '472579A.101',
      },
    ],
  },
  // Модуль SFP MikroTik S-RJ01
  {
    slug: generateSlug('mikrotik-s-rj01'),
    name: 'Модуль SFP MikroTik S-RJ01',
    brand: 'MikroTik',
    coverImage: mikrotikSRj01,
    currentPrice: 1190,
    previousPrice: 118,
    category: 'Кабелі та аксесуари',
    rating: generateRandomRating(),
    reviews: generateRandomReviews(),
    pieces_sold: 600,
    onSale: false,
    shots: [mikrotikSRj01],
    sku: '24161536',
    unit: 'Штук',
    overview: `**MikroTik S-RJ01** — це мідний модуль RJ45 SFP 10/100/1000 Мб/с, сумісний із більшістю портів Gigabit SFP, доступних на різних мережних пристроях.`,
    characterData: [
      {
        title: 'Тип конектора',
        text: 'RJ45',
      },
      {
        title: 'Країна-виробник',
        text: 'Китай',
      },
      {
        title: 'Швидкість передавання',
        text: '1 Гбіт/сек',
      },
      {
        title: 'Дальність передавання, км ',
        text: '0.1',
      },
      {
        title: 'Розміри (ДxШxВ), мм ',
        text: '69 x 14 x 14',
      },
    ],
  },
  // Модуль SFP+ 2MM 10G-SR 300м LC 850nm (SFP+2MM-03L)
  {
    slug: generateSlug('modul-sfp-2mm-6921'),
    name: 'Модуль SFP+ 2MM 10G-SR 300м LC 850nm (SFP+2MM-03L)',
    brand: 'Raybridge',
    coverImage: modulSfp2mm,
    currentPrice: 804,
    previousPrice: 118,
    category: 'Кабелі та аксесуари',
    rating: generateRandomRating(),
    reviews: generateRandomReviews(),
    pieces_sold: 600,
    onSale: false,
    shots: [modulSfp2mm],
    sku: '6921',
    unit: 'Штук',
    overview: `Двоволоконний оптичний модуль Raybridge, SFP+ 10GBASE-SR/SW, роз'єм LC duplex, робоча довжина хвилі 850нм, дальність до 300м (5dB).nnДвухволоконний оптичний модуль з форм-фактором SFP+ для 10G Ethernet, відповідає стандарту 10GBASE-SR/SW. Призначений для роботи в багатомодовому оптичному волокні (Multi mode fiber, MMF), максимальна дальність 300м, оптичний бюджет 5дБnn100% сумісність модулів з Ethernet-обладнанням Mikrotik, Ubiquiti, Cisco, Extreme, Juniper, Dell, Force10, Huawei, Dlink та ін. виробників.`,
    characterData: [
      {
        title: 'Режим роботи',
        text: 'MM',
      },
      {
        title: 'Формат',
        text: 'SFP+',
      },
      {
        title: 'Довжина хвилі',
        text: '850nm',
      },
      {
        title: 'Відстань передачі даних',
        text: '300m',
      },
      {
        title: 'Швидкість передачі даних',
        text: '10 Gbps',
      },
      {
        title: "Тип роз'єму (порту)",
        text: 'LC',
      },
      {
        title: 'Відносна вологість, % ',
        text: 'від 10 до 90 (без конденсації)',
      },
      {
        title: 'Вага в упаковці, м ',
        text: '200',
      },
    ],
  },
  // ПЧ кабель  10 мм Ericsson ML
  {
    slug: generateSlug('Ericsson cable 50 om TZC 500'),
    name: 'ПЧ кабель  10 мм Ericsson ML',
    brand: 'Ericsson',
    coverImage: tzc_500_ericsson1,
    currentPrice: 95,
    previousPrice: 120,
    category: 'Кабелі та аксесуари',
    rating: generateRandomRating(),
    reviews: generateRandomReviews(),
    pieces_sold: 1540,
    onSale: false,
    shots: [tzc_500_ericsson1, tzc_500_ericsson2, tzc_500_ericsson3],
    sku: '117',
    unit: 'Метр',
    overview:
      '### Кабель RG-8 Ericsson TZC 500 32\n' +
      "Ericsson кабель ВЧ 50 Ом TZC 500 32 - **RG 8** - радіорелейний кабель, який знайшов своє широке застосування в побудовах систем GSM зв'язку. Конструктивно, кабель має центральну жилу з діаметром 2,74 мм і виготовлений з обмідненого алюмінію.\n" +
      'Дана модель кабелю є аналогом за розміром інших виробників кабелю ВЧ: belden LMR 400, MRC 400, RG213-RT5, WBC-400, WCX 400, SPEEDFOAM 400.\n' +
      'В якості діелектрика використовується спінений поліетилен. Обшивка в TZC 500 32 кабелі - 85% заповнення з і складається вона з лудженої міді. Хвильовий опір - 50 Ом. Кабель використовується в частотному діапазоні від 140 МГц до 1,9 Ггц. Ericsson кабель ВЧ 50 Ом **TZC 500 32** - RG 8 може бути використаний при температурному режимі від -40 С до +80 С, що дає можливість використання його як всередині приміщень так і зовні. Зовнішній діаметр - 10,16 мм.\n' +
      "Для побудови повноцінної системи використовуються спеціальні роз'єми.",
    characterData: [
      {
        title: 'Для Дронів',
        text: 'Рекомендовано для Дронів',
      },
      {
        title: 'Зовнішньої діаметр кабелю',
        text: '10.16 мм',
      },
      {
        title: 'Обплетення',
        text: 'обплетення з 85% заповненням матеріалу, луджена мідь',
      },
      {
        title: 'Діелектрик',
        text: 'спінений поліетилен діаметром - 7.25 мм, матеріал - алюмінієва фольга',
      },
      {
        title: 'Центральна жила',
        text: 'діаметр 2,74 мм, алюміній',
      },
      {
        title: 'Тип кабелю',
        text: 'RG8',
      },
      {
        title: 'Затухання на 100 м',
        text: '140 Мгц - 6.0 дБ; 350 Мгц - 9.0 дБ; 900 Мгц - 15.0 дБ; 1800 Мгц - 21.0 дБ; 1900 Мгц - 22.0 дБ.',
      },
      {
        title: 'Діапазон робочих температур',
        text: 'від -40 до +80 °C',
      },
    ],
  },
  // Роз'єм N ПЧ 10 мм Ericsson ML
  {
    slug: generateSlug('hf-adapter-nf-ericsson-rnt1565'),
    name: 'Розʼєм N ПЧ 10 мм Ericsson ML',
    brand: 'Rosenberger',
    coverImage: hf_adapter_nf_ericsson_rnt1565_1,
    currentPrice: 490,
    previousPrice: 550,
    category: 'Кабелі та аксесуари',
    rating: generateRandomRating(),
    reviews: generateRandomReviews(),
    pieces_sold: 234,
    onSale: false,
    shots: [
      hf_adapter_nf_ericsson_rnt1565_1,
      hf_adapter_nf_ericsson_rnt1565_2,
      hf_adapter_nf_ericsson_rnt1565_3,
    ],
    sku: '1099',
    unit: 'Штук',
    overview:
      '### N female - N female адаптер Ericsson RNT1565 Rosenberger\n' +
      'Високоякісний адаптер ВЧ N female – N female типу N-322 – високочастотний адаптер з хвильовим опором 50 Ом.\n' +
      'Виробник - Rosenberger (Німеччина).\n',
    characterData: [
      {
        title: 'Адаптер',
        text: 'Так',
      },
      {
        title: "Серія СВЧ роз'ємів",
        text: 'N серія',
      },
      {
        title: 'Конструктивне використання',
        text: 'прямий',
      },
      {
        title: 'Тип центрального контакту',
        text: 'гніздо - гніздо',
      },
      {
        title: "Тип роз'єму",
        text: 'N female-N female',
      },
      {
        title: 'Діапазон робочих температур',
        text: 'від -40 до +80 °C',
      },
    ],
  },
  // Кабельна збірка TOP JUMPER CABBLE 4.3-10m-4.3-10m-9х3m
  {
    slug: generateSlug('3m-jumper-cable-43-10-male-male'),
    name: 'Кабельна збірка TOP JUMPER CABBLE 4.3-10m-4.3-10m-9х3m',
    brand: 'Jiangsu',
    coverImage: jumper_3m_cable_43_10_male_male_1,
    currentPrice: 580,
    previousPrice: 700,
    category: 'Кабелі та аксесуари',
    rating: generateRandomRating(),
    reviews: generateRandomReviews(),
    pieces_sold: 234,
    onSale: false,
    shots: [
      jumper_3m_cable_43_10_male_male_1,
      jumper_3m_cable_43_10_male_male_2,
      jumper_3m_cable_43_10_male_male_3,
    ],
    sku: '4310М',
    unit: 'Комплект',
    overview:
      'Кабель складається із коаксіального фідеру 1/2" superflexible довжиною 3м. З обох сторін встановлений конектор 4.3-10(штекер). Конектори встановлені методом пайки. Стики фідера з конекторами загерметизовані.\n' +
      '**Тип кабелю:** HRCAY-50-9(1/2"Super Flexible)\n' +
      '**Довжина кабелю:** 3м\n' +
      '**Конструкція кабелю:** 3м\n' +
      '- внутрішній провідник: алюміній покритий міддю\n' +
      '- діелектрик: вспіненний поліетилен\n' +
      '- зовнішній провідник: мідна трубка із спіральним профілем\n' +
      '- оболочка: поліетилен чорного кольору\n' +
      'Конектора: 4.3-10 (штекер) з обох сторін\n' +
      'Центральний контакт - Латунь / Покриття Сріблом\n' +
      'Ізолятор - PTFE\n' +
      'Корпус та Зовнішній Контакт - Латунь / Trimetal Plating\n' +
      'Ущільнювач - Силікон\n' +
      'Гайка - Латунь / Нікильована\n' +
      '**Електричні характеристики:**\n' +
      '- Хвильовий опір - 50±1 Ом\n' +
      '- Частотний діапазон DC~6 ГГц\n' +
      '- Опір ізоляції ≥5000MΩ\n' +
      '- Допустима напруга між внутрішнім та зовнішнім контактом 2500 В rms（DC, на протязі 1 хв.\n' +
      '- Вносимі Втрати Потужності (Insertion Loss) @DC~3.0ГГц ≤0.23*3+0.2 дБ\n' +
      '- КСХ (VSWR) @DC~3.0ГГц ≤1.15\n' +
      '- Інтермодуляція 3-го порядку PIM3 ≤-160 дБс\n' +
      '**Механічні характеристики:**\n' +
      '- Кількість циклів монтажу  ≥500 циклов\n' +
      '- Випробування на мехнічну стійкість згідно  MIL-STD-202, Method 213, Test Condition D\n' +
      '- Вібрациійні випробування згідно MIL-STD-202, Meth. 204, Cond. A\n' +
      '- Діапазон Температур -50°C to +85°C\n' +
      '- Відповідність RoHS\n' +
      '- Ступінь Захисту - IP68\n',
    characterData: [
      {
        title: 'Застосування',
        text: 'Для зовнішніх робіт',
      },
      {
        title: 'Виробник',
        text: 'Jiangsu Xixia Communication Technology',
      },
      {
        title: 'Конструкція кабелю',
        text: 'Гнучка',
      },
      {
        title: 'Призначення',
        text: "Для систем зв'язку",
      },
      {
        title: 'Тип кабеля',
        text: 'Коаксіальний',
      },
    ],
  },
  // !Кабелі та аксесуари

  // ~~~ Антени
  // Антенна Huawei A704517R0v06
  {
    slug: generateSlug('antenna-huawei-atr4518r7v07'),
    name: 'Антенна Huawei A704517R0v06',
    brand: 'Huawei',
    coverImage: antennaHuaweiAtr4518r7v07,
    currentPrice: 9000,
    previousPrice: 118,
    category: 'Антени',
    rating: generateRandomRating(),
    reviews: generateRandomReviews(),
    pieces_sold: 600,
    onSale: false,
    shots: [antennaHuaweiAtr4518r7v07],
    sku: '4518r7v07',
    unit: 'Штук',
    overview: `## Модель: Huawei A704517R0v06\n### Діапазон частот (МГц):\n- 790 - 960\n- 2 х (1695 - 2690)\n\n790 - 862 824 - 894 880 - 960 1695 - 1990 1920 - 2200 2200 - 2490 2490 - 2690\n\n- Частота антени: 790–862/880–960/1710–2690 МГц\n- Горизонтальна ширина луча (°): 65°/65°/65°\n- Потужність (дБі): 16.7i/17.5i/18.2i\n- Електричний наклон вниз (°): 0-10/0-10/0-10\n- Метод наклону: EasyRET\n- Размер: 6*4,3-10\n- Розмір (мм): 2528 * 349 * 166\n\n### Механічні властивості:\n- Розміри антени (В x Ш x Г) (мм) 2528 x 349 x 166\n- Розміри упаковки (В x Ш x Г) (мм) 2880 x 415 x 245\n- Вага антени (кг) 27,4\n- Вага затискачів (кг) 3,6 (2 шт.)\n- Вага упаковки антени (кг) 43,1 (у комплекті затискачі)\n- Підтримуваний діаметр щогли (мм) 50 - 115\n- Матеріал обтічника Склопластик\n- Колір обтічника Світло-сірий\n- Робоча температура (℃) -40.. +65\n- Вітрове навантаження (Н): Фронтальне: 920 (при 150 км/год) / Бокове: 305 (при 150 км/год) / Задня сторона: 955 (при 150 км/год)\n- Макс. робоча швидкість вітру (км/год) 200\n- Рятувальна швидкість вітру (км/год) 250\n- Роз'єм 6 x 4,3-10 гніздо\n- Положення роз'єму Нижнє\n- Поляризація +45 °, -45 °\n- Електричний нахил (°) 0 - 10, плавне регулювання, кожна смуга окремо\n- Посилення (дБі)\n- у середньому нахилі 16,7 16,8 17,1 17,5 17,8 18,0 18,2\n- по всіх нахилах 16,6 ±0,4 16,8 ±0,5 17,0 ±0,5 17,4 ±0,5 17,6 ±0,5 17,9 ±0,5 18,0 ±0 ,5\n- Придушення бічних пелюсток для першої сторони\n- пелюстка над основним променем (дБ) > 17 > 17 > 17 > 16 > 16 > 16 > 16\n- Ширина горизонтального променя 3 дБ (°) 65 ±2,0 64 ±2,0 62 ±4,1 65 ±4,8 62 ±3,7 60 ±4,3 60 ±4,5\n- Вертикальна ширина променя 3 дБ (°) 8,6 ±0,5 8,2 ±0,5 7,6 ±0,5 7,1 ±0,5 6,5 ±0,5 5,8 ±0,4 5,3 ±0,2\n- КРВ < 1,5\n- Крос-полярна ізоляція (дБ) ≥ 28\n- Міжсмугова розв'язка (дБ) ≥ 30 (790-960 // 1695-2690 МГц)\n- ≥ 30 (1695–2690 // 1695–2690 МГц)\n- Співвідношення спереду та ззаду, ±30° (дБ) > 25 > 25 > 25 > 25 > 25 > 25 > 25\n- Кросполярне відношення (дБ) 0° > 18 > 18 > 18 > 18 > 18 > 18 > 18\n- Макс. потужність на вхід (Вт) 500 (при температурі довкілля 50℃) 250 (при температурі довкілля 50℃)\n- Інтермодуляція IM3 (дБн) ≤ -153 (2 x 43 дБм несучої)\n- Імпеданс (Ом) 50\n\nЗаземлення Заземлення постійного струму\n\n1. Значення базуються на рекомендаціях NGMN щодо стандартів антен базових станцій (BASTA).\n2. Є електротехнічний опис у форматі XML.\n`,
    characterData: [
      {
        title: `Робочий діапазон частот, МГц`,
        text: `791-821 МГц/832-862 МГц/1710-1785 МГц/1805-1880 МГц/2500-2570 МГц/2620-2690 МГц`,
      },
      {
        title: `Підсилення, дБ`,
        text: `18`,
      },
      {
        title: `MIMO`,
        text: `2x2`,
      },
      {
        title: 'Роз`єм ВЧ',
        text: `4.3-10 Female`,
      },
      {
        title: `Вхідний опір (Ом)`,
        text: `50`,
      },
      {
        title: `Частота 4G`,
        text: `LTE 800, LTE 900, LTE 1800, LTE 2600`,
      },
      {
        title: `Частота роботи Wi-Fi`,
        text: `2.4 ГГц`,
      },
      {
        title: `Коефіціент посилення`,
        text: `от 15 до 19 дБ`,
      },
      {
        title: `Місце встановлення`,
        text: `Вулиця`,
      },
      {
        title: `Тип кріплення`,
        text: `на стіну, на кронштейн/мачту`,
      },
      {
        title: `Сектор випромінювання у вертикальній площині, градуси`,
        text: `65`,
      },
      {
        title: `Сектор випромінювання в горизонтальній площині, градуси`,
        text: `7`,
      },
      {
        title: `Допустима потужність (Вт)`,
        text: `250, 500`,
      },
      {
        title: `Тип антени`,
        text: `Панельна`,
      },
      {
        title: `Габарити`,
        text: `2528x349x166 мм`,
      },
      {
        title: `КСХ`,
        text: `< 1,5`,
      },
      {
        title: `Діапазон робочих температур`,
        text: `от -40 до +65°C`,
      },
      {
        title: `Країна виробник`,
        text: `Китай`,
      },
      {
        title: `Вага`,
        text: `27.4 кг`,
      },
      {
        title: 'Стандарт зв`язкуt',
        text: `GSM 900, EGSM 900, GSM 1800, 3G UMTS 2000, GSM 900/1800, 3G 2000 / 4G 2600 (LTE), CDMA 800, LTE 2600, LTE 800, LTE 900, LTE 1800, LTE 2100  `,
      },
    ],
  },
  // Кругова антена АШ-5 GSM 900/1800
  {
    slug: generateSlug('krugova-antenna-5db-900-1800-indoor'),
    name: 'Кругова антенна АШ-5 GSM 900/1800',
    brand: 'Антенна',
    coverImage: krugovaAntenna5dbIndoor,
    currentPrice: 379,
    previousPrice: 118,
    category: 'Антени',
    rating: generateRandomRating(),
    reviews: generateRandomReviews(),
    pieces_sold: 600,
    onSale: false,
    shots: [krugovaAntenna5dbIndoor],
    sku: '78',
    unit: 'Штук',
    overview: `## Антена штир 900/1800 МГцnКругова антена АШ-5 GSM 900/1800 - всенаправленная антена зпосиленням в 5 дБ для поширення сигналу мобільного зв'язку. Навіть при нахилі в 1-5 градусів кругова антена АШ-5 GSM 900/1800 працює з максимальними показниками. Антена має ВЧ роз'єм типу N-Male. Кругова антена використовується при посиленні мобільного зв'язку в приміщеннях не великих розмірів.nnАнтена сумісна з більшістю видами репитеров.nnПризначення: посилення мобільного зв'язку Київстар, МТС, Лайф в стандартах GSM 900 і DCS 1800.nnОпис кругової антени АШ-5 GSM 900/1800:nn- Посилення - 5 дБn- вертикальна поляризаціяn- Роз'єм - N-Malen- КСВ< 2n- Хвильовий опір - 50 Омn- Діаграма спрямованості - 360`,
    characterData: [
      {
        title: 'Робочий діапазон частот, МГцt',
        text: '890-960/1710-1880',
      },
      {
        title: 'Підсилення, дБt',
        text: '5',
      },
      {
        title: 'Поляризація',
        text: 'вертикальна',
      },
      {
        title: "Роз'єм ВЧt",
        text: 'N-Male',
      },
      {
        title: 'Вхідний опір (Ом)',
        text: '50',
      },
      {
        title: 'Частота 4G',
        text: 'LTE 900, LTE 1800',
      },
      {
        title: 'Коефіціент посиленняt',
        text: 'от 1 до 5 дБ',
      },
      {
        title: 'Сектор випромінювання у вертикальній площині, градусиt',
        text: '80',
      },
      {
        title: 'Сектор випромінювання в горизонтальній площині, градусиt',
        text: '360',
      },
      {
        title: 'Клас захистуt',
        text: '360',
      },
      {
        title: 'Допустима потужність (Вт)',
        text: '50',
      },
      {
        title: 'Тип антениt',
        text: 'Штирьова',
      },
      {
        title: 'КСХ',
        text: 'менше 2',
      },
      {
        title: 'Діапазон робочих температурt',
        text: 'от -30 до +40 °C',
      },
      {
        title: "Стандарт зв'язкуt",
        text: 'GSM 900',
      },
    ],
  },
  // Антена Rosenberger GD-21
  {
    slug: generateSlug('3g-antena-umts-21-db'),
    name: 'Антена Rosenberger GD-21',
    brand: 'Rnet',
    coverImage: antena3gUmts21db,
    currentPrice: 1130,
    previousPrice: 118,
    category: 'Антени',
    rating: generateRandomRating(),
    reviews: generateRandomReviews(),
    pieces_sold: 600,
    onSale: false,
    shots: [antena3gUmts21db],
    sku: '603',
    unit: 'Штук',
    overview: `## 3G антена Rnet 21 дБ для Київстар Vodafone Lifecell з кабелем і антенним адаптеромnnБагато власників UMTS модемів користуються неякісним інтернетом і вважаю що так і повинно бути, що нічого не можна вдіяти, що все залежить від оператора мобільного зв'язку. Напевно не всі знають про те, що за допомогою інтернету за допомогою USB модему, в Вашому модемі є роз'єм для підключення спеціальної підсилює **3G UMTS антени**. Саме такою антеною, типу хвильовий канал, і є 3G антена UMTS HSDPA 21 дБ.`,
    characterData: [
      {
        title: 'Робочий діапазон частот, МГц',
        text: '1920-1980/2110-2170',
      },
      {
        title: 'Підсилення, дБt',
        text: '21',
      },
      {
        title: 'Поляризація',
        text: 'вертикальна',
      },
      {
        title: "Роз'єм ВЧt",
        text: 'F-розʼєм',
      },
      {
        title: 'Вхідний опір (Ом)',
        text: '50',
      },
      {
        title: 'Коефіціент посиленняt',
        text: 'от 19 до 24 дБ',
      },
      {
        title: 'Тип кріпленняt',
        text: 'на кронштейн/мачту',
      },
      {
        title: 'Клас захистуt',
        text: 'IP65',
      },
      {
        title: 'Допустима потужність (Вт)',
        text: '50',
      },
      {
        title: 'Тип антениt',
        text: 'Направлена',
      },
      {
        title: 'Габарити',
        text: '1000x135x100 мм',
      },
      {
        title: 'Довжина кабеляt',
        text: '10 м',
      },
      {
        title: 'КСХ',
        text: 'до 1.5',
      },
      {
        title: 'Діапазон робочих температурt',
        text: 'от -30 до +40 °C',
      },
      {
        title: "Стандарт зв'язкуt",
        text: '3G UMTS 2000',
      },
    ],
  },
  // !Антени
];

export const productsSection = {
  heading: 'Shop Now, Look Good Later',
  description:
    'We have a buch of collections for you! Lets explore and find your dream shoes, make it happen',
};

const shoeBrands = ['Nike', 'Alexander Mqueen', 'New Balance', 'Compass'];

const shoeTypes = ['Type', 'Sandals', 'Sneakers', 'Boots'];

const sizes = ['Size', 'S', 'M', 'L', 'XL', 'XXl'];

const prices = [
  'Price',
  'Below $100',
  'Below $200',
  'Below $300',
  'Below $400',
];

export const filters = [shoeBrands, prices, sizes, shoeTypes];

export const sponsorsData = [
  { id: '1', svg_white: amiga, svg_dark: amiga_dark },
  { id: '2', svg_white: stela, svg_dark: stela_dark },
  { id: '3', svg_white: johnson, svg_dark: johnson_dark },
  { id: '4', svg_white: helenSmith, svg_dark: helenSmith_dark },
  { id: '5', svg_white: johnson, svg_dark: johnson_dark },
  { id: '6', svg_white: amiga, svg_dark: amiga_dark },
  { id: '7', svg_white: stela, svg_dark: stela_dark },
  { id: '8', svg_white: johnson, svg_dark: johnson_dark },
];

export const paymentsData = [
  { title: 'visa', href: '/#', Icon: visa },
  { title: 'ae', href: '/#', Icon: ae },
  { title: 'dc', href: '/#', Icon: dc },
  { title: 'pp', href: '/#', Icon: pp },
  { title: 'mc', href: '/#', Icon: mc },
  { title: 'dic', href: '/#', Icon: dic },
];

// remove this
export const phoneLinks = [
  {
    title: 'Телефони',
    links: [
      {
        href: `/collections/${generateSlug('Phones')}`,
        name: 'Fusion F-22',
      },
      {
        href: `/collections/${generateSlug('Phones')}`,
        name: 'Hyperion HX-1',
      },
      {
        href: `/collections/${generateSlug('Phones')}`,
        name: 'Horizon H-88',
      },
      {
        href: `/collections/${generateSlug('Phones')}`,
        name: 'Nova N-s5',
      },
      {
        href: `/collections/${generateSlug('Phones')}`,
        name: 'Zenith z-9',
      },
      {
        href: `/collections/${generateSlug('Phones')}`,
        name: 'Vortex v-5',
      },
    ],
  },
  {
    title: 'Смарт годинники',
    links: [
      {
        href: `/collections/${generateSlug('Smart Watches')}`,
        name: 'Apex Fitness Watch',
      },
      {
        href: `/collections/${generateSlug('Smart Watches')}`,
        name: 'Horizon Smart Watch',
      },
      {
        href: `/collections/${generateSlug('Smart Watches')}`,
        name: 'Horizon Smart Watch',
      },
      {
        href: `/collections/${generateSlug('Smart Watches')}`,
        name: 'Nexus Smart Watch',
      },
      {
        href: `/collections/${generateSlug('Smart Watches')}`,
        name: 'Nova Smart Watch',
      },
    ],
  },
];

export const footerData = {
  description:
    'HotKicks was designed and founded in 2023 by Person. The theme is about sneakers ecommerce thet use for shoes selling around the world.',
  footerLinks: [
    {
      title: 'Main Pages',
      links: [
        { href: '/home', name: 'Home' },
        { href: '/products', name: 'Collections' },
        { href: '/cart', name: 'Cart' },
        { href: '/checkout', name: 'Checkout' },
        { href: '/blog', name: 'Blogs' },
      ],
    },
    {
      title: 'Single Pages',
      links: [
        { href: '/product/watch2', name: 'Product Single' },
        {
          href: '/blog/the-evolution-of-sneaker-culture-a-historical-perspective',
          name: 'Blog Single',
        },
      ],
    },
    {
      title: 'Other Pages',
      links: [{ href: '/rt', name: 'Not Found' }],
    },
    {
      title: 'Utility Pages',
      links: [
        { href: '/faq', name: 'FAQS' },
        { href: '/contact', name: 'Contact' },
        { href: '/forgot-pass', name: 'Forgot Password' },
        { href: '/login', name: 'Login' },
        { href: '/signup', name: 'Signup' },
      ],
    },
  ],
};

export const newsletter = {
  heading: "Don't wanna miss our offers?",
  description:
    'Drop your email below and start receiving the best offers from HotKicks',
};

export const shoeSizes = [
  'EU36',
  'EU37',
  'EU38',
  'EU39',
  'EU40',
  'EU41',
  'EU42',
  'EU43',
  'EU44',
];

const demoBlogData = {
  sectionOne: {
    title: 'What cleaning products are safe for different sneaker materials?',
    paragraph1:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    points: [
      'Pretium nibh ipsum consequat nisl vel pretium. Sed vulputate mi sit',
      'Tristique nulla aliquet enim tortor at auctor urna. Sit amet aliquam id diam maer  dolore eu fugiat nulla pariatur',
      'Nam libero justo laoreet sit amet. Lacus sed viverra tellus in hac',
      'Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis',
    ],
    paragraph2:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  },
  sectionTwo: {
    title: 'Can you provide a step-by-step guide to cleaning sneakers?',
    description:
      'Augue lacus viverra vitae congue eu consequat ac felis donec. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Morbi tristique senectus et netus et malesuada fames ac turpis. Iaculis eu non diam phasellus vestibulum lorem sed.',
    midImage:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  sectionThree: {
    title: 'How do I prevent and remove stains from my sneakers?',
    description:
      'Augue lacus viverra vitae congue eu consequat ac felis donec. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Morbi tristique senectus et netus et malesuada fames ac turpis. Iaculis eu non diam phasellus vestibulum lorem sed.',
  },
  sectionFour: {
    title:
      'What are the best practices for drying sneakers without causing damage?',
    description:
      'Bibendum at varius vel pharetra vel turpis nunc. Dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc. Volutpat est velit egestas dui id ornare.',
    points: [
      'Pretium nibh ipsum consequat nisl vel pretium. Sed vulputate mi sit',
      'Tristique nulla aliquet enim tortor at auctor urna. Sit amet aliquam id diam maer  dolore eu fugiat nulla pariatur',
      'Nam libero justo laoreet sit amet. Lacus sed viverra tellus in hac',
      'Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis',
    ],
  },
  quote:
    '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor porta rhoncus, viverra sit et auctor. Augue in volutpat sed eget in etiam.”',
  sectionFive: [
    {
      title: 'How should I store my sneakers to maintain their quality?',
      description:
        'Tincidunt nunc pulvinar sapien et ligula. Sed blandit libero volutpat sed cras ornare arcu dui vivamus. Aliquet bibendum enim facilisis gravida neque convallis a cras. Molestie nunc non blandit massa enim nec dui nunc.',
    },
    {
      title:
        'What special care should be taken to extend the lifespan of sneakers?',
      description:
        'Tincidunt nunc pulvinar sapien et ligula. Sed blandit libero volutpat sed cras ornare arcu dui vivamus. Aliquet bibendum enim facilisis gravida neque convallis a cras. Molestie nunc non blandit massa enim nec dui nunc.',
    },
  ],
};

export const blogs: BlogType[] = [
  {
    title: 'The Evolution of Sneaker Culture: A Historical Perspective',
    brief:
      'Lorem ipsum dolor sit amet, lormol amenrtol consectetur adipiscing elit, sed do eiusmod tempor.',
    date: 'October 2, 2022',
    coverImage:
      'https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    blogData: demoBlogData,
    tag: 'Style',
    slug: 'the-evolution-of-sneaker-culture-a-historical-perspective',
  },
  {
    title: 'Top 10 Sneaker Trends to Watch in 2023',
    brief:
      'Lorem ipsum dolor sit amet, lormol amenrtol consectetur adipiscing elit, sed do eiusmod tempor.',
    date: 'October 2, 2022',
    coverImage:
      'https://images.unsplash.com/photo-1448387473223-5c37445527e7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    blogData: demoBlogData,
    tag: 'Fitting',
    slug: 'top-10-sneaker-trends-to-watch-in-2023',
  },
  {
    title: 'How to Clean and Maintain Your Sneaker Collection',
    brief:
      'Lorem ipsum dolor sit amet, lormol amenrtol consectetur adipiscing elit, sed do eiusmod tempor.',
    date: 'October 2, 2022',
    coverImage:
      'https://images.unsplash.com/photo-1469395446868-fb6a048d5ca3?q=80&w=1633&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    blogData: demoBlogData,
    tag: 'Style',
    slug: 'how-to-clean-and-maintain-your-sneaker-collection',
  },
  {
    title:
      'The Influence of Sneaker Collaborations: From Athletes to Designers',
    brief:
      'Lorem ipsum dolor sit amet, lormol amenrtol consectetur adipiscing elit, sed do eiusmod tempor.',
    date: 'October 2, 2022',
    coverImage:
      'https://images.unsplash.com/photo-1659614404055-670edff49a1b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    blogData: demoBlogData,
    tag: 'General',
    slug: 'the-influence-of-sneaker-collaborations-from-athletes-to-designers',
  },
  {
    title: 'Sneaker Sizing Guide: Finding the Perfect Fit',
    brief:
      'Lorem ipsum dolor sit amet, lormol amenrtol consectetur adipiscing elit, sed do eiusmod tempor.',
    date: 'October 2, 2022',
    coverImage:
      'https://images.unsplash.com/photo-1515396800500-75d7b90b3b94?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    blogData: demoBlogData,
    tag: 'Style',
    slug: 'sneaker-sizing-guide-finding-the-perfect-fit',
  },
  {
    title:
      'Sneaker Collecting 101: Building and Organizing Your Sneaker Collection',
    brief:
      'Lorem ipsum dolor sit amet, lormol amenrtol consectetur adipiscing elit, sed do eiusmod tempor.',
    date: 'October 2, 2022',
    coverImage:
      'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    blogData: demoBlogData,
    tag: 'Fitting',
    slug: 'sneaker-collecting-101-building-and-organizing-your-sneaker-collection',
  },
  {
    title: 'Behind the Design: Sneaker Production Process Unveiled',
    brief:
      'Lorem ipsum dolor sit amet, lormol amenrtol consectetur adipiscing elit, sed do eiusmod tempor.',
    date: 'October 2, 2022',
    coverImage:
      'https://images.unsplash.com/photo-1565814636199-ae8133055c1c?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    blogData: demoBlogData,
    tag: 'General',
    slug: 'behind-the-design-sneaker-production-process-unveiled',
  },
  {
    title:
      'Exploring Limited Edition Sneaker Drops: How to Cop Exclusive Releases',
    brief:
      'Lorem ipsum dolor sit amet, lormol amenrtol consectetur adipiscing elit, sed do eiusmod tempor.',
    date: 'October 2, 2022',
    coverImage:
      'https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    blogData: demoBlogData,
    tag: 'General',
    slug: 'exploring-limited-edition-sneaker-drops-how-to-cop-exclusive-releases',
  },
  {
    title: 'Sneaker Spotlight: Nike Review and Styling Tips',
    brief:
      'Lorem ipsum dolor sit amet, lormol amenrtol consectetur adipiscing elit, sed do eiusmod tempor.',
    date: 'October 2, 2022',
    coverImage:
      'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?q=80&w=1421&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    blogData: demoBlogData,
    tag: 'Style',
    slug: 'sneaker-spotlight-nike-review-and-styling-tips',
  },
  {
    title: 'Sustainable Sneaker Choices: Eco-Friendly Options in the Market',
    brief:
      'Lorem ipsum dolor sit amet, lormol amenrtol consectetur adipiscing elit, sed do eiusmod tempor.',
    date: 'October 2, 2022',
    coverImage:
      'https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    blogData: demoBlogData,
    tag: 'Style',
    slug: 'sustainable-sneaker-choices-eco-friendly-options-in-the-market',
  },
];
