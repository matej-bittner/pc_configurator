export const gpu = [
  {
    id: 1,
    model: "RTX 4070 12gb",
    price: 14000,
    benchmark: 27023,
  },
  { id: 2, model: "RTX 4060 8gb", price: 9000, benchmark: 19608 },
  { id: 3, model: "RTX 4090 24gb", price: 45000, benchmark: 38730 },
  { id: 4, model: "RX 7600 8gb", price: 8000, benchmark: 16260 },
  { id: 5, model: "RX 7800 XT 16gb", price: 14000, benchmark: 23989 },
  { id: 6, model: "RX 6800 16gb", price: 10000, benchmark: 22321 },
];

export const cpu = [
  {
    id: 1,
    model: "Ryzen 7 7800X3D",
    price: 11000,
    benchmark: 34374,
  },
  { id: 2, model: "Ryzen 5 7600X", price: 6000, benchmark: 28568 },
  { id: 3, model: "Ryzen 5 5600", price: 3700, benchmark: 21565 },
  { id: 4, model: "i7-14700KF", price: 12000, benchmark: 53465 },
  { id: 5, model: "i5-14600KF", price: 8500, benchmark: 39417 },
  { id: 6, model: "i5-12400F", price: 3500, benchmark: 19547 },
];

export const memory = [
  { id: 1, model: "16 GB", price: 1100 },
  { id: 2, model: "32 GB", price: 2000 },
  { id: 3, model: "64 GB", price: 3800 },
];

export const hardDisk = [
  {
    id: 1,
    capacity: "1TB HDD",
    price: 1500,
  },
  { id: 2, capacity: "2TB HDD", price: 1800 },
  { id: 3, capacity: "Bez HDD", price: 0 },
];

export const ssdDisk = [
  { id: 1, capacity: "512GB", price: 1800 },
  { id: 2, capacity: "1TB", price: 2400 },
];

export const images = [
  {
    id: 1,
    source: "/games/hogwarts.png",
    name: "Hogwarts Legacy",
    width: 90,
    height: 135,
    top: 1,
  },
  {
    id: 2,
    source: "/games/helldivers.png",
    name: "Helldivers 2",
    width: 92,
    height: 124,
    top: 80,
  },
  {
    id: 3,
    source: "/games/forza.png",
    name: "Forza Horizon 4",
    width: 94,
    height: 127,
    top: 145,
  },
  {
    id: 4,
    source: "/games/gta.png",
    name: "Grand Theft Auto V",
    width: 96,
    height: 129,
    top: 210,
  },
];
