export const SALON_INFO = {
  name: "Casa Suntuosa",
  tagline: "Salón de Belleza & Tratamientos Capilares",
  city: "Montería, Córdoba",
  address: "Cra. 6 #62-31, Barrio La Castellana",
  phone: "(+57) 300 123 4567",
  whatsappNumber: "573001234567",
  email: "hola@casasuntuosa.co",
  schedule: "Lunes a Sábado: 8:00 a.m. – 7:00 p.m. · Domingos con cita previa",
  domicilioPrice: "$4.000 en Montería",
  facebook: "https://www.facebook.com/casaasmr/",
  instagram: "https://www.instagram.com/casasuntuosa/?hl=es",
};

export const WHATSAPP = `https://wa.me/${SALON_INFO.whatsappNumber}?text=Hola%20Casa%20Suntuosa%2C%20quiero%20agendar%20una%20cita`;

export function getWhatsAppProductUrl(productName: string) {
  const text = encodeURIComponent(`Hola Casa Suntuosa, me interesa comprar el producto "${productName}". ¿Tienen disponibilidad y servicio a domicilio?`);
  return `https://wa.me/${SALON_INFO.whatsappNumber}?text=${text}`;
}

export function getWhatsAppServiceUrl(serviceName: string) {
  const text = encodeURIComponent(`Hola Casa Suntuosa, quiero agendar el servicio "${serviceName}" con diagnóstico capilar.`);
  return `https://wa.me/${SALON_INFO.whatsappNumber}?text=${text}`;
}

export const IMG = {
  heroPortrait:
    "https://images.pexels.com/photos/7440132/pexels-photo-7440132.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  heroDetail:
    "https://images.pexels.com/photos/7440057/pexels-photo-7440057.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=700",
  heroSalon:
    "https://images.pexels.com/photos/7750124/pexels-photo-7750124.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  salonA:
    "https://images.pexels.com/photos/7195812/pexels-photo-7195812.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  salonB:
    "https://images.pexels.com/photos/7750108/pexels-photo-7750108.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  salonC:
    "https://images.pexels.com/photos/7195803/pexels-photo-7195803.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  ritualWash:
    "https://images.pexels.com/photos/3993451/pexels-photo-3993451.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  ritualComb:
    "https://images.pexels.com/photos/6503332/pexels-photo-6503332.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  ritualCurls:
    "https://images.pexels.com/photos/7440128/pexels-photo-7440128.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  ritualHands:
    "https://images.pexels.com/photos/23349887/pexels-photo-23349887.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
};

export type Service = {
  name: string;
  tag: string;
  price: string;
  duration: string;
  description: string;
  image: string;
  highlights: string[];
};

export const services: Service[] = [
  {
    name: "Tratamiento Alisador (Keratina)",
    tag: "Alisado estrella",
    price: "$100.000",
    duration: "100 min",
    description:
      "Producto + aplicación profesional. Alisado progresivo con sellado de cutícula que respeta la fibra capilar y neutraliza la humedad de Montería.",
    image: IMG.ritualCurls,
    highlights: ["Producto + aplicación", "Anti-humedad 32°C", "Resultado prolongado", "Cabello sedoso"],
  },
  {
    name: "Botox Capilar Suntuoso",
    tag: "Reconstrucción intensiva",
    price: "$180.000",
    duration: "120 min",
    description:
      "Terapia molecular con aminoácidos y colágeno hidrolizado. Repara el daño químico y ambiental, otorgando un brillo espejo desde la primera aplicación.",
    image: IMG.ritualComb,
    highlights: ["Sin formol", "Brillo espejo", "Efecto memoria", "Ideal cabello teñido"],
  },
  {
    name: "Tinte y Mechas de Autor",
    tag: "Colorimetría avanzada",
    price: "$150.000",
    duration: "120–150 min",
    description:
      "Técnicas personalizadas de balayage, babylights y color global con plex protector para cuidar la elasticidad y resistencia del cabello.",
    image: IMG.ritualHands,
    highlights: ["Plex protector", "Asesoría visagismo", "Tonos personalizados"],
  },
  {
    name: "Lavado, Cepillado & Planchado",
    tag: "Cuidado & Styling",
    price: "$25.000",
    duration: "30 min",
    description:
      "Lavado con masaje capilar, productos de nuestra línea profesional, secado técnico y planchado pulido de larga duración.",
    image: IMG.ritualWash,
    highlights: ["Masaje capilar", "Protector térmico", "Acabado pulido"],
  },
  {
    name: "Corte de Cabello Dama & Caballero",
    tag: "Estilismo",
    price: "$10.000 – $15.000",
    duration: "15–20 min",
    description:
      "Cortes de diseño, despuntes milimétricos y técnicas modernas que potencian la caída natural de tu cabello y las facciones de tu rostro.",
    image: IMG.heroPortrait,
    highlights: ["Dama $10.000", "Caballero $15.000", "Corte con visagismo"],
  },
  {
    name: "Limpieza Facial & Cejas Semipermanentes",
    tag: "Estética Integral",
    price: "$15.000 – $25.000",
    duration: "15–25 min",
    description:
      "Limpieza facial profunda con exfoliación e hidratación dérmica, complementada con diseño y pigmentación de cejas semipermanentes.",
    image: IMG.heroDetail,
    highlights: ["Limpieza facial $25.000", "Cejas semipermanentes $15.000", "Resultados inmediatos"],
  },
];

