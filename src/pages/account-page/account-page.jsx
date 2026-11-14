import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { useAuthStore } from "../../store/use-auth-store";
import { useToastStore } from "../../store/use-toast-store";
import { Container } from "../../layouts/container/container";
import { PageBanner } from "../../components/shared/page-banner/page-banner";
import { EmptyStateCard } from "../../components/shared/empty-state-card/empty-state-card";
import { SairnaIcon } from "../../components/ui/sairna-icon";
import { buttonVariants } from "../../components/ui/button";
import { AccountContentSection } from "./sections/account-content-section/account-content-section";
import { useMyBookingsQuery } from "../../hooks/use-bookings-query";

export function AccountPage() {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const { data: bookings = [], isLoading, isError } = useMyBookingsQuery();
  const showToast = useToastStore((state) => state.showToast);

  if (!user) {
    return (
      <Container as="main" className="py-20">
        <EmptyStateCard
          iconName="user"
          iconSize={40}
          title="على الرحب والسعة في مَسار"
          description="سجّل دخولك لاستعراض ملفك الشخصي وتذاكر البولمان المحفوظة."
          action={
            <Link
              to={ROUTES.LOGIN}
              className={buttonVariants({ variant: "primary" })}
            >
              تسجيل الدخول
            </Link>
          }
        />
      </Container>
    );
  }

  const handleLogout = () => {
    logout();
    showToast("تم تسجيل الخروج من حساب مَسار.");
    navigate(ROUTES.HOME);
  };

  const firstName = user.name.split(" ")[0];

  return (
    <main className="min-h-[70vh]">
      <PageBanner
        eyebrowText="ملف المسافر في مَسار"
        title={`أهلاً بك يا ${firstName}`}
        highlightedTitle={
          <span className="[&_i]:align-baseline">
            <SairnaIcon name="hand" size={28} />
          </span>
        }
        description="على الرحب والسعة — هنا تجد بيانات حسابك وتذاكر البولمان المرتبطة بك."
      />
      <AccountContentSection
        user={user}
        bookingsCount={isLoading ? "..." : isError ? "-" : bookings.length}
        onLogout={handleLogout}
      />
    </main>
  );
}

export default AccountPage;
