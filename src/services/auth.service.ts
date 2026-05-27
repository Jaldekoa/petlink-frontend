import type {
  AuthResponse,
  LoginDTO,
  RegisterDTO,
} from "@/shared/types/auth.types";

const API_URL = import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, "") ?? "";

const getErrorMessage = async (res: Response) => {
  try {
    const data = await res.json();
    return data.error ?? data.message ?? "Error en la autenticación";
  } catch {
    return "Error en la autenticación";
  }
};

export const login = async (data: LoginDTO): Promise<AuthResponse> => {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error(await getErrorMessage(res));

  const auth = await res.json();
  setToken(auth.token);
  return auth;
};

export const register = async (
  data: RegisterDTO,
): Promise<{ message: string }> => {
  const res = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error(await getErrorMessage(res));

  return res.json();
};

export const getToken = () => localStorage.getItem("token");

export const setToken = (token: string) => localStorage.setItem("token", token);

export const removeToken = () => localStorage.removeItem("token");

export const logout = () => removeToken();

export const getAuthHeader = () => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${getToken()}`,
});

export const isAuthenticated = () => !!getToken();
