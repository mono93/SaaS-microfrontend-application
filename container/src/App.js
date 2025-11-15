import React from "react";
import { BrowserRouter } from "react-router-dom";
import MarketingApp from "./components/MarketingApp";
import Headers from "./components/Header";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

const generateClassName = createGenerateClassName({ productionPrefix: "co" });

function App() {
  return (
    <BrowserRouter>
      <div>
        <StylesProvider generateClassName={generateClassName}>
          <Headers />
          <MarketingApp />
        </StylesProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
