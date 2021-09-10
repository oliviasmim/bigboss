import GlobalStyle from "./styles/global";
import Routes from "./routes";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./styles/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </>
  );
}

export default App;
