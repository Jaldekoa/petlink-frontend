const TOKEN_KEY = 'petlink_token';
const API = import.meta.env.VITE_API_BASE_URL

// ── Token helpers ────────────────────────────────────────────────────────────

export function getToken(): string | null {
  return localStorage.getItem(TOKEN_KEY);
}

export function setToken(token: string): void {
  localStorage.setItem(TOKEN_KEY, token);
}

export function removeToken(): void {
  localStorage.removeItem(TOKEN_KEY);
}

function isExpired(token: string): boolean {
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.exp * 1000 < Date.now();
  } catch {
    return true;
  }
}

// ── Auth state ───────────────────────────────────────────────────────────────

export function authUser(): boolean {
  const token = getToken();
  if (!token) return false;
  if (isExpired(token)) {
    removeToken();
    return false;
  }
  return true;
}

export function getTokenPayload(): { userId: string; email: string; role: string; username: string } | null {
  const token = getToken();
  if (!token || isExpired(token)) return null;
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch {
    return null;
  }
}

// ── API calls ────────────────────────────────────────────────────────────────

export interface LoginResult {
  success: boolean;
  error?: string;
}

export interface RegisterResult {
  success: boolean;
  error?: string;
}

export interface RegisterData {
  username: string;
  email: string;
  password: string;
  passwordRepeat: string;
  fullName?: string;
  phone?: string;
}

export async function login(email: string, password: string): Promise<LoginResult> {
  try {
    const res = await fetch(`${API}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      return { success: false, error: data.message ?? 'Credenciales incorrectas' };
    }

    setToken(data.token);
    return { success: true };
  } catch {
    return { success: false, error: 'No se pudo conectar con el servidor' };
  }
}

export async function register(payload: RegisterData): Promise<RegisterResult> {
  try {
    const res = await fetch(`${API}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      return { success: false, error: data.message ?? 'Error al crear la cuenta' };
    }

    return { success: true };
  } catch {
    return { success: false, error: 'No se pudo conectar con el servidor' };
  }
}

export function logout(): void {
  removeToken();
}
