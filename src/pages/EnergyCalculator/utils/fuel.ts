import { EnergyUsage } from '../types/form'
import { getNumberFormat } from './currency'

export const fuels = [
  {
    name: 'COAL',
    title: 'Coal',
    image: require('assets/img/fuels/coal.png'),
    units: ['Rupiah', 'Tons'],
    price: 4391369,
    naturalGas: 575,
    co2Emission: 2419,
  },
  {
    name: 'LPG_50KG',
    title: 'LPG 50 Kg',
    image: require('assets/img/fuels/lpg-50kg.png'),
    units: ['Rupiah', 'Tank'],
    price: 367750,
    naturalGas: 63.25,
    co2Emission: 153.0,
  },
  {
    name: 'LPG_BULK',
    title: 'LPG Bulk',
    image: require('assets/img/fuels/lpg-bulk.png'),
    units: ['Rupiah', 'Kg'],
    price: 17750,
    naturalGas: 1.265,
    co2Emission: 3.06,
  },
  {
    name: 'HSD',
    title: 'HSD/Industrial Diesel',
    image: require('assets/img/fuels/hsd.png'),
    units: ['Rupiah', 'Liter'],
    price: 24450,
    naturalGas: 1.022,
    co2Emission: 2.68,
  },
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

// For bar chart purpose
export const getEnergyUsageLabels = (energyUsages: EnergyUsage[]): string[] => {
  return energyUsages.map((item, i) => {
    const withText = i === 0 ? 'with' : ''
    const commaText = i !== energyUsages.length - 1 ? ',' : ''
    const formattedValue = getNumberFormat({
      value: item.usageValue ?? 0,
      style: item.unit === 'Rupiah' ? 'currency' : undefined,
    })

    return `${withText} ${formattedValue} ${item.unit} of ${item.title}${commaText}`
  })
}

export type CalculateEnergyParams = {
  name: string
  unit: string
  usageValue: number
}

export type SelectedFuel = {
  name: string
  unit: string
  amount: number
  naturalGasVolume: number
}

export type CalculateEnergyResultUI = {
  selectedFuels: SelectedFuel[]
  currentExpenditurePerYear: number
  naturalGasExpenditurePerYear: number
  fuelTaxPerYear: number
  totalSavingPercentage: number
  totalSavingPerYear: number
  fuelEmissionPerYear: number
  naturalGasEmissionPerYear: number
  co2EmissionReductionPercentage: number
  co2EmissionReductionPerYear: number
}
export type CalculateEnergyResult = {
  volume: number
  volumeM3: number
  naturalGasCosts: number
  mmbtu: number
  bbtu: number
  fuelEmission: number
  fuelTax: number
  naturalGasEmission: number
  naturalGasTax: number
  energyCostsSavingPerMonth: number
  taxSaving: number
  co2EmissionReduction: number
  totalSaving: number
} & CalculateEnergyResultUI

// If result data is not a real percentage, you can change it to 100
const PERCENTAGE: number = 1

export function calculateEnergy({
  name,
  unit,
  usageValue,
}: CalculateEnergyParams): CalculateEnergyResult | undefined {
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
  const YEAR_IN_MONTHS: number = 12

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
    fuelEmission = (usageValue * target.co2Emission) / FUEL_CONVERSION
    energyCostsSavingPerMonth = volume - naturalGasCosts
  }

  //   B. Penggunaan Bahan bakar eksiting Anda setara dengan penggunaan gas bumi senilai
  mmbtu = Number(volumeM3 / MMBTU_CONVERSION)
  bbtu = Number(mmbtu / BBTU_CONVERSION)

  // console.log(volume)

  // console.log(naturalGasCosts)
  // console.log(volumeM3)
  // console.log(mmbtu)
  // console.log(bbtu)

  //   C. Jumlah Emisi Karbon & Pajak Karbon
  naturalGasEmission =
    (volumeM3 * BASE_NATURAL_GAS_CO2_EMISSION) /
    NATURAL_GAS_CO2_EMISSION_CONVERSION
  fuelTax = fuelEmission * TAX_MULTIPLIER
  naturalGasTax = naturalGasEmission * TAX_MULTIPLIER

  // console.log(fuelEmission)
  // console.log(fuelTax)
  // console.log(naturalGasEmission)
  // console.log(naturalGasTax)

  //   D. Kesimpulan
  taxSaving = fuelTax - naturalGasTax
  co2EmissionReduction = fuelEmission - naturalGasEmission
  const totalSaving = Math.ceil(energyCostsSavingPerMonth + taxSaving)

  // console.log(energyCostsSavingPerMonth)
  // console.log(taxSaving)
  // console.log(co2EmissionReduction)
  // console.log(totalSaving)

  /* -------------------------------- UI RESULT ------------------------------- */

  let currentExpenditurePerYear = 0
  let totalSavingPercentage = 0

  if (unit === 'Rupiah') {
    currentExpenditurePerYear = usageValue * YEAR_IN_MONTHS
    totalSavingPercentage = (totalSaving / (usageValue + fuelTax)) * PERCENTAGE
  } else {
    currentExpenditurePerYear = volume * YEAR_IN_MONTHS
    totalSavingPercentage = (totalSaving / (volume + fuelTax)) * PERCENTAGE
  }

  // UI 1
  //! If unit is not rupiah, seems doesnt make sense
  const naturalGasExpenditurePerYear = naturalGasCosts * YEAR_IN_MONTHS

  // console.log(currentExpenditurePerYear)
  // console.log(naturalGasExpenditurePerYear)

  // UI 2
  const fuelTaxPerYear = fuelTax * YEAR_IN_MONTHS
  const totalSavingPerYear = totalSaving * YEAR_IN_MONTHS

  // console.log(fuelTaxPerYear)
  // console.log(totalSavingPercentage)
  // console.log(totalSavingPerYear)

  // UI 3
  const fuelEmissionPerYear = fuelEmission * YEAR_IN_MONTHS
  const naturalGasEmissionPerYear = naturalGasEmission * YEAR_IN_MONTHS

  // console.log(fuelEmissionPerYear)
  // console.log(naturalGasEmissionPerYear)

  // UI 4
  const co2EmissionReductionPercentage =
    (co2EmissionReduction / fuelEmission) * PERCENTAGE
  const co2EmissionReductionPerYear = co2EmissionReduction * YEAR_IN_MONTHS

  // console.log(co2EmissionReductionPercentage)
  // console.log(co2EmissionReductionPerYear)

  // For Leads purpose
  const selectedFuels: SelectedFuel[] = []
  selectedFuels.push({
    name: target.title,
    unit,
    amount: unit === 'Rupiah' ? volume : usageValue,
    naturalGasVolume: volumeM3,
  })

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
    selectedFuels,
    currentExpenditurePerYear,
    naturalGasExpenditurePerYear,
    fuelTaxPerYear,
    totalSavingPercentage,
    totalSavingPerYear,
    fuelEmissionPerYear,
    naturalGasEmissionPerYear,
    co2EmissionReductionPercentage,
    co2EmissionReductionPerYear,
  }
}

