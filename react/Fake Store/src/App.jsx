import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-blue/theme.css"
import "primeflex/themes/primeone-light.css";
import Paths from "./routes/Paths";
import { AuthContext } from "./contexts/AuthContext";


const App = () => {

  return (
    <>
      <AuthContext>
        <Paths />
      </AuthContext>
    </>
  );
}

export default App;