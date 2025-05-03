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
    name: "Smart Light Bulbs",
    price: 599.99,
    image: "/placeholder.svg?height=600&width=600",
    category: "home",
    description:
      "Transform your home lighting with our Smart Light Bulbs. Control brightness, color, and schedules from your smartphone or voice assistant for the perfect ambiance in any room.",
    features: [
      "16 million colors",
      "Dimmable brightness",
      "Voice control compatible",
      "Scheduling and routines",
      "No hub required",
      "Energy efficient",
    ],
    specifications: {
      Wattage: "9W (60W equivalent)",
      Lumens: "800lm",
      "Color Temperature": "2700K-6500K",
      Connectivity: "Wi-Fi 2.4GHz",
      Compatibility: "Alexa, Google Assistant, HomeKit",
      Lifespan: "25,000 hours",
    },
    stock: 42,
    rating: 4.4,
    reviews: 156,
  },
  {
    id: "12",
    name: "Coffee Maker",
    price: 1799.99,
    image: "/placeholder.svg?height=600&width=600",
    category: "home",
    description:
      "Start your day right with our programmable Coffee Maker. With customizable brewing options and a sleek design, it delivers perfect coffee every time and looks great in any kitchen.",
    features: [
      "12-cup capacity",
      "Programmable timer",
      "Multiple brew strengths",
      "Keep warm function",
      "Auto shut-off",
      "Removable water reservoir",
    ],
    specifications: {
      Capacity: "12 cups (60 oz)",
      Dimensions: "14 x 8 x 14 inches",
      Power: "1000W",
      "Water Reservoir": "Removable, 70 oz",
      "Filter Type": "Permanent gold-tone",
      Programs: "Regular, Bold, 1-4 cups",
    },
    stock: 18,
    rating: 4.6,
    reviews: 128,
  },
  {
    id: "13",
    name: "Air Purifier",
    price: 2999.99,
    image: "/placeholder.svg?height=600&width=600",
    category: "home",
    description:
      "Breathe cleaner, fresher air with our advanced Air Purifier. Using a multi-stage filtration system, it removes allergens, dust, and odors for improved air quality in your home or office.",
    features: [
      "HEPA filtration",
      "Activated carbon filter",
      "Air quality sensor",
      "Auto mode",
      "Sleep mode",
      "Filter replacement indicator",
    ],
    specifications: {
      "Coverage Area": "Up to 500 sq ft",
      "CADR Rating": "300 m³/h",
      "Noise Level": "24-54 dB",
      "Power Consumption": "40W",
      "Filter Life": "6-12 months",
      Dimensions: "21 x 12 x 12 inches",
    },
    stock: 14,
    rating: 4.7,
    reviews: 95,
  },
  {
    id: "14",
    name: "Robot Vacuum",
    price: 5999.99,
    image: "/placeholder.svg?height=600&width=600",
    category: "home",
    description:
      "Let our Robot Vacuum handle the cleaning while you focus on what matters. With smart navigation, powerful suction, and app control, it keeps your floors spotless with minimal effort.",
    features: [
      "Smart mapping technology",
      "2500Pa suction power",
      "150-minute runtime",
      "App and voice control",
      "Automatic recharging",
      "Scheduled cleaning",
    ],
    specifications: {
      "Suction Power": "2500Pa",
      Battery: "5200mAh",
      Runtime: "Up to 150 minutes",
      "Dust Bin Capacity": "600ml",
      "Noise Level": "<65 dB",
      "Climbing Ability": "Up to 2cm",
    },
    stock: 11,
    rating: 4.8,
    reviews: 173,
  },
  {
    id: "15",
    name: "Throw Blanket",
    price: 999.99,
    image: "/placeholder.svg?height=600&width=600",
    category: "home",
    description:
      "Add warmth and style to your home with our luxurious Throw Blanket. Made from premium materials, it's perfect for cozy nights on the couch or as an elegant accent for your bedroom.",
    features: [
      "Ultra-soft fabric",
      "Hypoallergenic",
      "Lightweight yet warm",
      "Elegant design",
      "Machine washable",
      "Multiple color options",
    ],
    specifications: {
      Material: "100% Organic Cotton",
      Dimensions: '50" x 60"',
      Weight: "3 lbs",
      Care: "Machine wash cold, tumble dry low",
      Origin: "Ethically made",
      Certifications: "OEKO-TEX Standard 100",
    },
    stock: 25,
    rating: 4.9,
    reviews: 87,
  },
  // Accessories
  {
    id: "16",
    name: "Phone Case",
    price: 399.99,
    image: "/placeholder.svg?height=600&width=600",
    category: "accessories",
    description:
      "Protect your smartphone in style with our durable Phone Case. Designed for maximum protection without adding bulk, it features precise cutouts for easy access to all buttons and ports.",
    features: [
      "Military-grade drop protection",
      "Slim profile",
      "Wireless charging compatible",
      "Raised edges for screen protection",
      "Anti-yellowing material",
      "Tactile button covers",
    ],
    specifications: {
      Material: "Polycarbonate and TPU",
      Compatibility: "iPhone 13/14 series, Samsung Galaxy S22/S23 series",
      "Drop Protection": "Up to 10 feet",
      Thickness: "2.5mm",
      Weight: "35g",
      Warranty: "Lifetime",
    },
    stock: 48,
    rating: 4.6,
    reviews: 312,
  },
  {
    id: "17",
    name: "Wireless Charger",
    price: 699.99,
    image: "/placeholder.svg?height=600&width=600",
    category: "accessories",
    description:
      "Charge your devices effortlessly with our Wireless Charger. Supporting fast charging for compatible devices, this sleek charger eliminates cable clutter and provides a convenient charging solution.",
    features: [
      "15W fast charging",
      "Multi-device compatibility",
      "LED charging indicator",
      "Anti-slip surface",
      "Foreign object detection",
      "Compact design",
    ],
    specifications: {
      Input: "QC 3.0 adapter (9V/2A)",
      Output: "15W max",
      "Charging Distance": "≤8mm",
      Dimensions: "100mm diameter",
      Compatibility: "Qi-enabled devices",
      "Cable Length": "1.5m",
    },
    stock: 29,
    rating: 4.5,
    reviews: 187,
  },
  {
    id: "18",
    name: "Laptop Sleeve",
    price: 499.99,
    image: "/placeholder.svg?height=600&width=600",
    category: "accessories",
    description:
      "Keep your laptop protected with our stylish and functional Laptop Sleeve. The padded interior safeguards against bumps and scratches, while the water-resistant exterior provides protection from the elements.",
    features: [
      "Padded interior",
      "Water-resistant exterior",
      "Additional pocket for accessories",
      "Reinforced zipper",
      "Slim profile",
      "Carry handle",
    ],
    specifications: {
      Material: "Water-resistant polyester",
      Sizes: '13", 14", 15.6", 16"',
      "Interior Padding": "5mm foam",
      Weight: "280g",
      Colors: "Black, Navy, Gray",
      Warranty: "2 years",
    },
    stock: 36,
    rating: 4.7,
    reviews: 142,
  },
  {
    id: "19",
    name: "USB-C Hub",
    price: 999.99,
    image: "/placeholder.svg?height=600&width=600",
    category: "accessories",
    description:
      "Expand your device's connectivity with our versatile USB-C Hub. Featuring multiple ports in a compact design, it's the perfect solution for connecting all your peripherals and accessories.",
    features: [
      "7-in-1 port expansion",
      "4K HDMI output",
      "SD and microSD card readers",
      "USB 3.0 ports",
      "100W Power Delivery",
      "Aluminum alloy construction",
    ],
    specifications: {
      Ports: "HDMI, 2x USB 3.0, SD, microSD, USB-C PD, Ethernet",
      "HDMI Output": "4K@30Hz",
      "Data Transfer": "Up to 5Gbps",
      "Power Delivery": "100W pass-through",
      Dimensions: "112 x 28 x 9mm",
      Compatibility: "MacBook, iPad Pro, Windows laptops, Android",
    },
    stock: 22,
    rating: 4.6,
    reviews: 156,
  },
  {
    id: "20",
    name: "Screen Protector",
    price: 299.99,
    image: "/placeholder.svg?height=600&width=600",
    category: "accessories",
    description:
      "Safeguard your device's screen with our premium Screen Protector. Offering superior scratch resistance and clarity, it preserves your display's pristine condition without affecting touch sensitivity.",
    features: [
      "9H hardness",
      "Oleophobic coating",
      "99% transparency",
      "Easy installation",
      "Case-friendly design",
      "Bubble-free application",
    ],
    specifications: {
      Material: "Tempered glass",
      Thickness: "0.33mm",
      Hardness: "9H",
      Compatibility: "Multiple smartphone and tablet models",
      "Package Includes": "2 screen protectors, cleaning kit, installation guide",
      Warranty: "Lifetime replacement",
    },
    stock: 54,
    rating: 4.4,
    reviews: 231,
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
