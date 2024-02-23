import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNavbar from './Components/MainNavbar';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import LoginComponent from './Components/LoginComponent';
import AddTeamForm from './Components/AddTeamForm';
import StartTournament from './Components/StartTournament';
import Match from './Components/Match';
import ShowMatches from './Components/ShowMatches';

import KabaddiInfo from './Components/KabaddiInfo';


function App() {
  return (
    <div className='App-header'>      
      <BrowserRouter>
        <Routes>
          <Route index element = {<LoginComponent/>}/>
          <Route path = "/login" element = {<LoginComponent/>}/>
          <Route path = "/main" element = {<MainNavbar/>}/>
          <Route path = "/addteam" element = {<AddTeamForm/>}/>
          {/* <Route path = "/makenewteam" element = {<RegisterNewTeam/>}/> */}
          <Route path = "/starttour" element = {<StartTournament/>}/>
          <Route path = "/match" element = {<Match/>}/>
          <Route path = "/showmatches" element = {<ShowMatches/>}/>
          <Route path = "/kabaddiinfo" element = {<KabaddiInfo/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
