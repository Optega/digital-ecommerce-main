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
import applwwatch1 from '@/images/products/applewatch1.png';
import gamingcontrollwe from '@/images/products/controller.jpg';
import ear from '@/images/products/earphones.jpg';
import fifa from '@/images/products/fifa.jpg';
import harman from '@/images/products/Harman-Kardon.jpg';
import head from '@/images/products/headphones.jpg';
import iphone from '@/images/products/iphone.jpg';
import jbl from '@/images/products/JBL GO 3.jpg';
import macbook from '@/images/products/Macbook 1.jpg';
import mouse from '@/images/products/mouse1.png';
import pixel from '@/images/products/pixel.png';
import watch2 from '@/images/products/watch2.png';
import shot1 from '@/images/shots/Macbook 2.jpg';
import shot2 from '@/images/shots/Macbook 3.jpg';
import { generateSlug } from '@/utils/utilities';

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
      href: '/collections/phones',
      megaMenuData: {
        title: 'ТЕЛЕФОНИ & СМАРТ ГОДИННИКИ',
        menu1Data: {
          title: 'Телефони',
          links: [
            { href: '/collections/phones', name: 'Fusion F-22' },
            { href: '/collections/phones', name: 'Hyperion HX-1' },
            { href: '/collections/phones', name: 'Horizon H-88' },
            { href: '/collections/phones', name: 'Nova N-s5' },
            { href: '/collections/phones', name: 'Zenith z-9' },
            { href: '/collections/phones', name: 'Vortex v-5' },
          ],
        },
        menu2Data: {
          title: 'Смарт Годинники',
          links: [
            { href: '/collections/smart-watches', name: 'Apex Fitness Watch' },
            { href: '/collections/smart-watches', name: 'Horizon Smart Watch' },
            { href: '/collections/smart-watches', name: 'Horizon Smart Watch' },
            { href: '/collections/smart-watches', name: 'Nexus Smart Watch' },
            { href: '/collections/smart-watches', name: 'Nova Smart Watch' },
          ],
        },
      },
    },
    {
      id: 'eerrrt',
      name: 'Ноутбуки',
      href: 'collections/Laptops',
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
      href: '/collections/headphones',
    },
    {
      id: 'h6ii8g',
      name: 'Колонки',
      href: '/collections/speakers',
    },
    {
      id: 'h678ty',
      name: 'Смарт годинники',
      href: '/collections/smart-watches',
    },
    {
      id: 'h6i78g',
      name: 'Геймінг',
      href: '/collections/gaming',
    },
    {
      id: 'f678ty',
      name: 'Особливе',
      href: '/collections/features',
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
    href: '/phones',
  },
  {
    id: 'eerrrt',
    name: 'Ноутбуки',
    href: '/Laptops',
  },
  {
    id: 'eexct',
    name: 'Навушники',
    href: '/headphones',
  },
  {
    id: 'h6ii8g',
    name: 'Колонки',
    href: '/speakers',
  },
  {
    id: 'h678ty',
    name: 'Смарт годинники',
    href: '/smart-watches',
  },
  {
    id: 'h6i78g',
    name: 'Геймінг',
    href: '/gaming',
  },
  {
    id: 'f678ty',
    name: 'Особливе',
    href: '/features',
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
    href: '/collections/headphones',
  },
  {
    title: 'Телефони',
    slug: generateSlug('Phones'),
    imgUrl: phonesCat,
    bannerUrl: phonesBanner,
    href: '/collections/phones',
  },
  {
    title: 'Колонки',
    slug: generateSlug('Speakers'),
    imgUrl: speakersCat,
    bannerUrl: speakersBanner,
    href: '/collections/speakers',
  },
  {
    title: 'Смарт годинники',
    slug: generateSlug('Smart Watches'),
    imgUrl: smartWatchCat,
    bannerUrl: smartWatchBanner,
    href: '/collections/smart-watches',
  },
  {
    title: 'Геймінг',
    slug: generateSlug('Gaming'),
    imgUrl: gamingCat,
    bannerUrl: gamingBanner,
    href: '/collections/gaming',
  },
  {
    title: 'Ноутбуки',
    slug: generateSlug('Laptops'),
    imgUrl: laptopCat,
    bannerUrl: laptopBanner,
    href: '/collections/laptops',
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
    href: '/collections/phones',
  },
  {
    title: 'Відкрийте для себе ідеальні ігрові рішення',
    image: gamingheader,
    tag: 'Геймінг',
    href: '/collections/gaming',
  },
  {
    title: 'Почуйте різницю',
    image: headphonesheader,
    tag: 'Навушники',
    href: '/collections/headphones',
  },
  {
    title: 'Відчуйте новітні технології',
    image: watchheader,
    tag: 'Смарт годинники',
    href: '/collections/smart-watches',
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
  {
    slug: 'macbook-air-13inch-m1-chip-256gb-143',
    name: 'Macbook Air 13inch M1 Chip 256GB',
    coverImage: macbook,
    currentPrice: 335,
    previousPrice: 478,
    category: 'Laptops',
    rating: 4.8,
    reviews: 56,
    pieces_sold: 600,
    onSale: true,
    shots: [macbook, shot1, shot2],
    overview:
      'The Macbook Air 13inch M1 Chip 256GB is a high-performing and visually stunning laptop that is perfect for both personal and professional use. With its advanced image signal processor, 8-core CPU, and 16-core Neural Engine, this laptop offers unparalleled speed and power.',
  },
  {
    slug: 'jbl-go-3-165',
    name: 'JBL GO 3',
    coverImage: jbl,
    currentPrice: 334,
    previousPrice: 474,
    category: 'Speakers',
    rating: 4.8,
    reviews: 56,
    pieces_sold: 600,
    onSale: false,
    shots: [jbl, shot1, shot2],
    overview:
      'Get the ultimate portable speaker with JBL GO 3. With its dynamic frequency response range, water resistance rating, and Bluetooth technology, you can enjoy up to 5 hours of high-quality sound wherever you go. Its compact size and durability make it perfect for outdoor use. Choose from four different colors to match your style.',
  },
  {
    slug: 'iphone-14-128gb-12',
    name: 'iPhone 14 128GB',
    coverImage: iphone,
    currentPrice: 552,
    previousPrice: 585,
    category: 'Phones',
    rating: 4.8,
    reviews: 56,
    pieces_sold: 600,
    onSale: true,
    shots: [iphone, shot1, shot2],
    overview:
      'The iPhone 14 128GB is the must-have gadget for tech enthusiasts, featuring a stunning 6.1-inch OLED screen, powerful 128GB storage, and 6GB RAM. With its dual rear camera setup and 12MP selfie camera with biometric sensor, you can capture high-quality photos and videos with ease',
  },
  {
    slug: 'google-pixel-8-pro-128gb-663',
    name: 'Google Pixel 8 Pro 128GB',
    coverImage: pixel,
    currentPrice: 338,
    previousPrice: 391,
    category: 'Phones',
    rating: 4.8,
    reviews: 56,
    pieces_sold: 600,
    onSale: true,
    shots: [pixel, shot1, shot2],
    overview: `The Google Pixel 8 Pro 128GB is the perfect phone for the tech-savvy user who wants the latest and greatest gadgets. With its stunning 6.7 LTPO OLED screen, 120Hz refresh rate, HDR10+, 1600 nits HBM, and 2400 nits peak, you'll have beautiful visuals and vibrant colors no matter what you're doing.`,
  },
  {
    slug: 'logitech-m190-wireless-mouse-391',
    name: 'Logitech M190 Wireless Mouse',
    coverImage: mouse,
    currentPrice: 229,
    previousPrice: 334,
    category: 'Laptops',
    rating: 4.8,
    reviews: 56,
    pieces_sold: 600,
    onSale: false,
    shots: [mouse, shot1, shot2],
    overview: `The Logitech M190 Wireless Mouse is a comfortable and reliable mouse that works seamlessly with your PC or laptop. With a contoured ergonomic shape and scooped buttons, it provides all-day comfort, while its power-saving features and`,
  },
  {
    slug: 'playstation-dualsense-controller-146',
    name: 'Playstation DualSense Controller',
    coverImage: gamingcontrollwe,
    currentPrice: 233,
    previousPrice: 553,
    category: 'Gaming',
    rating: 4.8,
    reviews: 56,
    pieces_sold: 600,
    onSale: true,
    shots: [gamingcontrollwe, shot1, shot2],
    overview: `The Playstation DualSense Controller is a must-have for serious gamers. With Haptic feedback and Adaptive Triggers, you'll feel more immersed in your games than ever before. The built-in microphone and headset jack also make it easy to chat with friends while you play. Choose between white and black colors to match your style.`,
  },
  {
    slug: 'fifa-23-157',
    name: 'FIFA 23',
    coverImage: fifa,
    currentPrice: 585,
    previousPrice: 628,
    category: 'Gaming',
    rating: 4.8,
    reviews: 56,
    pieces_sold: 600,
    onSale: false,
    shots: [fifa, shot1, shot2],
    overview:
      "Experience FIFA 23 and bring The World's Game to the pitch, with HyperMotion2 Technology.",
  },
  {
    slug: 'harman-kardon-luna-652',
    name: 'Kardon Luna',
    coverImage: harman,
    currentPrice: 489,
    previousPrice: 552,
    category: 'Speakers',
    rating: 4.8,
    reviews: 56,
    pieces_sold: 600,
    onSale: true,
    shots: [harman, shot1, shot2],
    overview: `Introducing the Harman/Kardon Luna – the ultimate way to enjoy and appreciate your favorite tunes. Packing HARMAN KARDON SUPERIOR SOUND in a stylish and quality design, the Harman/Kardon Luna is the ideal speaker for your home or on-the-go. With advanced two-way drivers, you can hear every detail of your favorite music with crystal clear and balanced audio. `,
  },
  {
    slug: 'samsung-type-c-akg-earphones-112',
    name: 'Samsung Type-C AKG Earphones',
    coverImage: ear,
    currentPrice: 342,
    previousPrice: 411,
    category: 'Headphones',
    rating: 4.8,
    reviews: 56,
    pieces_sold: 600,
    onSale: true,
    shots: [ear, shot1, shot2],
    overview: `The Samsung TypeC AKG Earphones offer undistorted studio-quality audio, convenient control features, and compatibility with a wide range of Samsung phones.`,
  },
  {
    slug: 'anker-life-2-neo-54',
    name: 'Anker Life 2 Neo',
    coverImage: head,
    currentPrice: 123,
    previousPrice: 236,
    category: 'Headphones',
    rating: 4.8,
    reviews: 56,
    pieces_sold: 600,
    onSale: false,
    shots: [head, shot1, shot2],
    overview: `Anker Soundcore Life 2 Neo is a Wireless Bluetooth Over-Ear Headphones with a USB-C Fast Charging gives you 60-Hour Playtime and 40mm Driver, also Bass-up and AUX Input – Bluetooth Headphones Comes in a nice Black Color`,
  },
  {
    slug: 'apple-watch-series-9-45mm-616',
    name: 'Apple Watch Series 9 45MM',
    coverImage: applwwatch1,
    currentPrice: 495,
    previousPrice: 689,
    category: 'Smart Watches',
    rating: 4.8,
    reviews: 56,
    pieces_sold: 600,
    onSale: true,
    shots: [applwwatch1, shot1, shot2],
    overview: `The Apple Watch Series 9 45MM is a powerful smartwatch designed to impress Apple fans. It boasts a sleek design, Retina LTPO OLED display, 64GB of storage, dual loud speakers, and various features like GPS, Wi-Fi, and Bluetooth 5.3.`,
  },
  {
    slug: 'amazfit-pop-3r-860',
    name: 'Amazfit Pop 3R',
    coverImage: watch2,
    currentPrice: 207,
    previousPrice: 118,
    category: 'Smart Watches',
    rating: 4.8,
    reviews: 56,
    pieces_sold: 600,
    onSale: false,
    shots: [watch2, shot1, shot2],
    overview:
      'When your workouts wade into the nitty gritty, the Nike Free Metcon 5 can meet you in the depths, help you dig deep to find that final ounce of force and come out of the other side on a high. It matches style with substance, forefoot flexibility with backend stability, perfect for flying through a cardio day or enhancing your agility. A revamped upper offers easier entry with a collar made just for your ankle.',
  },
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
    title: 'Phones',
    links: [
      { href: '/collections/phones', name: 'Fusion F-22' },
      { href: '/collections/phones', name: 'Hyperion HX-1' },
      { href: '/collections/phones', name: 'Horizon H-88' },
      { href: '/collections/phones', name: 'Nova N-s5' },
      { href: '/collections/phones', name: 'Zenith z-9' },
      { href: '/collections/phones', name: 'Vortex v-5' },
    ],
  },
  {
    title: 'Smart Watches',
    links: [
      { href: '/collections/smart-watches', name: 'Apex Fitness Watch' },
      { href: '/collections/smart-watches', name: 'Horizon Smart Watch' },
      { href: '/collections/smart-watches', name: 'Horizon Smart Watch' },
      { href: '/collections/smart-watches', name: 'Nexus Smart Watch' },
      { href: '/collections/smart-watches', name: 'Nova Smart Watch' },
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
