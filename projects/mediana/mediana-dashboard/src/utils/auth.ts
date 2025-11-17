/**
 * Authentication Utilities
 * 
 * Helper functions for authentication-related operations
 */

import { authConfig, authErrorMessages } from '../design-system';

/**
 * Storage keys for authentication
 */
export const AUTH_STORAGE_KEYS = {
  IS_AUTHENTICATED: 'isAuthenticated',
  USER_EMAIL: 'userEmail',
  USER_NAME: 'userName',
  AUTH_TOKEN: 'authToken',
  REFRESH_TOKEN: 'refreshToken',
  SESSION_TIMESTAMP: 'sessionTimestamp',
} as const;

/**
 * Check if user is authenticated
 */
export function isAuthenticated(): boolean {
  const isAuth = localStorage.getItem(AUTH_STORAGE_KEYS.IS_AUTHENTICATED) === 'true';
  
  if (!isAuth) return false;
  
  // Check session timeout
  const sessionTimestamp = localStorage.getItem(AUTH_STORAGE_KEYS.SESSION_TIMESTAMP);
  if (sessionTimestamp) {
    const sessionAge = Date.now() - parseInt(sessionTimestamp, 10);
    if (sessionAge > authConfig.sessionTimeout) {
      clearAuthData();
      return false;
    }
  }
  
  return true;
}

/**
 * Set authentication data
 */
export function setAuthData(data: {
  email: string;
  name?: string;
  token?: string;
  refreshToken?: string;
}): void {
  localStorage.setItem(AUTH_STORAGE_KEYS.IS_AUTHENTICATED, 'true');
  localStorage.setItem(AUTH_STORAGE_KEYS.USER_EMAIL, data.email);
  localStorage.setItem(AUTH_STORAGE_KEYS.SESSION_TIMESTAMP, Date.now().toString());
  
  if (data.name) {
    localStorage.setItem(AUTH_STORAGE_KEYS.USER_NAME, data.name);
  }
  
  if (data.token) {
    localStorage.setItem(AUTH_STORAGE_KEYS.AUTH_TOKEN, data.token);
  }
  
  if (data.refreshToken) {
    localStorage.setItem(AUTH_STORAGE_KEYS.REFRESH_TOKEN, data.refreshToken);
  }
}

/**
 * Get authentication data
 */
export function getAuthData() {
  return {
    isAuthenticated: localStorage.getItem(AUTH_STORAGE_KEYS.IS_AUTHENTICATED) === 'true',
    email: localStorage.getItem(AUTH_STORAGE_KEYS.USER_EMAIL),
    name: localStorage.getItem(AUTH_STORAGE_KEYS.USER_NAME),
    token: localStorage.getItem(AUTH_STORAGE_KEYS.AUTH_TOKEN),
    refreshToken: localStorage.getItem(AUTH_STORAGE_KEYS.REFRESH_TOKEN),
  };
}

/**
 * Clear authentication data
 */
export function clearAuthData(): void {
  localStorage.removeItem(AUTH_STORAGE_KEYS.IS_AUTHENTICATED);
  localStorage.removeItem(AUTH_STORAGE_KEYS.USER_EMAIL);
  localStorage.removeItem(AUTH_STORAGE_KEYS.USER_NAME);
  localStorage.removeItem(AUTH_STORAGE_KEYS.AUTH_TOKEN);
  localStorage.removeItem(AUTH_STORAGE_KEYS.REFRESH_TOKEN);
  localStorage.removeItem(AUTH_STORAGE_KEYS.SESSION_TIMESTAMP);
}

/**
 * Validate email format
 */
export function validateEmail(email: string): { valid: boolean; message?: string } {
  if (!email) {
    return { valid: false, message: 'Email is required' };
  }
  
  if (!authConfig.validation.email.pattern.test(email)) {
    return { valid: false, message: authConfig.validation.email.message };
  }
  
  return { valid: true };
}

/**
 * Validate password
 */
export function validatePassword(
  password: string,
  strict: boolean = false
): { valid: boolean; message?: string } {
  if (!password) {
    return { valid: false, message: 'Password is required' };
  }
  
  if (password.length < authConfig.validation.password.minLength) {
    return { valid: false, message: authConfig.validation.password.weakMessage };
  }
  
  if (strict && !authConfig.validation.password.pattern.test(password)) {
    return { valid: false, message: authConfig.validation.password.message };
  }
  
  return { valid: true };
}

/**
 * Validate name
 */
export function validateName(name: string): { valid: boolean; message?: string } {
  if (!name) {
    return { valid: false, message: 'Name is required' };
  }
  
  const { minLength, maxLength, pattern, message } = authConfig.validation.name;
  
  if (name.length < minLength || name.length > maxLength) {
    return { valid: false, message: `Name must be between ${minLength} and ${maxLength} characters` };
  }
  
  if (!pattern.test(name)) {
    return { valid: false, message };
  }
  
  return { valid: true };
}

/**
 * Calculate password strength
 * Returns a score from 0 (weak) to 4 (strong)
 */
export function calculatePasswordStrength(password: string): number {
  let strength = 0;
  
  if (password.length >= 8) strength += 1;
  if (password.length >= 12) strength += 1;
  if (/[a-z]/.test(password)) strength += 1;
  if (/[A-Z]/.test(password)) strength += 1;
  if (/\d/.test(password)) strength += 1;
  if (/[^a-zA-Z0-9]/.test(password)) strength += 1;
  
  return Math.min(strength, 4);
}

/**
 * Mock login function (replace with actual API call)
 */
export async function login(
  email: string,
  password: string
): Promise<{ success: boolean; error?: string }> {
  // Validate inputs
  const emailValidation = validateEmail(email);
  if (!emailValidation.valid) {
    return { success: false, error: emailValidation.message };
  }
  
  const passwordValidation = validatePassword(password);
  if (!passwordValidation.valid) {
    return { success: false, error: passwordValidation.message };
  }
  
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      // For demo purposes, accept any valid email/password
      setAuthData({ email });
      resolve({ success: true });
    }, 1000);
  });
}

/**
 * Mock signup function (replace with actual API call)
 */
export async function signup(
  name: string,
  email: string,
  password: string
): Promise<{ success: boolean; error?: string }> {
  // Validate inputs
  const nameValidation = validateName(name);
  if (!nameValidation.valid) {
    return { success: false, error: nameValidation.message };
  }
  
  const emailValidation = validateEmail(email);
  if (!emailValidation.valid) {
    return { success: false, error: emailValidation.message };
  }
  
  const passwordValidation = validatePassword(password);
  if (!passwordValidation.valid) {
    return { success: false, error: passwordValidation.message };
  }
  
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      setAuthData({ email, name });
      resolve({ success: true });
    }, 1000);
  });
}

/**
 * Logout function
 */
export function logout(): void {
  clearAuthData();
}

/**
 * Get user initials from name
 */
export function getUserInitials(name?: string | null): string {
  if (!name) return 'U';
  
  const parts = name.trim().split(' ');
  if (parts.length === 1) {
    return parts[0].charAt(0).toUpperCase();
  }
  
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
}

/**
 * Format user display name
 */
export function formatUserDisplayName(name?: string | null, email?: string | null): string {
  if (name) return name;
  if (email) return email.split('@')[0];
  return 'User';
}
