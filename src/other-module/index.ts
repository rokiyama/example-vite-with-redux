import { useCallback } from "react"

export const useGreet = () => {
  const greet = useCallback(() => "Hello", [])
  return {
    greet,
  }
}
