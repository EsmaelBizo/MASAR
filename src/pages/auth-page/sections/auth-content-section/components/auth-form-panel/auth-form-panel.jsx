import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../../../constants/routes";
import { useAuthStore } from "../../../../../../store/use-auth-store";
import { useToastStore } from "../../../../../../store/use-toast-store";
import { Eyebrow } from "../../../../../../components/ui/eyebrow";
import { SairnaIcon } from "../../../../../../components/ui/sairna-icon";
import { buttonVariants } from "../../../../../../components/ui/button";
import { FormInputField } from "../../../../../../components/shared/form-input-field/form-input-field";
import { InfoNotice } from "../../../../../../components/shared/info-notice/info-notice";
import { cn } from "../../../../../../lib/cn";
import {
  useLoginMutation,
  useRegisterMutation,
} from "../../../../../../hooks/use-auth-mutation";

export function AuthFormPanel({ mode = "login" }) {
  const navigate = useNavigate();
  const isRegister = mode === "register";

  const afterAuthRoute = useAuthStore((state) => state.afterAuthRoute);
  const clearAfterAuthRoute = useAuthStore(
    (state) => state.clearAfterAuthRoute
  );
  const showToast = useToastStore((state) => state.showToast);
  const loginMutation = useLoginMutation();
  const registerMutation = useRegisterMutation();
  const authMutation = isRegister ? registerMutation : loginMutation;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const trimmedEmail = email.trim().toLowerCase();

    if (password.length < 6) {
      showToast("كلمة المرور يجب أن تتكون من 6 أحرف على الأقل.", "error");
      return;
    }

    const resolvedName = isRegister
      ? name.trim()
      : trimmedEmail.split("@")[0] || "مسافر مَسار";

    if (resolvedName.length < 2) {
      showToast("يرجى إدخال اسم صحيح.", "error");
      return;
    }

    try {
      await authMutation.mutateAsync({
        ...(isRegister ? { name: resolvedName } : {}),
        email: trimmedEmail,
        password,
      });
      const destination = afterAuthRoute || ROUTES.ACCOUNT;
      clearAfterAuthRoute();
      showToast("أهلاً بك في منصة مَسار! على الرحب والسعة.");
      navigate(destination);
    } catch (error) {
      const status = error.response?.status;
      const message =
        status === 409
          ? "هذا البريد الإلكتروني مستخدم مسبقًا. جرّب تسجيل الدخول."
          : error.response?.data?.message ||
            error.message ||
            "تعذر الاتصال بالخادم. حاول مرة أخرى.";
      showToast(
        message,
        "error"
      );
    }
  };

  return (
    <div className="flex flex-col justify-center px-[min(6vw,76px)] py-12 max-[900px]:p-9 max-[650px]:px-6 max-[650px]:py-7">
      <div>
        <Eyebrow>
          {isRegister ? "انضم إلى مسافري مَسار" : "على الرحب والسعة في مَسار"}
        </Eyebrow>
        <h1 className="mt-3 mb-1.5 font-heading text-[30px] max-[650px]:text-[25px] font-bold">
          {isRegister ? (
            <>
              أنشئ حسابك.. <span className="text-accent">ومقعدك محفوظ</span>
            </>
          ) : (
            <>
              تسجيل الدخول إلى <span className="text-primary">مَسار</span>
            </>
          )}
        </h1>
        <p className="text-[13px] text-muted">
          {isRegister
            ? "احتفظ بتذاكر البولمان الرقمية وتابع حجوزاتك بين المحافظات بسهولة."
            : "ادخل إلى حسابك لإتمام حجز مقعدك واستعراض تذاكر الصعود الإلكترونية."}
        </p>
      </div>

      <form className="mt-6 mb-4 flex flex-col gap-4" onSubmit={handleSubmit}>
        {isRegister && (
          <FormInputField
            label="الاسم الكامل"
            required
            iconName="user"
            iconSize={19}
            heightClass="h-[54px]"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            minLength={3}
            placeholder="مثال: سامر الحلبي"
            autoComplete="name"
          />
        )}

        <FormInputField
          label="البريد الإلكتروني"
          required
          iconName="mail"
          iconSize={19}
          heightClass="h-[54px]"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="name@masar.sy"
          autoComplete="email"
          dir="ltr"
        />

        <FormInputField
          label="كلمة المرور"
          required
          iconName="lock"
          iconSize={19}
          heightClass="h-[54px]"
          name="password"
          id="auth-password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          minLength={6}
          placeholder="6 أحرف على الأقل"
          autoComplete={isRegister ? "new-password" : "current-password"}
          dir="ltr"
          rightAddon={
            <button
              className="grid place-items-center border-0 bg-transparent p-1.5 text-muted"
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label="إظهار كلمة المرور"
            >
              <SairnaIcon name={showPassword ? "eye-off" : "eye"} size={19} />
            </button>
          }
        />

        {isRegister ? (
          <label className="flex items-center gap-2 text-[11px] text-muted">
            <input
              type="checkbox"
              required
              className="cursor-pointer accent-accent"
            />{" "}
            <span>أوافق على استخدام بياناتي لإنشاء حساب في منصة مَسار.</span>
          </label>
        ) : (
          <div className="flex items-center justify-between gap-3 text-[12px]">
            <label className="flex items-center gap-1.5 text-muted">
              <input
                type="checkbox"
                className="cursor-pointer accent-accent"
              />{" "}
              تذكرني
            </label>
            <Link to={ROUTES.SUPPORT} className="font-bold text-accent-deep">
              نسيت كلمة المرور؟
            </Link>
          </div>
        )}

        <button
          className={cn(
            buttonVariants({ variant: "primary", fullWidth: true }),
            "mt-1 min-h-[52px]"
          )}
          type="submit"
          disabled={authMutation.isPending}
        >
          {authMutation.isPending
            ? "جارٍ الاتصال..."
            : isRegister
              ? "إنشاء حساب في مَسار"
              : "تسجيل الدخول"}{" "}
          <SairnaIcon name="arrow-left" size={18} />
        </button>
      </form>

      <p className="mt-3 mb-4 text-center text-[12px] text-muted">
        {isRegister ? "لديك حساب مسبقاً؟" : "ليس لديك حساب بعد؟"}{" "}
        <Link
          to={isRegister ? ROUTES.LOGIN : ROUTES.REGISTER}
          className="font-bold text-primary hover:text-accent"
        >
          {isRegister ? "سجّل دخولك" : "أنشئ حساباً جديداً"}
        </Link>
      </p>

      <InfoNotice iconName="info" iconSize={18} variant="subtle">
        بيانات حسابك وحجوزاتك تُحفظ عبر خادم مَسار الحقيقي.
      </InfoNotice>
    </div>
  );
}

export default AuthFormPanel;
