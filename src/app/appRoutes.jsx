import { Routes, Route, Navigate } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import { MainLayout } from '../layouts//main-layout/main-layout';
import { HomePage } from '../pages/home-page/home-page';
import { ResultsPage } from '../pages/results-page/results-page';
import { BookingPage } from '../pages/booking-page/booking-page';
import { SuccessPage } from '../pages/success-page/success-page';
import { TripsPage } from '../pages/trips-page/trips-page';
import { TrackingPage } from '../pages/tracking-page/tracking-page';
import { CompaniesPage } from '../pages/companies-page/companies-page';
import { AuthPage } from '../pages/auth-page/auth-page';
import { AccountPage } from '../pages/account-page/account-page';
import { AboutPage } from '../pages/about-page/about-page';
import { SupportPage } from '../pages/support-page/support-page';

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path="/home" element={<Navigate to={ROUTES.HOME} replace />} />
        <Route path={ROUTES.RESULTS} element={<ResultsPage />} />
        <Route path={ROUTES.BOOKING} element={<BookingPage />} />
        <Route path={ROUTES.SUCCESS} element={<SuccessPage />} />
        <Route path={ROUTES.TRIPS} element={<TripsPage />} />
        <Route path={ROUTES.TRACKING} element={<TrackingPage />} />
        <Route path={ROUTES.COMPANIES} element={<CompaniesPage />} />
        <Route path={ROUTES.LOGIN} element={<AuthPage mode="login" />} />
        <Route path={ROUTES.REGISTER} element={<AuthPage mode="register" />} />
        <Route path={ROUTES.ACCOUNT} element={<AccountPage />} />
        <Route path={ROUTES.ABOUT} element={<AboutPage />} />
        <Route path={ROUTES.SUPPORT} element={<SupportPage />} />
        <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
      </Route>
    </Routes>
  );
}