export type Product = {
  name: string;
  line: string;
  price: string;
  note: string;
  image: string;
  accent: string;
  badge?: string;
  features: string[];
};

export const products: Product[] = [
  {
    name: "Shampoo Herbal Extractos Naturales",
    line: "Línea Botánica Profesional",
    price: "$25.000",
    note: "400 ml · con romero y extractos botánicos",
    image: "/assets/productos/producto-1.png",
    accent: "from-gold-300/30 to-cream-200",
    badge: "Fórmula Profesional",
    features: ["Extractos naturales", "Estimula crecimiento", "Purificación suave"],
  },
  {
    name: "Shampoo Anticaspa Mentol & Argán",
    line: "Línea Dermocuidado",
    price: "$28.000",
    note: "275 ml · mentol refrescante y aceite de argán",
    image: "/assets/productos/producto-2.png",
    accent: "from-ink-900/10 to-gold-200/20",
    badge: "Alivio Inmediato",
    features: ["Control caspa eficaz", "Frescura mentolada", "Nutrición con argán"],
  },
  {
    name: "Tratamiento Acondicionador Anti Frizz",
    line: "Línea Reestructuración",
    price: "$28.000",
    note: "400 ml · ácido glicólico & extractos naturales",
    image: "/assets/productos/producto-3.png",
    accent: "from-gold-200/40 to-rose-soft/20",
    badge: "Ácido Glicólico",
    features: ["Sellado de cutícula", "Desenredo sedoso", "Máximo control frizz"],
  },
  {
    name: "Shampoo de Mantenimiento Anti Frizz",
    line: "Línea Libre de Sal",
    price: "$25.000",
    note: "400 ml · sin sulfatos, sal ni parabenos",
    image: "/assets/productos/producto-4.png",
    accent: "from-cream-200 to-gold-300/30",
    badge: "Sin Sal ni Sulfatos",
    features: ["Prolonga alisados", "Fórmula suave", "Protección diaria"],
  },
  {
    name: "Kit Dúo Shampoo + Acondicionador",
    line: "Línea Laboratorio Casa Suntuosa",
    price: "$25.000",
    note: "Dúo completo · cuidado integral en casa",
    image: "/assets/productos/producto-1.png",
    accent: "from-gold-400/20 to-gold-200/40",
    badge: "Más Vendido",
    features: ["Rutina completa", "Ahorro garantizado", "Fórmula de salón"],
  },
  {
    name: "Kit de Alisado Reestructuración Térmica",
    line: "Línea Tratamiento Intensivo",
    price: "$30.000",
    note: "Kit completo · incluye shampoo de limpieza profunda",
    image: "/assets/productos/producto-3.png",
    accent: "from-rose-soft/30 to-gold-300/40",
    badge: "Kit Profesional",
    features: ["Limpieza profunda", "Alisado térmico", "Paso a paso guiado"],
  },
];

