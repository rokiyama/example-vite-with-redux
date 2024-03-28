import "./App.css"
import { useGetUserQuery } from "./app/api"
import logo from "./logo.svg"

const App = () => {
  const { data } = useGetUserQuery({ id: 1 })
  const user = data?.data

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{user && `${user.first_name} ${user.last_name}`}</p>
      </header>
    </div>
  )
}

export default App
