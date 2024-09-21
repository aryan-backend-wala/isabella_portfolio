import NavBar from "./components/NavBar/NavBar";
import ThemeProvider from "./ThemeContext";

export default function App(){
  return (
    <ThemeProvider>
      <div className="app">
        <NavBar />
      </div>
    </ThemeProvider>
  )
}