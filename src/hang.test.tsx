import { useCallback, useEffect } from "react"
import { useLazyGetUserQuery } from "./app/api"
import { renderWithProviders } from "./utils/test-utils"

const useGreet = () => {
  const greet = useCallback(() => "Hello", [])
  return {
    greet,
  }
}

const useMyQuery = () => {
  const { greet } = useGreet()
  const [trigger] = useLazyGetUserQuery()

  const fetchEvents = useCallback(() => {
    void trigger({ id: 1 })
    console.info(greet())
  }, [greet, trigger])

  useEffect(() => {
    void fetchEvents()
  }, [fetchEvents])

  return {}
}

const TestComponent = () => {
  useMyQuery()
  return <></>
}

it("this test case hangs Vitest", () => {
  renderWithProviders(<TestComponent />)
})
