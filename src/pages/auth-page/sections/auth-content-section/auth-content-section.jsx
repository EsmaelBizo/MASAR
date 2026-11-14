import { Container } from "../../../../layouts/container/container";
import { AuthFormPanel } from "./components/auth-form-panel/auth-form-panel";
import { AuthVisualPanel } from "./components/auth-visual-panel/auth-visual-panel";

export function AuthContentSection({ mode = "login" }) {
  return (
    <Container as="section">
      <div className="animate-slide-up grid min-h-[600px] grid-cols-2 max-[650px]:grid-cols-1 overflow-hidden rounded-[24px] border border-border bg-surface shadow-card-md">
        <div key={mode} className="animate-slide-in-rtl">
          <AuthFormPanel mode={mode} />
        </div>
        <AuthVisualPanel />
      </div>
    </Container>
  );
}

export default AuthContentSection;
