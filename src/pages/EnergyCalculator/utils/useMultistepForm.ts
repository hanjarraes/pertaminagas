import { ReactElement, useState } from 'react'
import { FormStep } from '../types/form'

export function useMultistepForm(steps: FormStep[]) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)

  function back() {
    setCurrentStepIndex(i => {
      if (i <= 0) return i
      return i - 1
    })
  }

  function next() {
    setCurrentStepIndex(i => {
      if (i >= steps.length - 1) return i
      return i + 1
    })
  }

  function goTo(index: number) {
    setCurrentStepIndex(index)
  }

  return {
    steps,
    currentStepIndex,
    currentStep: steps[currentStepIndex],
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    percentage: Math.floor(((currentStepIndex + 1) / steps.length) * 100),
    goTo,
    back,
    next
  }
}
