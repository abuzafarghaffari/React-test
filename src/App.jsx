import Container from "react-bootstrap/Container";
import "./App.css";
//import Options from './Pages/entry/Options'
import OrderEntry from "./Pages/entry/OrderEntry";
import { OrderDetailsProvider } from "./contexts/OderDetails";

function App() {
  return (
    <Container>
      <OrderDetailsProvider>
        <OrderEntry />
      </OrderDetailsProvider>
    </Container>
  );
}

export default App;
