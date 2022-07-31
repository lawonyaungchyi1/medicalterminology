import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Header from "./components/Header";
import Content from "./components/Content";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />
        <Content />
      </Container>
    </>
  );
};

export default App;
