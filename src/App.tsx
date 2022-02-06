import { ThemeProvider } from "styled-components";
import GlobalStyle from "./style/GlobalStyle";
import { darkTheme, lightTheme } from "./style/theme";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <ToDoList />
      </ThemeProvider>
    </>
  );
}

export default App;
