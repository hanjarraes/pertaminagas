import { ReactElement } from 'react'

export type EnergyUsageSchema = {
  fuels: string[]
  energyUsages: {
    name: string | undefined
    usageValue: number | undefined
    unit: string | undefined
  }[]
}

export type InstallationLocationSchema = {
  buildingCondition: string | undefined
}

export type CompanyFormSchema = {
  companyName: string | undefined
  name: string | undefined
  phone: string | undefined
  email: string | undefined
  businessType: string | undefined
}

export type FormSchema = EnergyUsageSchema &
  InstallationLocationSchema &
  CompanyFormSchema

export type FormStep = {
  renderer: ReactElement
  image?: any
}
