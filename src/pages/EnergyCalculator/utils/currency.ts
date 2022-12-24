export function getRupiahFormat({
  value,
  showCurrency = true,
  notation = 'standard',
}: {
  value: number
  notation?: 'compact' | 'standard'
  showCurrency?: boolean
}): string {
  const formatter = new Intl.NumberFormat('id-ID', {
    style: showCurrency ? 'currency' : undefined,
    notation,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    currency: 'IDR',

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  })

  return formatter.format(value)
}
