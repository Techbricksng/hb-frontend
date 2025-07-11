// src/App.tsx
import { ErrorBoundary } from 'react-error-boundary';
import { Routes, Route } from 'react-router-dom';
import SignUpSeller from './pages/SignUp.tsx';
import SignIn from './pages/SignIn.tsx';
import OTPVerification from './pages/OTPVerification.tsx';
import SignUpBuyer from './pages/SignUpBuyer.tsx';
import SignUpUser from './pages/SignUpUser.tsx';
import { AuthProvider } from './context/AuthContext.tsx';
import { AuthLayout, Layout } from './components/Layout.tsx';
import NotFound from './components/404.tsx';

const App = () => {
  return (
    <AuthProvider>
      <ErrorBoundary fallback={<div>Error! Check console</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
          <Route element={<AuthLayout />}>
            <Route path="/signup-seller" element={<SignUpSeller />} />
            <Route path="/signup-buyer" element={<SignUpBuyer />} />
            <Route path="/signup" element={<SignUpUser />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/verify-otp" element={<OTPVerification />} />
          </Route>
          {/*Secure routes here*/}
          <Route element={<Layout />}>
            <Route path="/landing" element={<HomePage />} />
          </Route>
        </Routes>
      </ErrorBoundary>
    </AuthProvider>
  );
};

const HomePage = () => (
  <div className="p-8 bg-[color:var(--color-bg)]">
    <h1 className="text-5xl font-black">Welcome to HOUSEBANK</h1>
    <p className="text-2xl font-light">Let's get started.</p>
  </div>
);

export default App;
