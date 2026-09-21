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
    name: "Botox Capilar Suntuoso",
    tag: "Más solicitado",
    price: "$180.000",
    duration: "120 min",
    description:
      "Reconstrucción profunda con colágeno hidrolizado y aminoácidos. Sella la cutícula, elimina el frizz y devuelve el brillo espejo en una sola sesión.",
    image: IMG.ritualComb,
    highlights: ["Sin formol", "Dura hasta 3 meses", "Apto para cabello teñido"],
  },
  {
    name: "Keratina Orgánica",
    tag: "Alisado premium",
    price: "$260.000",
    duration: "180 min",
    description:
      "Alisado progresivo libre de formol que respeta la fibra capilar. Cabello manejable, suave y con movimiento natural, incluso con la humedad de Montería.",
    image: IMG.ritualCurls,
    highlights: ["Libre de formol", "Anti-humedad", "Resultado 4–6 meses"],
  },
  {
    name: "Hidratación Molecular",
    tag: "Ritual SPA",
    price: "$95.000",
    duration: "75 min",
    description:
      "Terapia de vapor con ampollas de ácido hialurónico y masaje craneal relajante. El rescate perfecto para cabello reseco por sol, piscina y plancha.",
    image: IMG.ritualWash,
    highlights: ["Masaje craneal", "Vapor de ozono", "Brillo inmediato"],
  },
  {
    name: "Color de Autor & Balayage",
    tag: "Colorimetría",
    price: "desde $230.000",
    duration: "150 min",
    description:
      "Diseño de color personalizado con técnica de barrido y tonos hechos a mano para tu piel, tu estilo y tu rutina. Sin dañar, con plex incluido.",
    image: IMG.ritualHands,
    highlights: ["Plex protector", "Diagnóstico previo", "Retoque guiado"],
  },
];

export type Product = {
  name: string;
  line: string;
  price: string;
  note: string;
  image: string;
  accent: string;
};

export const products: Product[] = [
  {
    name: "Sérum Reparador Nocturno",
    line: "Línea Oro Líquido",
    price: "$78.000",
    note: "30 ml · uso diario",
    image:
      "https://images.pexels.com/photos/31251024/pexels-photo-31251024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    accent: "from-gold-300/40 to-rose-soft/30",
  },
  {
    name: "Mascarilla Keratina Líquida",
    line: "Línea Reconstrucción",
    price: "$96.000",
    note: "500 g · 2 veces por semana",
    image:
      "https://images.pexels.com/photos/16329382/pexels-photo-16329382.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    accent: "from-rose-soft/40 to-gold-200/30",
  },
  {
    name: "Shampoo sin Sal Hidra+",
    line: "Línea Cuidado Diario",
    price: "$62.000",
    note: "400 ml · todo tipo de cabello",
    image:
      "https://images.pexels.com/photos/18066458/pexels-photo-18066458.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    accent: "from-cream-200 to-gold-200/40",
  },
  {
    name: "Ampollas Crecimiento Biotina",
    line: "Línea Densidad",
    price: "$110.000",
    note: "Caja x 12 · tratamiento 6 semanas",
    image:
      "https://images.pexels.com/photos/20382236/pexels-photo-20382236.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    accent: "from-gold-200/50 to-cream-200",
  },
  {
    name: "Aceite de Argán Puro",
    line: "Línea Oro Líquido",
    price: "$85.000",
    note: "50 ml · sellado de puntas",
    image:
      "https://images.pexels.com/photos/4832435/pexels-photo-4832435.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    accent: "from-rose-soft/30 to-gold-300/40",
  },
  {
    name: "Protector Térmico Velo 230°",
    line: "Línea Styling",
    price: "$69.000",
    note: "200 ml · antes de planchar",
    image:
      "https://images.pexels.com/photos/7546589/pexels-photo-7546589.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    accent: "from-cream-200 to-rose-soft/30",
  },
];

