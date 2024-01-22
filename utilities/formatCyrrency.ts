export function formatCurrency(value: number, style: 'decimal' | 'currency' = 'currency') {
    return new Intl.NumberFormat('ru-RU', {
        style: style,
        currency: 'RUB',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(value);
}