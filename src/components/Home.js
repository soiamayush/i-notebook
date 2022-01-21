import Notes from "./Notes";
import Addnote from "./Addnote";
import "./Home.css"


export const Home = (props) => {
  const { showAlert } = props;
  return (
    <div className="homecontainer " >
      <Addnote showAlert={showAlert} />

      <Notes showAlert={showAlert}/>

      </div>
  );
};
