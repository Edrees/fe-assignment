interface Data {
  id: number;
  type: string;
  brand: string;
  colors: string[];
  img: string;
}

export const data: Array<Data> = [
  {
    id: 1,
    type: 'Car',
    brand: 'Bugatti Veyron',
    colors: ['Red', 'Black'],
    img:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Bugatti_Veyron_16.4_%E2%80%93_Frontansicht_%281%29%2C_5._April_2012%2C_D%C3%BCsseldorf.jpg/520px-Bugatti_Veyron_16.4_%E2%80%93_Frontansicht_%281%29%2C_5._April_2012%2C_D%C3%BCsseldorf.jpg'
  },
  {
    id: 2,
    type: 'Airplane',
    brand: 'Boeing 787 Dreamliner',
    colors: ['Red', 'White', 'Black', 'Green'],
    img:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/All_Nippon_Airways_Boeing_787-8_Dreamliner_JA801A_OKJ_in_flight.jpg/600px-All_Nippon_Airways_Boeing_787-8_Dreamliner_JA801A_OKJ_in_flight.jpg'
  },
  {
    id: 3,
    type: 'Train',
    brand: 'USRA 0-6-6',
    colors: ['Yellow', 'White', 'Black'],
    img:
      'https://upload.wikimedia.org/wikipedia/commons/d/d2/SRC_89_19930000_PA_Strasburg.jpg'
  },
  {
    id: 4,
    type: 'Airplane',
    brand: 'Canadair North Star',
    colors: ['Red', 'Blue', 'Yellow', 'Green'],
    img:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/BOAC_C-4_Argonaut_Heathrow_1954.jpg/600px-BOAC_C-4_Argonaut_Heathrow_1954.jpg'
  },
  {
    id: 5,
    type: 'Airplane',
    brand: 'Airbus A400M Atlas',
    colors: ['Red', 'White'],
    img:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/A400M-1969.jpg/600px-A400M-1969.jpg'
  },
  {
    id: 6,
    type: 'Airplane',
    brand: 'Bloch MB.131',
    colors: ['Yellow', 'Blue', 'Brown'],
    img:
      'https://upload.wikimedia.org/wikipedia/commons/e/e5/Bloch_MB_131_San_Diego_Air_%26_Space_Museum_3.jpg'
  },
  {
    id: 7,
    type: 'Train',
    brand: 'Prairie 2-6-2',
    colors: ['Red', 'White', 'Grey'],
    img:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/CFR_Steam_locomotive.jpg/600px-CFR_Steam_locomotive.jpg'
  },
  {
    id: 8,
    type: 'Train',
    brand: 'EMD GP40',
    colors: ['Black', 'Grey', 'White'],
    img:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/EMD_GP40_B%26M_339_Wells_Maine.jpg/600px-EMD_GP40_B%26M_339_Wells_Maine.jpg'
  },
  {
    id: 9,
    type: 'Train',
    brand: 'Amer 4-4-0',
    colors: ['Red', 'Black'],
    img:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/440woodcut.jpg/600px-440woodcut.jpg'
  },
  {
    id: 10,
    type: 'Car',
    brand: 'Ferrari F40',
    colors: ['Red', 'Yellow'],
    img:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/F40_Ferrari_20090509.jpg/560px-F40_Ferrari_20090509.jpg'
  },
  {
    id: 11,
    type: 'Car',
    brand: 'Lamborghini Huracán',
    colors: ['Black', 'White'],
    img:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/2014-03-04_Geneva_Motor_Show_1379.JPG/440px-2014-03-04_Geneva_Motor_Show_1379.JPG'
  },
  {
    id: 12,
    type: 'Car',
    brand: 'Porsche Carrera GT',
    colors: ['Green', 'Yellow'],
    img:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Porsche_Carrera_GT_-_Goodwood_Breakfast_Club_%28July_2008%29.jpg/440px-Porsche_Carrera_GT_-_Goodwood_Breakfast_Club_%28July_2008%29.jpg'
  }
];
