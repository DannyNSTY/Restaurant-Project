import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '56€',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '59€',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '44€',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '31€',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '16€',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '20€',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '16€',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '10€',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '€31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '€26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Leyenda Local',
    subtitle: 'Mejor comercio local de Galapagar 2023',
  },
  {
    imgUrl: images.award01,
    title: 'Mejor Valorado',
    subtitle: 'Negocio con mejores reseñas',
  },
  {
    imgUrl: images.award05,
    title: '5 Estrellas en Hospitalidad',
    subtitle: 'Puntiacion maxima en hospitalidad',
  },
  {
    imgUrl: images.award03,
    title: 'Chef revelacion',
    subtitle: 'Mejor Cocinera reconocida por la Comunidad de Madrid',
  },
];

export default { wines, cocktails, awards };
