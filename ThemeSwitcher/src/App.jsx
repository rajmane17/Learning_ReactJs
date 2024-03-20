import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './Contexts/Theme'
import Card from './Components/Card'
import ThemeBtn from './Components/ThemeBtn'

function App() {

  const [ThemeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light");
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // Actual change in theme

  useEffect(()=>{
    const CurrTheme = document.querySelector("html").classList
    CurrTheme.remove("light", "dark");
    CurrTheme.add(ThemeMode)

  }, [ThemeMode])

  return (
    <ThemeProvider value={{ThemeMode, darkTheme, lightTheme}}>
      <h1>Theme Switcher</h1>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
    </ThemeProvider>
  )
}

export default App