export const testimonials = [
  {
    quote:
      "Llevaba años buscando un alisado que resistiera la humedad de Montería sin dañar las puntas. Con la keratina de Casa Suntuosa mi cabello amanece listo todos los días.",
    name: "Valentina R.",
    role: "Clienta habitual · Barrio La Castellana",
    avatar:
      "https://images.pexels.com/photos/7752815/pexels-photo-7752815.jpeg?auto=compress&cs=tinysrgb&dpr=2&fit=crop&h=300&w=300",
  },
  {
    quote:
      "Compré el kit de shampoo y acondicionador anti frizz para casa y la diferencia es enorme. Son fórmulas reales de laboratorio a un precio super accesible.",
    name: "Daniela M.",
    role: "Línea Anti Frizz",
    avatar:
      "https://images.pexels.com/photos/7752818/pexels-photo-7752818.jpeg?auto=compress&cs=tinysrgb&dpr=2&fit=crop&h=300&w=300",
  },
  {
    quote:
      "La puntualidad y la atención son impecables. Me hicieron el corte y el cepillado en 30 minutos y quedó perfecto. Se nota el profesionalismo del equipo.",
    name: "Laura C.",
    role: "Corte y Cepillado",
    avatar:
      "https://images.pexels.com/photos/7752791/pexels-photo-7752791.jpeg?auto=compress&cs=tinysrgb&dpr=2&fit=crop&h=300&w=300",
  },
  {
    quote:
      "El servicio a domicilio en Montería por solo $4.000 para los productos es una maravilla. Pedí mi tratamiento y llegó al instante.",
    name: "Isabella G.",
    role: "Pedidos Domicilio Montería",
    avatar:
      "https://images.pexels.com/photos/29132010/pexels-photo-29132010.jpeg?auto=compress&cs=tinysrgb&dpr=2&fit=crop&h=300&w=300",
  },
];

export const faqs = [
  {
    q: "¿Dónde están ubicados y cuál es el horario de atención?",
    a: "Estamos ubicados en la Cra. 6 #62-31, en el exclusivo Barrio La Castellana en Montería, Córdoba. Atendemos de lunes a sábado de 8:00 a.m. a 7:00 p.m. y los domingos con cita previa para eventos y novias.",
  },
  {
    q: "¿Los productos de la línea Casa Suntuosa tienen servicio a domicilio?",
    a: "¡Sí! Contamos con servicio a domicilio en Montería por solo $4.000 y entregas en el mismo día. También enviamos a municipios vecinos de Córdoba.",
  },
  {
    q: "¿Qué diferencia al tratamiento alisador de keratina de Casa Suntuosa?",
    a: "Nuestra fórmula está adaptada al clima de Montería (humedad superior al 80% y 32°C). Alisa, sella la cutícula y elimina el encrespamiento respetando la fibra capilar, sin gases irritantes ni químicos agresivos.",
  },
  {
    q: "¿Necesito agendar cita previa para atenderme?",
    a: "Trabajamos preferentemente con reserva previa para asegurar que no tengas que esperar. Puedes agendar por WhatsApp en menos de un minuto.",
  },
  {
    q: "¿Qué medios de pago reciben en el salón y para domicilios?",
    a: "Aceptamos efectivo, transferencias por Nequi, Daviplata, Bancolombia, tarjetas débito y crédito, y Addi para diferir tratamientos.",
  },
];

export const plans = [
  {
    name: "Cuidado Esencial",
    price: "89.000",
    cadence: "por mes · 2 visitas",
    blurb: "Para mantener tu cabello brillante y protegido todo el mes.",
    features: [
      "Diagnóstico capilar personalizado",
      "2 lavados profundos con masaje",
      "2 cepillados y planchados pulidos",
      "1 despunte o corte de mantenimiento",
      "10% de descuento en productos",
    ],
    cta: "Reservar Esencial",
    featured: false,
  },
  {
    name: "Casa Signature",
    price: "169.000",
    cadence: "por mes · plan integral",
    blurb: "Nuestro plan favorito: tratamiento continuo para resultados espectaculares.",
    features: [
      "Todo lo del plan Esencial",
      "1 Tratamiento de Keratina o Botox bimestral",
      "Kit dúo de shampoo + acondicionador gratis",
      "Limpieza facial o diseño de cejas incluido",
      "Agenda prioritaria sin esperas",
    ],
    cta: "Quiero Casa Signature",
    featured: true,
  },
  {
    name: "Suntuosa Élite",
    price: "289.000",
    cadence: "por mes · VIP ilimitado*",
    blurb: "La experiencia completa de belleza para quien prioriza su imagen.",
    features: [
      "Cepillados y peinados semanales",
      "Colorimetría o mechas de autor semestral",
      "Todos los productos del mes incluidos",
      "Atención VIP y bebida de cortesía",
      "Servicio de domicilio prioritario sin costo",
    ],
    cta: "Hablar con Asesora",
    featured: false,
  },
];
