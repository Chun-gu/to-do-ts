import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import { darkTheme, lightTheme } from "./theme";
import ToDoList from "./ToDoList";

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
