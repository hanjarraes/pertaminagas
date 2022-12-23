export const fuels = [
  // DONE but need tons comparation
  {
    name: 'COAL',
    title: 'Coal',
    image: require('assets/img/fuels/coal.png'),
    units: ['Rupiah', 'Tons'],
    price: 4388428,
    naturalGas: 575,
    co2Emission: 2419,
  },
  // DONE
  {
    name: 'LPG_50KG',
    title: 'LPG 50Kg',
    image: require('assets/img/fuels/lpg-50kg.png'),
    units: ['Rupiah', 'Tank'],
    price: 367750,
    naturalGas: 63.25,
    co2Emission: 153.0,
  },
  // DONE
  {
    name: 'LPG_BULK',
    title: 'LPG Bulk',
    image: require('assets/img/fuels/lpg-bulk.png'),
    units: ['Rupiah', 'Kg'],
    price: 17750,
    naturalGas: 1.265,
    co2Emission: 3.06,
  },
  // DONE
  {
    name: 'HSD',
    title: 'HSD/Industrial Diesel',
    image: require('assets/img/fuels/hsd.png'),
    units: ['Rupiah', 'Liter'],
    price: 24450,
    naturalGas: 1.022,
    co2Emission: 2.68,
  },
  // DONE
  {
    name: 'MFO',
    title: 'MFO',
    image: require('assets/img/fuels/mfo.png'),
    units: ['Rupiah', 'Liter'],
    price: 19500,
    naturalGas: 1.045,
    co2Emission: 3.2,
  },
]

export function calculateEnergy(
  name: string,
  unit: string,
  usageValue: number
): any | undefined {
  const target = fuels.find((fuel) => fuel.name === name)

  if (!target) {
    return undefined
  }

  const BASE_NATURAL_GAS_PRICE: number = 5265
  const BASE_NATURAL_GAS_CO2_EMISSION: number = 1.9
  const MMBTU_CONVERSION: number = 28.5
  const BBTU_CONVERSION: number = 1000
  const FUEL_CONVERSION: number = 1000
  const NATURAL_GAS_CO2_EMISSION_CONVERSION: number = 1000
  const TAX_MULTIPLIER: number = 30000

  let volume: number = 0
  let volumeM3: number = 0

  let naturalGasCosts: number = 0
  let mmbtu: number = 0
  let bbtu: number = 0

  let fuelEmission: number = 0
  let fuelTax: number = 0
  let naturalGasEmission: number = 0
  let naturalGasTax: number = 0

  let energyCostsSavingPerMonth: number = 0
  let taxSaving: number = 0
  let co2EmissionReduction: number = 0

  if (unit === 'Rupiah') {
    volume = Number(usageValue / target.price)
    volumeM3 = Number(volume * target.naturalGas)
    naturalGasCosts = Number(volumeM3 * BASE_NATURAL_GAS_PRICE)
    fuelEmission = (volume * target.co2Emission) / FUEL_CONVERSION
    energyCostsSavingPerMonth = usageValue - naturalGasCosts
  } else {
    volume = Number(usageValue * target.price)
    volumeM3 = Number(usageValue * target.naturalGas)
    naturalGasCosts = Number(volumeM3 * BASE_NATURAL_GAS_PRICE)
    //   ! 1a. add fuel conversion (/ FUEL_CONVERSION) if (LPG 50KG Tank, LPG Bulk)?
    fuelEmission = usageValue * target.co2Emission
    energyCostsSavingPerMonth = volume - naturalGasCosts
  }

  //   B. Penggunaan Bahan bakar eksiting Anda setara dengan penggunaan gas bumi senilai
  mmbtu = Number(volumeM3 / MMBTU_CONVERSION)
  bbtu = Number(mmbtu / BBTU_CONVERSION)

  console.log(volume)

  console.log(naturalGasCosts)
  console.log(volumeM3)
  console.log(mmbtu)
  console.log(bbtu)

  //   C. Jumlah Emisi Karbon & Pajak Karbon
  naturalGasEmission =
    (volumeM3 * BASE_NATURAL_GAS_CO2_EMISSION) /
    NATURAL_GAS_CO2_EMISSION_CONVERSION
  fuelTax = fuelEmission * TAX_MULTIPLIER
  naturalGasTax = naturalGasEmission * TAX_MULTIPLIER

  // ! 1b. impacted to here
  console.log(fuelEmission)
  // ! 1c. impacted to here
  console.log(fuelTax)
  console.log(naturalGasEmission)
  console.log(naturalGasTax)

  //   D. Kesimpulan
  taxSaving = fuelTax - naturalGasTax
  co2EmissionReduction = fuelEmission - naturalGasEmission
  const totalSaving = Math.ceil(energyCostsSavingPerMonth + taxSaving)

  console.log(energyCostsSavingPerMonth)
  // ! 1d. impacted to here
  console.log(taxSaving)
  // ! 1e. impacted to here
  console.log(co2EmissionReduction)
  // ! 1f. impacted to here
  console.log(totalSaving)

  return {
    volume,
    volumeM3,
    naturalGasCosts,
    mmbtu,
    bbtu,
    fuelEmission,
    fuelTax,
    naturalGasEmission,
    naturalGasTax,
    energyCostsSavingPerMonth,
    taxSaving,
    co2EmissionReduction,
    totalSaving,
  }
}

calculateEnergy('MFO', 'Liter', 15000000)