export const testimonials = [
  {
    quote:
      "Llevaba años peleando con el frizz por la humedad de Montería. Después del botox capilar mi cabello amanece liso y con brillo. Es otra vida.",
    name: "Valentina R.",
    role: "Cliente desde 2022 · Barrio La Castellana",
    avatar:
      "https://images.pexels.com/photos/7752815/pexels-photo-7752815.jpeg?auto=compress&cs=tinysrgb&dpr=2&fit=crop&h=300&w=300",
  },
  {
    quote:
      "El diagnóstico capilar antes de tocarme el cabello me ganó. Me explicaron todo, me dieron rutina en casa y el color quedó exactamente como lo soñé.",
    name: "Daniela M.",
    role: "Colorimetría & Balayage",
    avatar:
      "https://images.pexels.com/photos/7752818/pexels-photo-7752818.jpeg?auto=compress&cs=tinysrgb&dpr=2&fit=crop&h=300&w=300",
  },
  {
    quote:
      "Compré la mascarilla y el sérum y me duraron meses. Son productos profesionales de verdad, no los típicos de supermercado. Vale cada peso.",
    name: "Laura C.",
    role: "Compradora Línea Oro Líquido",
    avatar:
      "https://images.pexels.com/photos/7752791/pexels-photo-7752791.jpeg?auto=compress&cs=tinysrgb&dpr=2&fit=crop&h=300&w=300",
  },
  {
    quote:
      "Me casé en diciembre y Casa Suntuosa preparó mi cabello desde tres meses antes. El día de la boda todos preguntaban por mi peinado.",
    name: "Isabella G.",
    role: "Novia · Plan Preparación Nupcial",
    avatar:
      "https://images.pexels.com/photos/29132010/pexels-photo-29132010.jpeg?auto=compress&cs=tinysrgb&dpr=2&fit=crop&h=300&w=300",
  },
  {
    quote:
      "Puntualidad absoluta, ambiente impecable y un café mientras esperas. Se siente como un spa de ciudad grande, pero aquí en Montería.",
    name: "Camila P.",
    role: "Membresía Casa Signature",
    avatar:
      "https://images.pexels.com/photos/7752814/pexels-photo-7752814.jpeg?auto=compress&cs=tinysrgb&dpr=2&fit=crop&h=300&w=300",
  },
];

export const faqs = [
  {
    q: "¿Dónde están ubicados y cuál es el horario?",
    a: "Estamos en el barrio La Castellana, Montería (Córdoba), a pocos minutos de la Avenida Circunvalar. Atendemos de lunes a sábado de 8:00 a.m. a 7:00 p.m. y domingos con cita previa para eventos y novias.",
  },
  {
    q: "¿Necesito cita o puedo llegar directamente?",
    a: "Trabajamos 100% con cita para garantizar que nadie espere. Puedes reservar por WhatsApp en menos de un minuto; si tenemos un espacio libre el mismo día, con gusto te recibimos.",
  },
  {
    q: "¿Los tratamientos dañan el cabello teñido o con químicos?",
    a: "No. Todos nuestros tratamientos son libres de formol y se aplican después de un diagnóstico capilar gratuito donde medimos porosidad, elasticidad y daño. Ajustamos la fórmula a tu fibra capilar, no al revés.",
  },
  {
    q: "¿Venden los productos por separado, sin tomar el servicio?",
    a: "Sí. Toda la Línea Casa Suntuosa se vende en el salón y con domicilio en Montería y municipios cercanos. También armamos kits personalizados según tu diagnóstico.",
  },
  {
    q: "¿Cuánto dura un tratamiento capilar y cada cuánto debo repetirlo?",
    a: "La hidratación dura de 3 a 4 semanas, el botox capilar entre 2 y 3 meses y la keratina orgánica de 4 a 6 meses. Te entregamos un calendario de mantenimiento personalizado para que no pierdas el resultado.",
  },
  {
    q: "¿Qué formas de pago aceptan?",
    a: "Efectivo, Nequi, Daviplata, Bancolombia, tarjetas débito y crédito (con opción de diferir) y Addi para tratamientos desde $200.000.",
  },
];

export const plans = [
  {
    name: "Esencial",
    price: "89.000",
    cadence: "por visita",
    blurb: "Para mantener tu cabello saludable con lo indispensable.",
    features: [
      "Diagnóstico capilar digital",
      "Lavado profundo + masaje craneal",
      "Corte o despunte de precisión",
      "Secado y peinado profesional",
      "Rutina en casa personalizada",
    ],
    cta: "Reservar Esencial",
    featured: false,
  },
  {
    name: "Casa Signature",
    price: "189.000",
    cadence: "al mes · 2 visitas",
    blurb: "Nuestro plan estrella: tratamiento continuo y resultados visibles.",
    features: [
      "Todo lo del plan Esencial",
      "2 tratamientos capilares al mes",
      "Botox capilar trimestral incluido",
      "15% de descuento en toda la línea de productos",
      "Agenda prioritaria y horarios extendidos",
      "Retoque de brillo y peinado express gratis",
    ],
    cta: "Quiero Signature",
    featured: true,
  },
  {
    name: "Suntuosa Élite",
    price: "349.000",
    cadence: "al mes · ilimitado*",
    blurb: "La experiencia completa para quien vive de su imagen.",
    features: [
      "Todo lo del plan Signature",
      "Peinados ilimitados de lunes a jueves",
      "Color o balayage semestral incluido",
      "Kit trimestral Línea Oro Líquido",
      "Sala privada y atención personalizada",
      "2 invitaciones para acompañantes al año",
    ],
    cta: "Hablar con asesora",
    featured: false,
  },
];

export const WHATSAPP =
  "https://wa.me/573001234567?text=Hola%20Casa%20Suntuosa%2C%20quiero%20agendar%20una%20cita";
