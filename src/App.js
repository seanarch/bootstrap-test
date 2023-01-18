import "./App.css";
import Button from "./component/button";
import Cards from "./component/cards";
import Grid from "./component/grid";
import Typography from "./component/typography";
import Image from "./component/image";
import Utilities from "./component/utilities";
import Table from "./component/table";
import Alerts from "./component/alerts";

function App() {
  return (
    <div className="App">
      <Grid />
      <Button />
      <Cards />
      <Typography />
      <Image />
      <Utilities />
      <Table />
      <Alerts />
    </div>
  );
}

export default App;
