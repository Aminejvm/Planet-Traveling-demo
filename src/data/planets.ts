export type Planet = {
  id: string;
  price: number;
  age: number;
  img: string;
  lengthOfDay: {
    day: number;
    hour: number;
    minute: number;
  };
  orbitalPeriod: number;
};

export const planets: Planet[] = [
  {
    id: "Mars",
    price: 890000,
    age: 4.5,
    img: "/mars.png",
    lengthOfDay: {
      day: 1,
      hour: 0,
      minute: 37
    },
    orbitalPeriod: 687
  },
  {
    id: "Jupiter",
    price: 120000099,
    age: 4.503,
    img: "/jupiter.png",
    lengthOfDay: {
      day: 0,
      hour: 9,
      minute: 56
    },
    orbitalPeriod: 4380
  },
  {
    id: "Venus",
    price: 45000000000,
    age: 4.503,
    img: "/venus.png",
    lengthOfDay: {
      day: 116,
      hour: 18,
      minute: 0
    },
    orbitalPeriod: 225
  },
  {
    id: "Uranus",
    price: 31415926599,
    age: 4.6,
    img: "/uranus.png",
    lengthOfDay: {
      day: 0,
      hour: 17,
      minute: 14
    },
    orbitalPeriod: 30660
  }
];
