import { Outlet } from "react-router-dom";
import Nav from "components/Nav";
import Footer from "components/Footer";
import GlobalStyle from "components/GlobalStyle";
import { UserIdProvider } from "contexts/UserIdContext";
import UserIdSelect from "components/UserIdSelect";

function App() {
  return (
    <UserIdProvider defalutValue={-1}>
      <GlobalStyle />
      <Nav />
      <UserIdSelect />
      <Outlet />
      <Footer />
    </UserIdProvider>
  );
}

export default App;