//   calculateEnergy({
//     name: 'LPG_50KG',
//     unit: 'Tank',
//     usageValue: 15000000
//   })

export function calculateEnergies(
  data: CalculateEnergyParams[]
): CalculateEnergyResultUI {
  let selectedFuels: SelectedFuel[] = []

  let currentExpenditurePerYear = 0
  let naturalGasExpenditurePerYear = 0

  let totalSavingPercentage = 0
  let fuelTaxPerYear = 0
  let totalSavingPerYear = 0

  let fuelEmissionPerYear = 0
  let naturalGasEmissionPerYear = 0

  let co2EmissionReductionPercentage = 0
  let co2EmissionReductionPerYear = 0

  data.forEach((item) => {
    const result = calculateEnergy(item)
    if (result) {
      selectedFuels.push(...result.selectedFuels)

      currentExpenditurePerYear += result.currentExpenditurePerYear
      naturalGasExpenditurePerYear += result.naturalGasExpenditurePerYear

      fuelTaxPerYear += result.fuelEmissionPerYear
      totalSavingPerYear += result.totalSavingPerYear

      fuelEmissionPerYear += result.fuelEmissionPerYear
      naturalGasEmissionPerYear += result.naturalGasEmissionPerYear

      co2EmissionReductionPerYear += result.co2EmissionReductionPerYear
    }
  })

  totalSavingPercentage =
    (totalSavingPerYear / (currentExpenditurePerYear + fuelTaxPerYear)) *
    PERCENTAGE

  co2EmissionReductionPercentage =
    (co2EmissionReductionPerYear / fuelEmissionPerYear) * PERCENTAGE

  // console.log(currentExpenditurePerYear)
  // console.log(naturalGasExpenditurePerYear)

  // console.log(totalSavingPercentage)
  // console.log(totalSavingPerYear)

  // console.log(fuelEmissionPerYear)
  // console.log(naturalGasEmissionPerYear)

  // console.log(co2EmissionReductionPercentage)
  // console.log(co2EmissionReductionPerYear)

  return {
    selectedFuels,
    currentExpenditurePerYear,
    naturalGasExpenditurePerYear,
    totalSavingPercentage,
    fuelTaxPerYear,
    totalSavingPerYear,
    fuelEmissionPerYear,
    naturalGasEmissionPerYear,
    co2EmissionReductionPercentage,
    co2EmissionReductionPerYear,
  }
}

// const examples: CalculateEnergyParams[] = [
//   {
//     name: 'HSD',
//     unit: 'Rupiah',
//     usageValue: 15000000,
//   },
//   {
//     name: 'COAL',
//     unit: 'Rupiah',
//     usageValue: 15000000,
//   },
// ]

// calculateEnergies(examples)
