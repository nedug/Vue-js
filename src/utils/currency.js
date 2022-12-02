export const currency = value => formatter.format(value);

const formatter = new Intl.NumberFormat('ru-RU', { currency: 'RUB', style: 'currency' });