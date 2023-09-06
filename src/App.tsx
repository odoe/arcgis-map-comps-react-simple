import { ArcgisLegend, ArcgisMap } from "@arcgis/map-components-react";

function App() {
  return (
    <ArcgisMap
      className="h-full w-full"
      itemId="f0a65cdcf362483fa268a30d62eed4a2"
      onViewReady={() => console.log("View Ready")}
    >
      <ArcgisLegend position="bottom-left" legendStyle="card" />
    </ArcgisMap>
  );
}

export default App;
