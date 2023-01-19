import "./App.css";
import Button from "./component/button";
import Cards from "./component/cards";
import Grid from "./component/grid";
import Typography from "./component/typography";
import Image from "./component/image";
import Utilities from "./component/utilities";
import Table from "./component/table";
import Alerts from "./component/alerts";
import NavbarTest from "./component/navbar";
import OtherComponent from "./component/otherComponent";
import Landing from "./landing/landing";
import BodyPart from "./landing/bodyPart";
import SubmitForm from "./landing/submitForm";
import FooterSection from "./landing/footerSection";

function App() {
  return (
    <div className="App">
      <Landing />
      <BodyPart />
      <SubmitForm />
      <FooterSection />
    </div>
  );
}

export default App;
