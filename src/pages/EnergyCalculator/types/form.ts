import { ReactElement } from 'react'

export type EnergyUsageSchema = {
  fuels: string[]
  energyUsages: {
    name: string | undefined
    usageValue: number | undefined
    unit: string | undefined
  }[]
}

export type CompanyFormSchema = {
  phone: string | undefined
  email: string | undefined
}

export type FormSchema = EnergyUsageSchema & CompanyFormSchema

export type FormStep = {
  renderer: ReactElement
  image?: any
}
