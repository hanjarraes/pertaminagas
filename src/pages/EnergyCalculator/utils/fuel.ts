export const fuels = [
  {
    name: 'COAL',
    title: 'Coal',
    image: 'coal.png',
    units: ['Rupiah', 'Tons'],
    multiplyUnit: 1000,
    price: 4810,
    naturalGas: 575,
    co2Emission: 2.42
  },
  {
    name: 'LPG_50KG',
    title: 'LPG 50Kg',
    image: 'lpg50.png',
    units: ['Rupiah', 'Tank'],
    multiplyUnit: 50,
    price: 17750,
    naturalGas: 1265,
    co2Emission: 3.06
  },
  {
    name: 'LPG_BULK',
    title: 'LPG Bulk',
    image: 'lpg50.png',
    units: ['Rupiah', 'Kg'],
    multiplyUnit: 1,
    price: 17750,
    naturalGas: 1265,
    co2Emission: 3.06
  },
  {
    name: 'HSD',
    title: 'HSD/Industrial Diesel',
    image: 'coal.png',
    units: ['Rupiah', 'Liter'],
    multiplyUnit: 1,
    price: 24450,
    naturalGas: 1022,
    co2Emission: 2.68
  },
  {
    name: 'MFO',
    title: 'MFO',
    image: 'MFO.png',
    units: ['Rupiah', 'Liter'],
    multiplyUnit: 1,
    price: 19500,
    naturalGas: 1045,
    co2Emission: 3.2
  }
]

export function calculateEnergy(
  name: string,
  unit: string,
  usageValue: number
): any | undefined {
  const target = fuels.find(fuel => fuel.name === name)

  if (!target) {
    return undefined
  }

  const BASE_NATURAL_GAS_PRICE: number = 5265
  const BASE_NATURAL_GAS_CO2_EMISSION: number = 1.9
  const MMBTU_CONVERSION: number = 28.5
  const TAX_MULTIPLIER: number = 30000

  let volume: number = 0
  let volumeM3: number = 0

  let naturalGasCosts: number = 0
  let mmbtu: number = 0
  let bbtu: number = 0

  let highSpeedDieselFuelEmission: number = 0
  let highSpeedDieselFuelTax: number = 0
  let naturalGasEmission: number = 0
  let naturalGasTax: number = 0

  let energyCostsSavingPerMonth: number = 0
  let taxSaving: number = 0
  let co2EmissionReduction: number = 0

  if (unit === 'Rupiah') {
    volume = Number(usageValue / target.price)
    volumeM3 = Number(volume * target.naturalGas) / 1000
    naturalGasCosts = Number(volumeM3 * BASE_NATURAL_GAS_PRICE)
    highSpeedDieselFuelEmission = (volume * target.co2Emission) / 1000
    energyCostsSavingPerMonth = usageValue - naturalGasCosts
  } else {
    volume = Number(usageValue * target.price)
    volumeM3 = Number((usageValue * target.naturalGas) / 1000)
    naturalGasCosts = Number(volumeM3 * BASE_NATURAL_GAS_PRICE)
    highSpeedDieselFuelEmission = (usageValue * target.co2Emission) / 1000
    energyCostsSavingPerMonth = volume - naturalGasCosts
  }

  //   B. Penggunaan Bahan bakar eksiting Anda setara dengan penggunaan gas bumi senilai
  mmbtu = Number(volumeM3 / MMBTU_CONVERSION)
  bbtu = Number(mmbtu / 1000)

  // console.log(volume);

  // console.log(naturalGasCosts);
  // console.log(volumeM3);
  // console.log(mmbtu);
  // console.log(bbtu);

  //   C. Jumlah Emisi Karbon & Pajak Karbon
  naturalGasEmission = (volumeM3 * BASE_NATURAL_GAS_CO2_EMISSION) / 1000
  highSpeedDieselFuelTax = highSpeedDieselFuelEmission * TAX_MULTIPLIER
  naturalGasTax = naturalGasEmission * TAX_MULTIPLIER

  // console.log(highSpeedDieselFuelEmission);
  // console.log(highSpeedDieselFuelTax);
  // console.log(naturalGasEmission);
  // console.log(naturalGasTax);

  //   D. Kesimpulan
  //   energyCostsSavingPerMonth = 11698877
  taxSaving = highSpeedDieselFuelTax - naturalGasTax
  co2EmissionReduction = highSpeedDieselFuelEmission - naturalGasEmission
  const totalSaving = Math.ceil(energyCostsSavingPerMonth + taxSaving)

  // console.log(energyCostsSavingPerMonth);
  // console.log(taxSaving);
  // console.log(co2EmissionReduction);
  // console.log(totalSaving);

  return {
    volume,
    volumeM3,
    naturalGasCosts,
    mmbtu,
    bbtu,
    highSpeedDieselFuelEmission,
    highSpeedDieselFuelTax,
    naturalGasEmission,
    naturalGasTax,
    energyCostsSavingPerMonth,
    taxSaving,
    co2EmissionReduction,
    totalSaving
  }
}
