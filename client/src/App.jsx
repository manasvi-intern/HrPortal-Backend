// ./App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Layouts/Footer';
import SettingsPage from './pages/SettingsPage';
import Home from './pages/Home';
import ProjectManagerDB from './pages/Dashboard/ProjectManagerDB';
import HRDB from './pages/Dashboard/HRDB';
import RecruiterDB from './pages/Dashboard/RecruiterDB';
import CooDB from './pages/Dashboard/CooDB';
import OfferLetterRelease from './components/Dashboard/OfferLetterRelease';
import StatusUpdate from './components/Dashboard/StatusUpdate';
import CooApproval  from './components/Dashboard/CooApproval';
import RequestForm from './pages/Forms/RequestForm'; 
import CurrentJobs from './pages/Jobs/CurrentJobs'; 
import PastJobs from './pages/Jobs/PastJobs'; 
import LevelOneFb from './pages/Forms/LevelOneFb';
import LevelTwoFb from './pages/Forms/LevelTwoFb';
import LevelThreeFb from './pages/Forms/LevelThreeFb';
import LevelFourFb from './pages/Forms/LevelFourFb';
import RecruitmentProcess from './pages/RecruitmentProcess';
import Documentation from './pages/Forms/Documentation';
import CandidateList from './pages/Jobs/CandidateList';
import ListOfCandidate from './pages/ListOfCandidates';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pm-db" element={<ProjectManagerDB />} />
        <Route path="/hr-db" element={<HRDB />} />
        <Route path="/recruiter-db" element={<RecruiterDB />} /> 
        <Route path="/coo-db" element={<CooDB />} />
        <Route path="/offer-letter-release" element={<OfferLetterRelease />} />
        <Route path="/status-update" element={<StatusUpdate />} />
        <Route path="/coo-approval" element={<CooApproval />} />
        <Route path="/request-form" element={<RequestForm />} />
        <Route path="/jobs/current-jobs" element={<CurrentJobs />} />
        <Route path="/jobs/past-jobs" element={<PastJobs />} />
        <Route path="/tracker" element={<RecruitmentProcess />} />
        <Route path="/feedback/level-one" element={<LevelOneFb />} />
        <Route path="/feedback/level-two" element={<LevelTwoFb />} />
        <Route path="/feedback/level-three" element={<LevelThreeFb />} />
        <Route path="/feedback/level-four/:candidateId" element={<LevelFourFb />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/candidate-list" element={<CandidateList />} />
        <Route path="/list-of-candidate" element={<ListOfCandidate />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
