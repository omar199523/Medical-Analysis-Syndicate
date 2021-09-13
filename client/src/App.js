import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './componants/Header';
import NewMember from './pages/NewMember';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ConectUs from './pages/ConectUs';
import FileUpload from './componants/FileUpload';
import Data from './componants/Data';

function App() {
  // const [admin, setAdmin] = useState(true);

  // useEffect(() => {
  //   setAdmin(true);
  // });
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/NewMember" component={NewMember} />
          <Route path="/FileUpload" component={FileUpload} />
          <Route path="/AboutUs" component={AboutUs} />
          <Route path="/ConectUs" component={ConectUs} />
          <Route path="/Data" component={Data} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
