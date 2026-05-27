import { useState } from "react";
import { login, register } from "@/services/auth.service";

type AuthMode = "login" | "register";

interface AuthGateProps {
  onSuccess: () => void;
}

export default function AuthGate({ onSuccess }: AuthGateProps) {
  const [mode, setMode] = useState<AuthMode>("login");

  // Login state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);

  // Register state
  const [regUsername, setRegUsername] = useState("");
  const [regFullName, setRegFullName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPhone, setRegPhone] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regPasswordRepeat, setRegPasswordRepeat] = useState("");
  const [regError, setRegError] = useState("");
  const [regLoading, setRegLoading] = useState(false);
  const [regSuccess, setRegSuccess] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    setLoginLoading(true);
    const result = await login(loginEmail, loginPassword);
    setLoginLoading(false);
    if (result.success) {
      onSuccess();
    } else {
      setLoginError(result.error ?? "Error al iniciar sesión");
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setRegError("");
    if (regPassword !== regPasswordRepeat) {
      setRegError("Las contraseñas no coinciden");
      return;
    }
    setRegLoading(true);
    const result = await register({
      username: regUsername,
      email: regEmail,
      password: regPassword,
      passwordRepeat: regPasswordRepeat,
      fullName: regFullName || undefined,
      phone: regPhone || undefined,
    });
    setRegLoading(false);
    if (result.success) {
      setRegSuccess(true);
    } else {
      setRegError(result.error ?? "Error al crear la cuenta");
    }
  };

  return (
    <div className="min-h-screen bg-surface flex flex-col">

      {/* ── TOP SECTION ─────────────────────────────────────────────── */}
      <div className="bg-surface-container-lowest px-6 pt-10 pb-8 border-b border-outline-variant/10 shadow-xs">
        <div className="max-w-md mx-auto text-center space-y-2">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="material-symbols-outlined text-[36px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
              pets
            </span>
            <span className="text-primary font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg">
              Mis Animales
            </span>
          </div>
          <p className="text-on-surface-variant font-body-md text-body-md">
            Accede para ver tus apadrinados, adoptados y favoritos
          </p>
        </div>
      </div>

      {/* ── CARD ────────────────────────────────────────────────────── */}
      <div className="flex-1 flex items-start justify-center px-6 py-10">
        <div className="w-full max-w-md">

          {/* Mode switcher */}
          <div className="flex rounded-2xl bg-surface-container-low border border-outline-variant/20 p-1 mb-8">
            {(["login", "register"] as AuthMode[]).map((m) => (
              <button
                key={m}
                onClick={() => {
                  setMode(m);
                  setLoginError("");
                  setRegError("");
                  setRegSuccess(false);
                }}
                className={`
                  flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl
                  font-label-lg text-label-lg transition-all duration-200 cursor-pointer
                  ${mode === m
                    ? "bg-primary text-on-primary shadow-sm"
                    : "text-on-surface-variant hover:text-on-surface"
                  }
                `}
              >
                <span className="material-symbols-outlined text-[18px]">
                  {m === "login" ? "login" : "person_add"}
                </span>
                {m === "login" ? "Iniciar sesión" : "Crear cuenta"}
              </button>
            ))}
          </div>

          {/* ── LOGIN FORM ─────────────────────────────────────────── */}
          {mode === "login" && (
            <form onSubmit={handleLogin} className="space-y-4">
              <Field
                label="Correo electrónico"
                icon="mail"
                type="email"
                value={loginEmail}
                onChange={setLoginEmail}
                placeholder="tu@email.com"
                required
              />
              <Field
                label="Contraseña"
                icon="lock"
                type="password"
                value={loginPassword}
                onChange={setLoginPassword}
                placeholder="••••••••"
                required
              />

              {loginError && <ErrorBanner message={loginError} />}

              <button
                type="submit"
                disabled={loginLoading}
                className="
                  w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl
                  bg-primary text-on-primary font-label-lg text-label-lg
                  hover:brightness-95 active:scale-98 transition-all duration-200
                  disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer
                "
              >
                {loginLoading ? (
                  <span className="material-symbols-outlined animate-spin text-[20px]">progress_activity</span>
                ) : (
                  <span className="material-symbols-outlined text-[20px]">login</span>
                )}
                {loginLoading ? "Iniciando..." : "Iniciar sesión"}
              </button>

              <p className="text-center text-body-sm font-body-sm text-on-surface-variant mt-2">
                ¿Aún no tienes cuenta?{" "}
                <button
                  type="button"
                  onClick={() => setMode("register")}
                  className="text-primary font-medium hover:underline cursor-pointer"
                >
                  Regístrate
                </button>
              </p>
            </form>
          )}

          {/* ── REGISTER FORM ──────────────────────────────────────── */}
          {mode === "register" && !regSuccess && (
            <form onSubmit={handleRegister} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field
                  label="Nombre de usuario"
                  icon="badge"
                  type="text"
                  value={regUsername}
                  onChange={setRegUsername}
                  placeholder="usuario123"
                  required
                />
                <Field
                  label="Nombre completo"
                  icon="person"
                  type="text"
                  value={regFullName}
                  onChange={setRegFullName}
                  placeholder="Ana García"
                />
              </div>
              <Field
                label="Correo electrónico"
                icon="mail"
                type="email"
                value={regEmail}
                onChange={setRegEmail}
                placeholder="tu@email.com"
                required
              />
              <Field
                label="Teléfono (opcional)"
                icon="phone"
                type="tel"
                value={regPhone}
                onChange={setRegPhone}
                placeholder="+34 600 000 000"
              />
              <Field
                label="Contraseña"
                icon="lock"
                type="password"
                value={regPassword}
                onChange={setRegPassword}
                placeholder="••••••••"
                required
              />
              <Field
                label="Repite la contraseña"
                icon="lock_reset"
                type="password"
                value={regPasswordRepeat}
                onChange={setRegPasswordRepeat}
                placeholder="••••••••"
                required
              />

              {regError && <ErrorBanner message={regError} />}

              <button
                type="submit"
                disabled={regLoading}
                className="
                  w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl
                  bg-primary text-on-primary font-label-lg text-label-lg
                  hover:brightness-95 active:scale-98 transition-all duration-200
                  disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer
                "
              >
                {regLoading ? (
                  <span className="material-symbols-outlined animate-spin text-[20px]">progress_activity</span>
                ) : (
                  <span className="material-symbols-outlined text-[20px]">person_add</span>
                )}
                {regLoading ? "Creando cuenta..." : "Crear cuenta"}
              </button>

              <p className="text-center text-body-sm font-body-sm text-on-surface-variant mt-2">
                ¿Ya tienes cuenta?{" "}
                <button
                  type="button"
                  onClick={() => setMode("login")}
                  className="text-primary font-medium hover:underline cursor-pointer"
                >
                  Inicia sesión
                </button>
              </p>
            </form>
          )}

          {/* ── REGISTER SUCCESS ────────────────────────────────────── */}
          {mode === "register" && regSuccess && (
            <div className="flex flex-col items-center text-center gap-5 py-6">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-primary/10">
                <span
                  className="material-symbols-outlined text-[44px] text-primary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
              </div>
              <div className="space-y-1">
                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  ¡Cuenta creada!
                </h3>
                <p className="text-on-surface-variant font-body-md text-body-md">
                  Ya puedes iniciar sesión con tus credenciales.
                </p>
              </div>
              <button
                onClick={() => {
                  setMode("login");
                  setRegSuccess(false);
                }}
                className="
                  flex items-center gap-2 px-6 py-3 rounded-2xl
                  bg-primary text-on-primary font-label-lg text-label-lg
                  hover:brightness-95 active:scale-98 transition-all duration-200 cursor-pointer
                "
              >
                <span className="material-symbols-outlined text-[20px]">login</span>
                Ir al inicio de sesión
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

// ── Sub-components ───────────────────────────────────────────────────────────

interface FieldProps {
  label: string;
  icon: string;
  type: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
}

function Field({ label, icon, type, value, onChange, placeholder, required }: FieldProps) {
  return (
    <div className="space-y-1.5">
      <label className="block font-label-md text-label-md text-on-surface-variant pl-1">
        {label}
      </label>
      <div className="relative flex items-center">
        <span className="absolute left-3.5 material-symbols-outlined text-[20px] text-on-surface-variant pointer-events-none">
          {icon}
        </span>
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          className="
            w-full pl-11 pr-4 py-3 rounded-2xl
            bg-surface-container-low border border-outline-variant/40
            text-on-surface font-body-md text-body-md
            placeholder:text-on-surface-variant/50
            focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20
            transition-all duration-200
          "
        />
      </div>
    </div>
  );
}

function ErrorBanner({ message }: { message: string }) {
  return (
    <div className="flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-error/10 border border-error/20">
      <span className="material-symbols-outlined text-[18px] text-error flex-shrink-0">
        error
      </span>
      <p className="text-error font-body-sm text-body-sm">{message}</p>
    </div>
  );
}
