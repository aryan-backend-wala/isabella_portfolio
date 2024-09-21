import Content from "./components/Content/Content";
import NavBar from "./components/NavBar/NavBar";
import ThemeProvider from "./ThemeContext";

export default function App(){
  return (
    <ThemeProvider>
      <NavBar />
      <Content />
    </ThemeProvider>
  )
}