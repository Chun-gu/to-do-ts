import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./style/theme";
import GlobalStyle from "./style/GlobalStyle";
import ToDo from "./components/ToDo";

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <ToDo />
      </ThemeProvider>
    </>
  );
}

export default App;
