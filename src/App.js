import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import PrivateRoute from './routes/PrivateRoute';

import Dashboard from './components/admin/Dashboard';
import ClientDetails from './components/admin/client/ClientDetails';
import ClientList from './components/admin/client/ClientList';
import EmployeeDetails from './components/admin/employee/EmployeeDetails';
import EmployeeList from './components/admin/employee/EmployeeList';
import AddMHEmployee from './components/admin/mhEmployee/AddMHEmployee';
import EditMHEmployee from './components/admin/mhEmployee/EditMHEmployee';
import Position from './components/admin/position/Position';
import Skill from './components/admin/skill/Skill';
import Source from './components/admin/source/Source';
import AdminLogin from './components/frontend/auth/AdminLogin';
import EmployeeRegister from './components/frontend/auth/EmployeeRegister';
import EmployeeRegisterWelcome from './components/frontend/profile/EmployeeRegisterWelcome';
import Register from './components/frontend/register/Register';
import MasterLayout from './layouts/admin/MasterLayout';

//For client
import ViewCertificate from './components/admin/employee/ViewCertificate';
import MHEmployeeList from './components/admin/mhEmployee/MHEmployeeList';
import ClientEmployeeList from './components/client/employee/EmployeeList';
import Home from './components/frontend/Home/Home';
import About from './components/frontend/about/About';
import ClientDashboard from './components/frontend/dashboard/ClientDashboard';
import Login from './components/frontend/login/Login';
import Places from './components/frontend/map/Places';
import ClientMasterLayout from './layouts/frontend/ClientMasterLayout';
// import Career from './components/frontend/career/Career';
import { useEffect } from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import ShortList from './components/client/ShortList/ShortList';
import JobOpportunities from './components/frontend/career/JobOpportunities';
import MyEmployee from './components/frontend/client/MyEmployee';
import Contract from './components/frontend/contract/Contract';
import Customers from './components/frontend/customers/Customers';
import EmployeeViewDetails from './components/frontend/dashboard/EmployeeViewDetails';
import Faq from './components/frontend/faq/Faq';
import CorporateInformation from './components/frontend/legal/CorporateInformation';
import Privacy from './components/frontend/legal/Privacy';
import TermsOfUse from './components/frontend/legal/TermsOfUse';
import MeetTheTeam from './components/frontend/meet-the-team/MeetTheTeam';
import Mission from './components/frontend/mission/Mission';
import Payroll from './components/frontend/services/Payroll';
import Recruiting from './components/frontend/services/Recruiting';
import StrategyConsultancy from './components/frontend/services/StrategyConsultancy';
import DashboardLayout from './layouts/frontend/dashboard/DashboardLayout';


function App() {

const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');

useEffect(() => {
  localStorage.setItem('language', language);
  const storedLanguage = localStorage.getItem('language');
}, [language]);

// console.log('lg', language)

 
  return (
    <div className="App">


      <Router>
        <Routes>

          <Route path='/admin-login' element={<AdminLogin />} />
          <Route path='/login' element={<Login setLanguage={setLanguage} language={language} />} />
          <Route path='/register' element={<Register />} />
          <Route path='/employee-register' element={<EmployeeRegister />} />
          <Route path='/employee-welcome' element={<EmployeeRegisterWelcome />} />

          <Route path="/" element={<DashboardLayout />} >
            <Route index path='client-dashboard' element={<ClientDashboard />} />
            <Route path='client-myemployee' element={<MyEmployee />} />
            <Route path='employee-view-details/:id' element={<EmployeeViewDetails />} />
          </Route>

          <Route path="/" element={<ClientMasterLayout setLanguage={setLanguage} language={language}/>} >
            <Route index path='/' element={<Home language={language}/>} />
            <Route path='/about' element={<About />} />
            <Route path='/short-list' element={<ShortList />} />
            {/* <Route path='/customer' element={<Customer />} /> */}
            <Route path='/job-opportunities' element={<JobOpportunities />} />
            <Route path='/corporate-information' element={<CorporateInformation />} />
            <Route path='/terms-of-use' element={<TermsOfUse />} />
            <Route path='/privacy' element={<Privacy />} />
            <Route path='/mission' element={<Mission />} />
            <Route path='/meet-the-team' element={<MeetTheTeam />} />
            <Route path='/faq' element={<Faq />} />
            <Route path='/contract' element={<Contract />} />
            <Route path='/customers' element={<Customers />} />
            <Route path='/payroll-services' element={<Payroll />} />
            <Route path='/recruiting-services' element={<Recruiting />} />
            <Route path='/strategy-consultancy-services' element={<StrategyConsultancy />} />
          </Route>


          {/* Google Map */}
          <Route path='/google-map-view' element={<Places />} />

          {/* admin routes here */}
          <Route path="/admin" element={<MasterLayout />} >

            <Route index path='dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path='position' element={<PrivateRoute><Position /></PrivateRoute>} />
            <Route path='skill' element={<PrivateRoute><Skill /></PrivateRoute>} />
            <Route path='source' element={<PrivateRoute><Source /></PrivateRoute>} />
            <Route path='employee-list' element={<PrivateRoute><EmployeeList /></PrivateRoute>} />
            <Route path='employee-details/:id' element={<PrivateRoute><EmployeeDetails /></PrivateRoute>} />
            <Route path='view-certificate/:id' element={<PrivateRoute><ViewCertificate /></PrivateRoute>} />
            <Route path='client-list' element={<PrivateRoute><ClientList /></PrivateRoute>} />
            <Route path='client-details/:id' element={<PrivateRoute><ClientDetails /></PrivateRoute>} />

            {/* mh employee register from admin route here */}
            <Route path='add-mh-employee' element={<PrivateRoute><AddMHEmployee /></PrivateRoute>} />
            <Route path='mh-employee-list' element={<PrivateRoute><MHEmployeeList /></PrivateRoute>} />
            <Route path='edit-mh-employee/:id' element={<PrivateRoute><EditMHEmployee /></PrivateRoute>} />

          </Route>

          {/* for client routes */}
          <Route path="/client" element={<ClientMasterLayout />} >
            <Route path='employee-list' element={<PrivateRoute><ClientEmployeeList /></PrivateRoute>} />
          </Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;