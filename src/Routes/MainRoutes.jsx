import React from 'react'
import DashboardLayout from '../layout/DashboardLayout'
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from '../pages/Dashboard';
import MemberDossierForm from '../pages/Member/MemberDossierForm';
import MissingMemberFilter from '../pages/Report'
import FestivalGreetingPage from '../pages/Greeting'
import GuarantorPage from '../pages/Guarantor/Guarantor';
import FamilyDetails from '../pages/Family/FamilyDetails.jsx'
import Witness from '../pages/Witness/Witness.jsx'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/society" element={<MemberDossierForm />} />
        <Route path="/report" element={<MissingMemberFilter />} />
        <Route path="/greeting" element={<FestivalGreetingPage />} />
        <Route path="/guarantor" element={<GuarantorPage />} />
        <Route path="/familyDetails" element={<FamilyDetails/>}/>
        <Route path="/witness" element={<Witness />} />
      </Route>
    </Routes>

  )
}

export default MainRoutes
