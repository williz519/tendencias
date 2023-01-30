let Lista = [
  {
    id: 1,
    name: "William Albeiro Alvarez Valle (PhD)",
    projects: [
      "Investigador, Mercado Laboral en el Oriente Antioqueño, Universidad de Antioquia - UCO, 2021",
      "Investigador, Mercado Laboral en el Oriente Antioqueño, Universidad de Antioquia - UCO, 2019.",
      " Investigador, Mercado Laboral en el Oriente Antioqueño, Universidad de Antioquia - UCO - CCOA, 2017",
      " Investigador, Mercado Laboral en el Oriente Antioqueño, Universidad de Antioquia - SENA - CCOA, 2013",
    ],

    publish: [
      " Restrepo-Ruiz, A. L., Rincón-Zapata, C., Álvarez-Valle, W. A., Gutierrez-Loaiza, A., & Montoya-Posada, L. F. El Mercado laboral en el Oriente antioqueño. Una mirada desde la inclusión. Fondo Editorial Universidad Católica de Oriente, 2021 [Libro]",
      "        Rincón-Zapata, C., Gutiérrez-Loaiza, A., Álvarez-Valle, W. A., & Restrepo-Ruiz, A. L. Aproximación a la oferta laboral en el Oriente antioqueño en tiempos de pandemia. Fondo Editorial Universidad Católica de Oriente, 2020, [Libro]",
      "    Rincón-Zapata, C., Restrepo-Ruiz, A. L., & Álvarez-Valle, W. A. El mercado laboral en el Oriente Antioqueño: una caracterización de la oferta laboral en seis municipios. Fondo Editorial Universidad Católica de Oriente, 2019, [Libro]",
      "    Alvarez-Valle, W. Sarmiento-Ordosgoitia, I. & Jaramillo-Alvarez, P. “Methodology for Database Collection of Taxi Drivers' Behavior in Real Time”, Social Sciences & Humanities Open. Aceptado para publicación, 2023.",
      "    Alvarez-Valle, W. & Jaramillo-Alvarez, P. & Sarmiento- Ordosgoitia, I. “Modeling Taxi Drivers' Route Choice Incorporating Observed and Unobserved Heterogeneity of the Driving Style”. En evaluación, 2022",
      "    Paper “Análisis Exploratorio de la heterogeneidad del desempleo en el Departamento de Antioquia”. En evaluación, 2022.",
      "    Arroyave O, Álvarez W, Ameriles P, Vásquez M, Cardona B. Pertinencia laboral y social del programa de Tecnología en Regencia de Farmacia en la región de Urabá, Revista Salud UIS, 48(4), 2016.",
    ],
  },

  {
    id: 2,
    name: "Jhon Edwar Torres Gorrón (Mg)",
    projects: [
      "Asesor - Proyecto Observatorio para la inserción laboral y fortalecimiento de la empleabilidad en países de la Alianza del Pacífico Emple-AP.",
      "Investigador – Proyecto modelos macroeconométricos para la estimación de los agregados económicos, Grupo de macroeconomía aplicada.",
      "Investigador – Proyecto de análisis de factibilidad del agroparque Biosuroeste.",
      "Economista Especializado – Proyecto Encuesta de confianza en las estadísticas del Departamento Administrativo Nacional de Estadística (DANE).",
      "Profesional en Economía – Proyecto Modelación límites de colocación, Instituto para el desarrollo de Antioquia (IDEA).",
      "Economista Especializado – Proyecto Fortalecimiento Hacienda Pública departamento de Antioquia",
    ],

    publish: [
      " Grajales, L., Lesmes, A. & Torres, J. Percepción de las empresas sobre los egresados de las IES. Cuadernos del Observatorio Laboral Regional de la Alianza del Pacífico, Volumen 1 (2021).",
      "Índice Municipal de Competitividad en Antioquia IMCA 2019. Secretaría de productividad y competitividad y Universidad de Antioquia, coautor investigador (2019).",
      "	Un análisis estratégico de la gestión municipal. Departamento Administrativo de Planeación y Universidad de Antioquia, coautor investigador (2019).",
      "Torres, J. & Cote, J. Un nuevo cálculo de la tasa de cambio real de equilibrio para Colombia: Enfoque de Balance Macroeconómico. Borrador de Economía No. 1030, Banco de la República. (2017).",
      "Bejarano, L., Gómez-González, J., Melo, L. & Torres, J. Financial Contagion in Latin America. Borrador de Economía No. 1030, Banco de la República. (2015).",
      "Franco, J., Gómez-González, J., Ojeda-Joya, J. & Torres, J. Burbujas en Precios de Activos Financieros: Existencia, Persistencia y Migración. Política Monetaria y Estabilidad Financiera en Economías Pequeñas y Abiertas, Banco de la República, pp. 389-416 (2015).",
      "Gómez-González, J., Ojeda-Joya, J., Franco, J. & Torres, J. Asset Price Bubbles: Existence, Persistence and Migration. South African Journal of Economics (2015).",
      "Cárdenas, C., Hernández, M. & Torres, J. A Statistical Analysis of Heterogeneity on Labour Markets and Unemployment Rates in Colombia. Revista Desarrollo y Sociedad, 75, 153-196 (2014).",
      "Ojeda-Joya, J. & Torres, J. Posición externa de largo plazo y tipo de cambio real de equilibrio en Colombia. Lecturas de economía, 77, 9-52 (2012).",
    ],
  },

  {
    id: 3,
    name: "Zenón Darío Zapata (Esp)",
    projects: [],
    publish: [],
  },

  {
    id: 4,
    name: "Juan Felipe Garcés (Mg)",
    projects: [],
    publish: [],
  },

  {
    id: 5,
    name: "Pilar Paredes (Mg)",
    projects: [],
    publish: [],
  },

  {
    id: 6,
    name: "Daniel Alejandro Ramírez (Mg)",
    publish: [],
    projects: [],
  },

  {
    id: 7,
    name: "Mateo Ramirez Gaviria (Mg)",
    publish: [],
    projects: [],
  },

  {
    id: 8,
    name: "Diana Alexa Torres (Coordinadora investigación U de A seccional Oriente)",
    publish: [],
    projects: [],
  },
];

const Ordering = (a, b) => {
  if (a.name < b.name) {
    return -1;
  } else if (a.name > b.name) {
    return 1;
  } else {
    return 0;
  }
};

let Lista2 = Lista.sort(Ordering);
module.exports = Lista2;
