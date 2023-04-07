import { PTable } from "./components/PTable";
import { SeriesLegend } from "./components/SeriesLegend";
import { Header } from "./components/Header";

function App() {
  let colorSchemeDict = {
    "alkali-metals": "green",
    "alkaline-earth-metals": "lightgreen",
    "transition-metals": "yellow",
    "post-transition-metals": "coral",
    "actinoids": "red",
    "landthaoids": "orange",
    "reactive-nonmetals": "teal",
    "metalloids": "seagreen",
    "noble-gases":"pink"

  }
  return (
    <div className="App">
        <Header></Header>
        <PTable 
          colorSchemeDict={colorSchemeDict}
          legendChild={
            <SeriesLegend 
            colorSchemeDict={colorSchemeDict}
            width="90%" 
            height="90%"></SeriesLegend>} 
          tableWidth="1000px"
          tableHeight="500px"
          ></PTable>
    </div>
  );
}

export default App;
