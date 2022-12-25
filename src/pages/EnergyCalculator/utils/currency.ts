export function getNumberFormat({
  value,
  style,
  notation = 'standard',
  decimalScale = 0,
}: {
  value: number
  notation?: 'compact' | 'standard'
  style?: 'currency' | 'percent'
  decimalScale?: number
}): string {
  const formatter = new Intl.NumberFormat('id-ID', {
    style,
    notation,
    minimumFractionDigits: 0,
    maximumFractionDigits: decimalScale,
    currency: 'IDR',

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  })

  return formatter.format(value)
}
