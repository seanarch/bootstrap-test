import "./App.css";
import Button from "./component/button";
import Cards from "./component/cards";
import Grid from "./component/grid";
import Typography from "./component/typography";
import Image from "./component/image";
import Utilities from "./component/utilities";

function App() {
  return (
    <div className="App">
      <Grid />
      <Button />
      <Cards />
      <Typography />
      <Image />
      <Utilities />
    </div>
  );
}

export default App;
