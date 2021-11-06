import './App.css';
 import { Provider } from "react-redux";
import { AppRouter } from "./routers/AppRouter";
import { Store } from "./store/Store"; 

function App() {
  return (
    <Provider store={Store}>
      <AppRouter />
    </Provider>
    
  );
}

export default App;
