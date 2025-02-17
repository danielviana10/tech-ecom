export interface IProduct {
  id: number;
  description: string;
  price: number;
  priceDescription: string;
  stock: number;
  image: string;
  info: string;
}

export interface ICartItem extends IProduct {
  quantity: number;
  backgroundColor?: string;
}

export const products: IProduct[] = [
  {
    id: 1,
    description: 'Gaming Mouse',
    price: 439.0,
    priceDescription: 'Cash on PIX',
    image: './assets/mouse-3.png',
    stock: 10,
    info: 'High-precision gaming mouse with customizable RGB lighting, ideal for high-performance gaming. It features next-generation sensors for fast movements and millimeter precision.',
  },
  {
    id: 2,
    description: 'Apple Monitor',
    price: 4180.5,
    priceDescription: 'Cash on PIX',
    image: './assets/monitor-2.png',
    stock: 10,
    info: '27-inch Apple monitor with 5K resolution and excellent color reproduction. Perfect for designers, photographers, and anyone who needs a sharp, precise display.',
  },
  {
    id: 3,
    description: 'Mechanical Keyboard',
    price: 459,
    priceDescription: 'Cash on PIX',
    image: './assets/teclado-1.png',
    stock: 10,
    info: 'Mechanical keyboard with blue switches, providing a tactile and satisfying typing experience. Its ergonomic design and RGB backlighting make it perfect for gamers and professionals.',
  },
  {
    id: 4,
    description: 'Pro Headphones',
    price: 599.99,
    priceDescription: 'Cash on PIX',
    image: './assets/fone-de-ouvido-2.png',
    stock: 10,
    info: 'Pro headphones with active noise cancellation, perfect for immersive sound in any environment. The leather ear cushions and adjustable headband ensure comfort during long hours of use.',
  },
  {
    id: 5,
    description: 'AirPods Pro 2',
    price: 2032.2,
    priceDescription: 'Cash on PIX',
    image: './assets/fone-de-ouvido-1.png',
    stock: 10,
    info: 'AirPods Pro 2 with superior sound quality, active noise cancellation, and transparency mode. Enhance your audio experience with an ergonomic design that is comfortable for extended use.',
  },
  {
    id: 6,
    description: 'HB2000 Headphones',
    price: 169.9,
    priceDescription: 'Cash on PIX',
    image: './assets/headphone-black.png',
    stock: 10,
    info: 'HB2000 headphones offer powerful sound with intense bass, perfect for those seeking quality audio at an affordable price. Its foldable design makes it easy to transport and store.',
  },
  {
    id: 7,
    description: '1TB Seagate HDD',
    price: 499.99,
    priceDescription: 'Cash on PIX',
    image: './assets/hd.png',
    stock: 10,
    info: 'Seagate 1TB external hard drive, ideal for securely storing videos, photos, and documents. Its USB 3.0 connection allows for fast and efficient transfers.',
  },
  {
    id: 8,
    description: 'RTX Graphics Card Kit',
    price: 6449.99,
    priceDescription: 'Cash on PIX',
    image: './assets/placa-video.png',
    stock: 10,
    info: 'RTX graphics card kit for gamers and content creators. With support for ray tracing and next-gen graphical performance, it’s the perfect choice for those who need graphical power.',
  },
  {
    id: 9,
    description: 'Ryzen 7 Processor',
    price: 1000,
    priceDescription: 'Cash on PIX',
    image: './assets/processador.png',
    stock: 10,
    info: 'AMD Ryzen 7 processor with 8 cores and 16 threads, ideal for multitasking, gaming, and heavy applications. Advanced technology ensures superior performance in any situation.',
  },
  {
    id: 10,
    description: 'Dell Intel Core i5 Laptop',
    price: 2500,
    priceDescription: 'Cash on PIX',
    image: './assets/laptop-1.png',
    stock: 10,
    info: 'Dell laptop with Intel Core i5 processor, 8GB of RAM, and 256GB SSD, ideal for work, study, and leisure. The Full HD display provides excellent image quality for daily tasks.',
  },
  {
    id: 11,
    description: 'Galaxy Book4 Intel Core i7',
    price: 4500,
    priceDescription: 'Cash on PIX',
    image: './assets/laptop-2.png',
    stock: 10,
    info: 'Galaxy Book4 with Intel Core i7, 16GB of RAM, and Super AMOLED display for an unparalleled visual experience. Ideal for professionals seeking performance and portability.',
  },
  {
    id: 12,
    description: 'Gaming Mouse',
    price: 135,
    priceDescription: 'Cash on PIX',
    image: './assets/mouse-gamer.png',
    stock: 10,
    info: 'Ergonomic gaming mouse with DPI adjustment up to 3200, perfect for games that require high precision. Its modern design and RGB lighting ensure a unique gaming experience.',
  },
  {
    id: 13,
    description: 'MS116 Mouse',
    price: 74.1,
    priceDescription: 'Cash on PIX',
    image: './assets/mouse-2.png',
    stock: 10,
    info: 'MS116 mouse with a simple and efficient design. Ideal for daily tasks, with precision and comfort for long work or browsing sessions.',
  },
  {
    id: 14,
    description: 'Office 5+ Mouse',
    price: 50,
    priceDescription: 'Cash on PIX',
    image: './assets/mouse-4.png',
    stock: 10,
    info: 'Wireless Office 5+ mouse with a compact design and long-lasting battery. Perfect for those seeking practicality and comfort at work and home.',
  },
  {
    id: 15,
    description: 'Tgaming Keyboard',
    price: 70.99,
    priceDescription: 'Cash on PIX',
    image: './assets/teclado-2.png',
    stock: 10,
    info: 'Tgaming keyboard with durable mechanical keys, ideal for intense gaming sessions and those who seek customization and comfort.',
  },
  {
    id: 16,
    description: 'AirPods Max White',
    price: 4700,
    priceDescription: 'Cash on PIX',
    image: './assets/airpods-max-white.png',
    stock: 5,
    info: 'White AirPods Max with high-fidelity sound, active noise cancellation, and elegant design. Perfect for those seeking superior quality and comfort during prolonged use.',
  },
  {
    id: 17,
    description: 'Samsung Monitor',
    price: 340,
    priceDescription: 'Cash on PIX',
    image: './assets/monitor-samsung.png',
    stock: 10,
    info: '24-inch Samsung monitor with Full HD resolution and anti-glare technology. Ideal for those looking for a screen with accurate colors and no eye strain, perfect for work and entertainment.',
  },
];
