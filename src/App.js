/*import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import page from "./pages/page1";

const App = () => {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={page} />
      </Switch>
    </Router>
  ); 
};

export default App;*/
/*import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import page from "./pages/page1";

const App = () => {
  return (
    <Router>
      <Routes>
          <Route exact path="/" component={page} />
      </Routes>
    </Router>
  );
};

export default App;*/
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page1 from "./pages/page1"; // Assurez-vous d'importer le composant correctement

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page1 />} /> {/* Utilisez le composant Page1 */}
      </Routes>
    </Router>
  );
};

export default App;


