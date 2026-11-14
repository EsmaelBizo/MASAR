import { AuthContentSection } from "./sections/auth-content-section/auth-content-section";

export function AuthPage({ mode = "login" }) {
  return (
    <main className="bg-bg pt-12 pb-20 max-[650px]:pt-6 max-[650px]:pb-12">
      <AuthContentSection mode={mode} />
    </main>
  );
}

export default AuthPage;
