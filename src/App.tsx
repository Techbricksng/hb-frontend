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
import HomePage from './pages/HomePage.tsx';
import ExplorePage from './pages/ExplorePage.tsx';

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
          <Route path="/" element={<HomePage />} />
          <Route path="/explore" element={<ExplorePage />} />
          {/* <Route path="/investment" element={<InvestmentPage />} />
          <Route path="/help-center" element={<HelpCenterPage />} />
          <Route path="/blogs" element={<BlogsPage />} />  */}
        </Routes>
      </ErrorBoundary>
    </AuthProvider>
  );
};


export default App;
