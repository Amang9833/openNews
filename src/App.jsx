//components import
import Navbar from "./Components/navbar/Navbar";
import News from "./Components/News/News";
import { BrowserRouter as Router, Route , Routes} from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
        <Route
          exact
          path="/all"
          index
          element={<News key={"all"} category="all" />}
        />
        <Route
          exact
          path="/national"
          element={<News key={"national"} category="national" />}
        />
        <Route
          exact
          path="/business"
          element={<News key={"business"} category="business" />}
        />
        <Route
          exact
          path="/sports"
          element={<News key={"sports"} category="sports" />}
        />
        <Route
          exact
          path="/world"
          element={<News key={"world"} category="world" />}
        />
        <Route
          exact
          path="/politics"
          element={<News key={"politics"} category="politics" />}
        />
        <Route
          exact
          path="/technology"
          element={<News key={"technology"} category="technology" />}
        />
        <Route
          exact
          path="/startup"
          element={<News key={"startup"} category="startup" />}
        />
        <Route
          exact
          path="/entertainment"
          element={<News key={"entertainment"} category="entertainment" />}
        />
        <Route
          exact
          path="/miscellaneous"
          element={<News key={"miscellaneous"} category="miscellaneous" />}
        />
        <Route
          exact
          path="/hatke"
          element={<News key={"hatke"} category="hatke" />}
        />
        <Route
          exact
          path="/science"
          element={<News key={"science"} category="science" />}
        />
        <Route
          exact
          path="/automobile"
          element={<News key={"automobile"} category="automobile" />}
        />
        
        </Routes>
      </Router>

    </div>
  );
};

export default App;
