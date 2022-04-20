// style
import "./App.css";

// project imports
import createRoutes from "./navigation/routes";

const routes = createRoutes();

function App() {
  return <div className="App">{routes}</div>;
}

export default App;
