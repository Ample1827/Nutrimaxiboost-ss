import { prefix } from "@/lib/prefix"; // adjust path as needed

// Product database
export const productDatabase = [
  {
    id: "1",
    name: "Proteína Gold Standard 100% Whey",
    price: 1781.62,
    image: `${prefix}/images/whey.jpeg`,
    category: "featured",
    description:
      "Proteína aislada de suero de leche Optimum Nutrition - Gold Standard 100% Whey.",
    features: [
      "Contiene 24g de proteína por porción",
      "Rápida absorción",
      "Ideal para la recuperación muscular",
      "Mezcla fácil en agua o leche",
      "Disponible en múltiples sabores"
    ],
    specifications: {
      "Peso": "2,27 Kilogramos",
      "Volumen": "2576 Mililitros",
      "Unidades": "2270 gramos",
      "Instrucciones de almacenaje": "Sí",
      "Marca": "OPTIMUM NUTRITION",
      "Formato": "Polvo",
      "Descripción del rango de edad": "Adulto"
    },
    stock: 15,
    rating: 4.8,
    reviews: 124
  },
  {
    id: "2",
    name: "Optimum Nutrition 100% Casein",
    price: 1799.99,
    image: `${prefix}/images/id2.jpg`, // Update path if needed
    category: "featured",
    description:
      "Proteína de caseína de liberación lenta sabor vainilla de Optimum Nutrition. Ideal para tomar antes de dormir o entre comidas.",
    features: [
      "Contiene 24g de proteína por porción",
      "Digestión lenta para liberación prolongada de aminoácidos",
      "Sabor vainilla suave y agradable",
      "Ideal para consumo nocturno",
      "Apoya la recuperación muscular durante el descanso"
    ],
    specifications: {
      "Unidades": "1800 gramos",
      "Marca": "OPTIMUM NUTRITION",
      "ASIN": "B0171QP7BW"
    },
    stock: 23,
    rating: 4.6,
    reviews: 56
  }
  ,
  {
    id: "3",
    name: "Birdman Falcon Performance Proteína Premium",
    price: 917.99,
    image: `${prefix}/images/id3.jpg`, // Update path as needed
    category: "featured",
    description:
      "Proteína vegana premium Birdman Falcon con mezcla de proteínas vegetales, creatina y probióticos. Ideal para atletas con necesidades específicas de digestión o dietas restringidas.",
    features: [
      "Libre de gluten y lactosa",
      "Apto para veganos, celiacos e intolerantes",
      "Contiene proteínas de chícharo, arroz y arándano",
      "Incluye creatina Creapure® y mezcla de aminoácidos",
      "Con enzimas digestivas, probióticos y extractos naturales"
    ],
    specifications: {
      "Unidades": "1 unidad",
      "Marca": "BIRDMAN",
      "ASIN": "B085WBRBHV",
      "Descripción del rango de edad": "Adulto"
    },
    instructions:
      "Mezcla 1 cucharada (38g) con 350 ml de agua. Consumir el mismo día. Almacenar en lugar fresco y seco, lejos del sol.",
    legal_notice: "Este producto no es un medicamento.",
    stock: 8,
    rating: 4.6,
    reviews: 1339
  }
  ,
  {
    id: "4",
    name: "Birdman Falcon Protein Proteína",
    price: 899.99,
    image: `${prefix}/images/id4.jpg`, 
    category: "featured",
    description:
      "Proteína vegetal Birdman Falcon en presentación básica. Ideal para personas que buscan una opción saludable y sostenible para complementar su nutrición diaria.",
    features: [
      "A base de proteínas vegetales",
      "Apto para adultos con dietas veganas o restringidas",
      "Libre de alérgenos comunes",
      "Alta digestibilidad",
      "Sabor natural y suave"
    ],
    specifications: {
      "Unidades": "1 gramo",
      "Marca": "BIRDMAN",
      "ASIN": "B08TYZ7L1M",
      "Descripción del rango de edad": "Adulto"
    },
    stock: 19,
    rating: 4.7,
    reviews: 3219,
    questions: [
      "¿Esta proteína contiene azúcar añadida?",
      "¿Es adecuada para personas con enfermedad celíaca?",
      "¿Cuántos gramos de proteína hay por porción?",
      "¿Contiene soya o alérgenos comunes?",
      "¿Cuál es el origen de sus ingredientes?"
    ]
  },
  {
    id: "5",
    name: "MuscleMeds Carnivor Proteína de Carne - Sabor Chocolate 2716g",
    price: 1199.99,
    image: `${prefix}/images/id5.jpg`, // Update path if needed
    category: "featured",
    description:
      "Carnivor de MuscleMeds es una proteína en polvo elaborada a base de carne de res hidrolizada. Ideal para quienes buscan una alternativa sin lactosa a la proteína tradicional de suero.",
    features: [
      "Proteína de carne de res hidrolizada",
      "Sabor chocolate intenso",
      "Sin lactosa ni colesterol",
      "Alta concentración de proteína por porción",
      "Ideal para ganancia de masa muscular"
    ],
    specifications: {
      "Unidades": "2716 gramos",
      "Marca": "MuscleMeds",
      "ASIN": "B0759NCXHY",
      "Descripción del rango de edad": "Adulto"
    },
    stock: 27,
    rating: 4.6,
    reviews: 455,
    questions: [
      "¿Esta proteína contiene lactosa o derivados lácteos?",
      "¿Cuántas porciones contiene el envase?",
      "¿Se puede mezclar con leche vegetal?",
      "¿Es apta para personas intolerantes a la lactosa?",
      "¿Cuál es el contenido de creatina por porción?"
    ]
  }
  ,
  // 💊 VITAMINAS / SALUD
  {
    id: "6",
    name: "Omega 3 - B Life Company (90 Capletas)",
    price: 499.00, // Update if you have a specific price
    image: `${prefix}/images/id6.jpg`, // Update path if needed
    category: "featured",
    description:
      "Complemento alimenticio con Omega 3 en formato de capletas. Ideal para apoyar la salud cardiovascular, cerebral y articular en adultos.",
    features: [
      "Contiene ácidos grasos Omega 3 EPA y DHA",
      "Apoya la salud del corazón y el cerebro",
      "Formato en capletas de fácil consumo",
      "Apto para adultos",
      "Marca confiable con alta satisfacción del cliente"
    ],
    specifications: {
      "Unidades": "90 unidades",
      "Marca": "B Life Company",
      "Formato": "Capleta",
      "Descripción del rango de edad": "Adulto",
      "ASIN": "B0CGKFND4Z"
    },
    stock: 12,
    rating: 4.7,
    reviews: 2950,
    questions: [
      "¿Cuántas capletas se deben tomar al día?",
      "¿Contiene algún alérgeno como soya o gluten?",
      "¿Cuál es el contenido de EPA y DHA por dosis?",
      "¿Es de origen vegetal o marino?",
      "¿Tiene sabor o es fácil de tragar?"
    ]
  },
  {
    id: "7",
    name: "Arándano Concentrado 50:1 con Vitamina C - 180 Cápsulas",
    price: 379.00, // Estimado, puedes actualizarlo con el precio real
    image: `${prefix}/images/id7.jpg`, // Ajusta el path si es necesario
    category: "featured",
    description:
      "Suplemento de arándano concentrado 50:1 con vitamina C. Apoya la salud del tracto urinario, fortalece el sistema inmune y es apto para adultos.",
    features: [
      "Concentración 50:1 de extracto de arándano",
      "Enriquecido con vitamina C",
      "Apoya la salud urinaria",
      "Formato en cápsulas de fácil consumo",
      "Apto para uso diario en adultos"
    ],
    specifications: {
      "Unidades": "180 unidades",
      "Marca": "B Life Company",
      "Formato": "Cápsula",
      "Descripción del rango de edad": "Adulto",
      "ASIN": "B0BH6L1KQQ"
    },
    stock: 16,
    rating: 4.7,
    reviews: 145,
    questions: [
      "¿Cuántas cápsulas se recomienda tomar al día?",
      "¿Es apto para personas con diabetes?",
      "¿Tiene contraindicaciones si se toma por periodos prolongados?",
      "¿Es de origen natural o contiene aditivos?",
      "¿Cuál es el porcentaje de vitamina C por dosis?"
    ]
  },
  {
    id: "8",
    name: "Homodeus Neuro Shield Platinum - 60 Cápsulas",
    price: 849.00, // Puedes ajustar el precio si tienes el dato real
    image: `${prefix}/images/id8.jpg`, // Cambia el path si corresponde
    category: "featured",
    description:
      "Suplemento neuroprotector de alta gama diseñado para apoyar la memoria, concentración y función cognitiva general. Fórmula avanzada en cápsulas, ideal para adultos.",
    features: [
      "Apoya la salud cerebral y cognitiva",
      "Fórmula avanzada con ingredientes neuroprotectores",
      "Ideal para mejorar memoria y concentración",
      "Formato en cápsulas fáciles de consumir",
      "Diseñado para adultos con alta exigencia mental"
    ],
    specifications: {
      "Unidades": "60 unidades",
      "Marca": "homodeus",
      "Formato": "Cápsula",
      "ASIN": "B0D8MCVM22"
    },
    stock: 10,
    rating: 4.6,
    reviews: 17,
    questions: [
      "¿Se puede tomar junto con otros suplementos?",
      "¿Cuánto tiempo se recomienda tomarlo para notar resultados?",
      "¿Tiene efectos secundarios reportados?",
      "¿Es apto para personas mayores?",
      "¿Se puede consumir con el estómago vacío?"
    ]
  },
  {
    id: "9",
    name: "B Life Multivitamínico para Hombre | 200 Cápsulas | 650 mg",
    price: 499.00, // Puedes modificar el precio si lo tienes
    image: `${prefix}/images/id9.jpg`, // Ajusta el path si es necesario
    category: "featured",
    description:
      "Multivitamínico completo diseñado especialmente para las necesidades del hombre adulto. Fórmula balanceada con vitaminas y minerales esenciales en cápsulas de 650 mg.",
    features: [
      "Fórmula especializada para hombres",
      "200 cápsulas por envase",
      "Apoya energía, sistema inmunológico y salud general",
      "Formato en cápsulas de fácil consumo",
      "Alta concentración de vitaminas y minerales"
    ],
    specifications: {
      "Unidades": "200 unidades",
      "Marca": "B Life Company",
      "Formato": "Cápsula",
      "Descripción del rango de edad": "Adulto",
      "ASIN": "B08C4B9VDP"
    },
    stock: 18,
    rating: 4.6,
    reviews: 5417,
    questions: [
      "¿Cuántas cápsulas se deben tomar al día?",
      "¿Contiene hierro o es libre de este mineral?",
      "¿Puede ser consumido por adolescentes?",
      "¿Es apto para personas con presión alta?",
      "¿Tiene sabor o es neutro?"
    ]
  },
  {
    id: "10",
    name: "B Life Company Zinc de 200 Cápsulas",
    price: 389.00, // Puedes ajustar el precio según lo necesites
    image: `${prefix}/images/id10.jpg`, // Ajusta la ruta si es necesario
    category: "featured",
    description:
      "Suplemento de Zinc en cápsulas, ideal para fortalecer el sistema inmunológico, apoyar la salud celular y mejorar la piel. Presentación de 200 cápsulas por envase.",
    features: [
      "200 cápsulas por envase",
      "Apoya el sistema inmunológico",
      "Contribuye a la salud de piel, cabello y uñas",
      "Fácil absorción",
      "Apto para consumo diario"
    ],
    specifications: {
      "Unidades": "200 unidades",
      "Marca": "B Life Company",
      "Formato": "Cápsula",
      "ASIN": "B08DQCHRJT"
    },
    stock: 25,
    rating: 4.7,
    reviews: 1902,
    questions: [
      "¿Cuál es la dosis diaria recomendada?",
      "¿Contiene algún ingrediente adicional?",
      "¿Se puede tomar en ayunas?",
      "¿Es apto para mujeres embarazadas?",
      "¿Tiene efectos secundarios?"
    ]
  },
  // Home & Living
  {
    id: "11",
    name: "Wild Protein | Barras altas en proteína | Sabor Chocolate",
    price: 179.00, // Puedes ajustar el precio según sea necesario
    image: `${prefix}/images/id11.jpg`, // Ajusta la ruta del archivo si aplica
    category: "featured",
    description:
      "Barras de proteína sabor chocolate con ingredientes naturales como dátiles, soya inflada y crema de cacahuate. Sin azúcar añadida, 15 g de proteína por porción. Perfectas como snack saludable.",
    features: [
      "15 g de proteína por porción",
      "Sin azúcar añadida",
      "Elaboradas con ingredientes naturales",
      "Sin alérgenos declarados",
      "Caja con barras listas para consumir"
    ],
    specifications: {
      "Marca": "Wild Protein",
      "Fabricante": "Wild Foods",
      "Tipo de envase": "Caja",
      "Unidades": "225 g",
      "Ingredientes": "Dátiles, soya inflada, proteína de suero de leche, chocolate amargo, crema de cacahuate",
      "Contenido energético": "348 kcal por porción de 100 g",
      "ASIN": "B0B8R5STGH",
      "Modelo": "7yrW1I4pE"
    },
    stock: 34,
    rating: 4.4,
    reviews: 211,
    questions: [
      "¿Cuántas barras contiene cada caja?",
      "¿Es apto para dietas keto?",
      "¿Contiene lactosa?",
      "¿Tiene certificación libre de gluten?",
      "¿Es adecuada como post-entrenamiento?"
    ]
  },
  {
    id: "12",
    name: "Quest Hero Crispy | Barra de Proteína Sabor Galletas con Crema",
    price: 389.00, // Ajusta el precio si es necesario
    image: `${prefix}/images/id12.jpg`, // Cambia la ruta si aplica
    category: "featured",
    description:
      "Disfruta de una deliciosa barra de proteína con sabor a galletas con crema. Quest Hero Crispy ofrece una textura crujiente y una opción ideal para quienes buscan un snack proteico bajo en azúcares.",
    features: [
      "Textura crujiente tipo crispy",
      "Sabor galletas con crema",
      "12 porciones por empaque",
      "Ideal como snack saludable",
      "Bajo en azúcares"
    ],
    specifications: {
      "Marca": "Quest Nutrition",
      "Formato": "Barra",
      "Peso": "624 g",
      "Unidades": "624 g (12 barras)",
      "Alérgenos": "Puede contener huevo, leche, trigo y soya",
      "Contenido energético": "150 kcal por porción",
      "Grasas": "6 g",
      "Carbohidratos": "23 g",
      "Proteína": "0 g",
      "ASIN": "B092CRNT6M"
    },
    stock: 22,
    rating: 4.6,
    reviews: 11162,
    questions: [
      "¿Cuántas barras vienen por caja?",
      "¿Realmente no tiene proteína?",
      "¿Tiene edulcorantes artificiales?",
      "¿Es apto para personas con intolerancia al gluten?",
      "¿Se puede consumir como reemplazo de comida ligera?"
    ]
  },
  {
    id: "13",
    name: "PBfit | Polvo de Crema de Cacahuate Sin Azúcar",
    price: 269.00, // Ajusta el precio si es necesario
    image: `${prefix}/images/id13.jpg`, // Cambia la ruta si aplica
    category: "featured",
    description:
      "PBfit es una alternativa saludable a la crema de cacahuate tradicional. Con 87% menos grasa y sin azúcar añadida, este polvo de crema de cacahuate es ideal para smoothies, recetas o untar.",
    features: [
      "Sin azúcar añadida",
      "87% menos grasa que la crema de cacahuate tradicional",
      "Ideal para batidos, repostería o untar",
      "Formato en polvo para fácil mezcla",
      "Alto contenido en proteína vegetal"
    ],
    specifications: {
      "Marca": "PBfit",
      "Formato": "Polvo",
      "Tipo de envase": "Botella",
      "Unidades": "368 g",
      "Dimensiones del producto": "9 x 15 x 9 cm",
      "Peso del producto": "368 g",
      "Modelo": "127976",
      "ASIN": "B07J1VGWGG"
    },
    stock: 25,
    rating: 4.7,
    reviews: 6080,
    questions: [
      "¿Se puede mezclar con agua para hacer crema de cacahuate?",
      "¿Es apto para dietas keto?",
      "¿Tiene sabor natural o añadido?",
      "¿Cuál es su vida útil después de abrirse?",
      "¿Contiene aditivos o conservadores?"
    ]
  },
  {
    id: "14",
    name: "Morama | Mezcla para Hotcakes con Proteína",
    price: 139.00, // Ajusta según precio real
    image: `${prefix}/images/id14.jpg`, // Cambia la ruta si aplica
    category: "featured",
    description:
      "Prepara hotcakes saludables con la mezcla de Morama hecha a base de arroz integral, avena y coco. Aporta 13 g de proteína por porción y es ideal para dietas veganas y sin lácteos.",
    features: [
      "13 g de proteína por porción",
      "Hecha con avena, coco y harina de arroz integral",
      "Apta para dietas veganas",
      "Sin lácteos ni conservadores",
      "Origen 100% mexicano"
    ],
    specifications: {
      "Marca": "Morama",
      "Formato": "Bolsa",
      "Unidades": "350 g",
      "Ingredientes": "Avena, Coco, Proteína",
      "Alérgenos": "Sin lácteos, Frutos secos, Cacahuates",
      "Dimensiones del producto": "7 x 15.5 x 21 cm",
      "Peso del producto": "350 g",
      "Contenido energético": "210 kcal por porción",
      "Carbohidratos": "29 g (4 g de azúcar)",
      "Grasas": "4 g",
      "Proteína": "9 g",
      "País de origen": "México",
      "ASIN": "B07HYRLX4J"
    },
    stock: 30,
    rating: 4.5,
    reviews: 1852,
    questions: [
      "¿Necesita huevo o leche para prepararse?",
      "¿Es libre de gluten?",
      "¿Cuál es la proporción por hotcake?",
      "¿Apto para niños?",
      "¿Puede usarse para waffles?"
    ]
  },
  {
    id: "15",
    name: "Catalina Crunch | Cereal Sabor Canela (Cinnamon Toast)",
    price: 198.00, // Ajusta según precio real
    image: `${prefix}/images/id15.jpg`, // Cambia la ruta si aplica
    category: "featured",
    description:
      "Disfruta de un desayuno saludable y delicioso con Catalina Crunch sabor canela. Alto en proteína, sin azúcar y apto para dietas keto, es ideal para un estilo de vida activo.",
    features: [
      "30 g de proteína por paquete (36 g por porción)",
      "Sin azúcar añadida",
      "Apto para dieta keto y diabéticos",
      "Con edulcorantes naturales (stevia y fruta del monje)",
      "Libre de alérgenos comunes"
    ],
    specifications: {
      "Marca": "Catalina Crunch",
      "Formato": "Cereal Inflado",
      "Unidades": "255 g",
      "Ingredientes": "Harina de proteína de chícharo, fibra de raíz de achicoria, tapioca, aceite de girasol, saborizantes naturales, estevia, fruta monje",
      "Alérgenos": "Sin alérgenos",
      "Contenido energético": "770 kcal por empaque",
      "Proteína": "30.56 g",
      "Grasas": "13.89 g",
      "Carbohidratos": "13.89 g (0 g de azúcar)",
      "Dimensiones del paquete": "24.3 x 17.9 x 9 cm",
      "Peso del producto": "255 g",
      "ASIN": "B07WD631ZX"
    },
    stock: 40,
    rating: 4.1,
    reviews: 2943,
    questions: [
      "¿Este cereal es apto para diabéticos?",
      "¿Contiene gluten?",
      "¿Cuántas porciones trae el paquete?",
      "¿Endulzado naturalmente?",
      "¿Tiene certificación keto?"
    ]
  }
  ,
  // Accessories
  {
    id: "16",
    name: "Carnitina Platinum 1300mg | Con CLA, Cetonas de Frambuesa y Vinagre de Manzana",
    price: 369.00, // Ajusta según precio real
    image: `${prefix}/images/id16.jpg`, // Cambia la ruta si aplica
    category: "featured",
    description:
      "Carnitina Platinum es un suplemento avanzado diseñado para apoyar la quema de grasa, la energía y el metabolismo. Su fórmula incluye carnitina, CLA, cetonas de frambuesa y vinagre de manzana.",
    features: [
      "1300 mg de carnitina por porción",
      "Contiene vinagre de manzana y CLA",
      "Incluye cetonas de frambuesa",
      "Fórmula sin gluten",
      "Apto para hombres y mujeres"
    ],
    specifications: {
      "Marca": "TESTROL",
      "Formato": "Cápsula",
      "Unidades": "90 cápsulas",
      "Alérgenos": "Sin gluten",
      "Rango de edad": "Adulto",
      "ASIN": "B09SDMQCWS"
    },
    stock: 38,
    rating: 4.5,
    reviews: 933,
    questions: [
      "¿Cuántas cápsulas se deben tomar al día?",
      "¿Es apto para personas con dieta keto?",
      "¿Tiene efectos secundarios conocidos?",
      "¿Contiene cafeína?",
      "¿Se puede combinar con ejercicio cardiovascular?"
    ]
  },
  {
    id: "17",
    name: "CLA | Suplemento de Ácido Linoleico Conjugado",
    price: 329.00, // Ajusta según el precio real si es necesario
    image: `${prefix}/images/id17.jpg`, // Ajusta la ruta a la imagen correspondiente
    category: "featured",
    description:
      "El CLA es un suplemento popular entre quienes buscan mejorar su composición corporal. Apoya la quema de grasa y la preservación de masa muscular magra en combinación con una dieta adecuada y ejercicio.",
    features: [
      "Contiene ácido linoleico conjugado (CLA)",
      "Formato de gel suave fácil de ingerir",
      "Sin sabor",
      "Ideal para adultos activos",
      "Producto sin necesidad de baterías ni dispositivos especiales"
    ],
    specifications: {
      "Peso del producto": "180 g",
      "Dimensiones": "6.7 x 6.7 x 13 cm",
      "Forma del artículo": "Gel suave",
      "Sabor": "Sin sabor",
      "Cantidad": "1 unidad",
      "Etapa de vida": "Adulto",
      "ASIN": "B0C15D975F"
    },
    stock: 40,
    rating: 4.7,
    reviews: 135,
    questions: [
      "¿Cuántas cápsulas se deben tomar al día?",
      "¿Se puede tomar junto con otros suplementos?",
      "¿Tiene algún efecto secundario?",
      "¿Funciona mejor con ejercicio?",
      "¿Este producto es apto para veganos?"
    ]
  },
  {
    id: "18",
    name: "Carnitina | High Power | 30 Cápsulas",
    price: 189.00, // Ajusta el precio si lo tienes
    image: `${prefix}/images/id18.jpg`, // Ajusta el path según tu estructura
    category: "featured",
    description:
      "Suplemento de carnitina en cápsulas de la marca High Power. Diseñado para apoyar el metabolismo de las grasas y mejorar el rendimiento físico durante el ejercicio.",
    features: [
      "Contiene L-Carnitina",
      "Apoya la quema de grasa y el metabolismo energético",
      "Ideal para uso previo al entrenamiento",
      "Formato en cápsulas fáciles de ingerir",
      "Apto para adultos activos"
    ],
    specifications: {
      "Unidades": "30 cápsulas",
      "Marca": "High Power",
      "Formato": "Cápsula",
      "ASIN": "B07CY4Q23B"
    },
    stock: 36,
    rating: 4.6,
    reviews: 155,
    questions: [
      "¿Cuántas cápsulas se deben tomar antes del ejercicio?",
      "¿Se puede consumir en ayunas?",
      "¿Tiene efectos secundarios?",
      "¿Cuánto tiempo tarda en hacer efecto?",
      "¿Puede combinarse con quemadores de grasa?"
    ]
  },
  {
    id: "19",
    name: "Giant Sports 100% Whey Proteína | 924g",
    price: 849.00, // Ajusta el precio si lo tienes
    image: `${prefix}/images/id19.jpg`, // Ajusta el path según tu estructura
    category: "featured",
    description:
      "Proteína en polvo de suero de leche 100% pura de Giant Sports International. Ideal para apoyar la recuperación muscular y el desarrollo de masa magra tras el entrenamiento.",
    features: [
      "Fórmula con proteína de suero de alta calidad",
      "Favorece el crecimiento y recuperación muscular",
      "Sabor delicioso y fácil de mezclar",
      "Adecuado para atletas y adultos activos",
      "Formato en polvo de 924 gramos"
    ],
    specifications: {
      "Marca": "Giant Performance",
      "Formato": "Polvo",
      "Tipo de envase": "Bote",
      "Rango de edad adecuado": "Adulto",
      "Peso": "907 g",
      "ASIN": "B08NCGQRVC"
    },
    stock: 22,
    rating: 4.8,
    reviews: 103,
    questions: [
      "¿Cuánta proteína contiene por porción?",
      "¿Es apta para personas con intolerancia a la lactosa?",
      "¿Se puede mezclar con leche vegetal?",
      "¿Cuándo es mejor tomarla: antes o después del ejercicio?",
      "¿Tiene sabores disponibles?"
    ]
  },
  {
    id: "19",
    name: "Burn Fit Gel Corporal | Quema Grasa y Anticelulitis",
    price: 289.00, // Puedes ajustar este valor con el precio real si lo conoces
    image: `${prefix}/images/id20.jpg`, // Ajusta el path según tu estructura
    category: "featured",
    description:
      "Gel corporal especialmente formulado para ayudar a reducir grasa localizada y combatir la celulitis. Ideal para complementar rutinas de ejercicio y tratamientos reductores.",
    features: [
      "Ayuda a reducir grasa localizada",
      "Combate la celulitis",
      "Textura ligera de rápida absorción",
      "Uso tópico en zonas específicas del cuerpo",
      "Presentación en envase de 330 g"
    ],
    specifications: {
      "Dimensiones del producto": "9 x 9 x 8 cm",
      "Peso": "330 g",
      "ASIN": "B083ZMNRD1",
      "Ranking de ventas Amazon": "N.º 2 en Tonificadores y Moldeadores Corporales",
      "Fecha de ingreso": "8 abril 2022"
    },
    stock: 30,
    rating: 4.3,
    reviews: 2331,
    questions: [
      "¿Cuántas veces al día se recomienda aplicar?",
      "¿Funciona sin hacer ejercicio?",
      "¿Deja sensación pegajosa?",
      "¿Sirve para brazos y abdomen?",
      "¿Cuánto tiempo tarda en hacer efecto?"
    ]
  },
]

export type Product = (typeof productDatabase)[0]

export function getProductById(id: string): Product | undefined {
  return productDatabase.find((product) => product.id === id)
}

export function getAllProducts(): Product[] {
  return productDatabase
}

export function getProductsByCategory(category: string): Product[] {
  return productDatabase.filter((product) => product.category === category)
}

export function getTopSellingProducts(limit = 5): Product[] {
  // In a real app, this would be based on actual sales data
  // For now, we'll just sort by rating and take the top ones
  return [...productDatabase].sort((a, b) => b.rating - a.rating).slice(0, limit)
}
