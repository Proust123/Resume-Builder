import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Skill from './components/Skill';
import Summary from './components/Summary';
import Last from './components/Last';
import CVLayout from './components/CVLayout';
import User from './components/User'
import Experience from './components/Experience';
import Education from './components/Education'
import AllCVs from './components/AllCVs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element = {<User />}/>
        <Route path='/experience' element = {<Experience />}/>
        <Route path='/education' element = {<Education />}/>
        <Route path='/skill' element={<Skill />} />
        <Route path='/summary' element={<Summary />} />
        <Route path='/last' element={<Last />} />
        <Route path='/cv' element={<CVLayout />} />
        <Route path='/allcvs' element={<AllCVs />} />
      </Routes>
    </Router>
  );
}

export default App;