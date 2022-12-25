import { ReactElement } from 'react'
import { CalculateEnergyResultUI } from '../utils/fuel'

export type EnergyUsage = {
  name: string | undefined
  title: string | undefined
  usageValue: number | undefined
  unit: string | undefined
}

export type EnergyUsageSchema = {
  fuels: string[]
  energyUsages: EnergyUsage[]
}

export type LocationSchema = {
  location:
    | {
        lat: number | undefined
        lng: number | undefined
        address: string | undefined
      }
    | undefined
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
  LocationSchema &
  InstallationLocationSchema &
  CompanyFormSchema

export type FormStep = {
  renderer: ReactElement
  image?: any
}

export type ResultRouteState = {
  formData: FormSchema
  calculatorResult: CalculateEnergyResultUI
}
