// src/App.tsx
import { ErrorBoundary } from 'react-error-boundary';
import { Routes, Route, Navigate } from 'react-router-dom';
import SignUpSeller from './auth/SignUp';
import SignIn from './auth/SignIn';
import OTPVerification from './auth/OTPVerification';
import SignUpBuyer from './auth/SignUpBuyer';
import SignUpUser from './auth/SignUpUser';

const App = () => {
  return (
    <ErrorBoundary fallback={<div>Error! Check console</div>}>
      <Routes>
        <Route path="/signup-seller" element={<SignUpSeller />} />
        <Route path="/signup-buyer" element={<SignUpBuyer />} />
        <Route path="/signup" element={<SignUpUser />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/verify-otp" element={<OTPVerification />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </ErrorBoundary>
  );
};

const HomePage = () => (
  <div className="p-8 bg-[color:var(--color-bg)]">
    <h1 className="text-5xl font-black">Welcome to HOUSEBANK</h1>
    <p className="text-2xl font-light">Let's get started.</p>
  </div>
);

export default App;