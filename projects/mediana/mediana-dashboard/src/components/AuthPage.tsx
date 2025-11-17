import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Checkbox } from './ui/checkbox';
import { Eye, EyeOff } from 'lucide-react';
import { MedianaLogo } from './MedianaLogo';
import { demoAuthData } from '../utils/demo-mode';

interface AuthPageProps {
  onAuthenticate: () => void;
}

export function AuthPage({ onAuthenticate }: AuthPageProps) {
  const navigate = useNavigate();
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Login form state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Signup form state
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupConfirmPassword, setSignupConfirmPassword] = useState('');
  const [signupAgreeTerms, setSignupAgreeTerms] = useState(false);

  // Error states
  const [loginError, setLoginError] = useState('');
  const [signupError, setSignupError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    setIsLoading(true);

    // Basic validation
    if (!loginEmail || !loginPassword) {
      setLoginError('Please fill in all fields');
      setIsLoading(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(loginEmail)) {
      setLoginError('Please enter a valid email address');
      setIsLoading(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userEmail', loginEmail);
      localStorage.setItem('onboardingComplete', 'true'); // Existing users have completed onboarding
      onAuthenticate();
      setIsLoading(false);

      // Login always goes to dashboard - onboarding is only for new signups
      navigate('/reports');
    }, 1000);
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setSignupError('');
    setIsLoading(true);

    // Basic validation
    if (!signupName || !signupEmail || !signupPassword || !signupConfirmPassword) {
      setSignupError('Please fill in all fields');
      setIsLoading(false);
      return;
    }

    if (!signupAgreeTerms) {
      setSignupError('Please agree to Terms and Conditions');
      setIsLoading(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(signupEmail)) {
      setSignupError('Please enter a valid email address');
      setIsLoading(false);
      return;
    }

    // Password validation
    if (signupPassword.length < 8) {
      setSignupError('Password must be at least 8 characters long');
      setIsLoading(false);
      return;
    }

    if (signupPassword !== signupConfirmPassword) {
      setSignupError('Passwords do not match');
      setIsLoading(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userEmail', signupEmail);
      localStorage.setItem('userName', signupName);
      onAuthenticate();
      setIsLoading(false);

      navigate('/onboarding');
    }, 1000);
  };

  const handleSocialLogin = (provider: string) => {
    alert(`${provider} login would be implemented here`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-white to-teal-subtle">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <MedianaLogo className="h-12" />
        </div>

        {mode === 'login' ? (
          // Login Form
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-neutral-100">
            <h1 className="text-center mb-8">Log in</h1>

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="login-email" className="text-sm text-dark-gray">
                  Enter your email
                </Label>
                <Input
                  id="login-email"
                  type="email"
                  placeholder="email@email.com"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  onClick={() => {
                    if (!loginEmail) {
                      setLoginEmail(demoAuthData.login.email);
                    }
                  }}
                  disabled={isLoading}
                  className="bg-teal-subtle border-teal-light focus:border-teal h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="login-password" className="text-sm text-dark-gray">
                  Enter your password
                </Label>
                <div className="relative">
                  <Input
                    id="login-password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••••••••"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    onClick={() => {
                      if (!loginPassword) {
                        setLoginPassword(demoAuthData.login.password);
                      }
                    }}
                    disabled={isLoading}
                    className="bg-teal-subtle border-teal-light focus:border-teal h-12 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-teal hover:text-teal-dark transition-colors"
                    disabled={isLoading}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="text-sm text-teal hover:text-teal-dark hover:underline transition-colors"
                    onClick={() => alert('Password recovery would be implemented here')}
                  >
                    Recover password
                  </button>
                </div>
              </div>

              {loginError && (
                <div className="text-destructive text-sm bg-destructive/10 p-3 rounded-md">
                  {loginError}
                </div>
              )}

              <Button
                type="submit"
                className="w-full h-12 bg-teal hover:bg-teal-dark text-white transition-colors"
                disabled={isLoading}
              >
                {isLoading ? 'Logging in...' : 'log in'}
              </Button>

              <div className="text-center text-sm text-dark-gray">
                Don't have an account?{' '}
                <button
                  type="button"
                  onClick={() => setMode('signup')}
                  className="text-teal hover:text-teal-dark underline hover:no-underline transition-colors"
                  disabled={isLoading}
                >
                  Sign up
                </button>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-neutral-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-muted-foreground">or</span>
                </div>
              </div>

              <div className="space-y-3">
                <Button
                  type="button"
                  variant="outline"
                  className="w-full h-12 bg-neutral-50 border-0 hover:bg-neutral-100"
                  onClick={() => handleSocialLogin('Google')}
                  disabled={isLoading}
                >
                  Google
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full h-12 bg-neutral-50 border-0 hover:bg-neutral-100"
                  onClick={() => handleSocialLogin('Facebook')}
                  disabled={isLoading}
                >
                  Facebook
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full h-12 bg-neutral-50 border-0 hover:bg-neutral-100"
                  onClick={() => handleSocialLogin('Apple')}
                  disabled={isLoading}
                >
                  apple
                </Button>
              </div>
            </form>
          </div>
        ) : (
          // Signup Form
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-neutral-100">
            <h1 className="text-center mb-8">Sign up</h1>

            <form onSubmit={handleSignup} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="signup-name" className="text-sm text-dark-gray">
                  Name
                </Label>
                <Input
                  id="signup-name"
                  type="text"
                  placeholder="Full name"
                  value={signupName}
                  onChange={(e) => setSignupName(e.target.value)}
                  onClick={() => {
                    if (!signupName) {
                      setSignupName(demoAuthData.signup.name);
                    }
                  }}
                  disabled={isLoading}
                  className="bg-teal-subtle border-teal-light focus:border-teal h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="signup-email" className="text-sm text-dark-gray">
                  Email
                </Label>
                <Input
                  id="signup-email"
                  type="email"
                  placeholder="Enter your email"
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                  onClick={() => {
                    if (!signupEmail) {
                      setSignupEmail(demoAuthData.signup.email);
                    }
                  }}
                  disabled={isLoading}
                  className="bg-teal-subtle border-teal-light focus:border-teal h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="signup-password" className="text-sm text-dark-gray">
                  Create your password
                </Label>
                <div className="relative">
                  <Input
                    id="signup-password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={signupPassword}
                    onChange={(e) => setSignupPassword(e.target.value)}
                    onClick={() => {
                      if (!signupPassword) {
                        setSignupPassword(demoAuthData.signup.password);
                      }
                    }}
                    disabled={isLoading}
                    className="bg-teal-subtle border-teal-light focus:border-teal h-12 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-teal hover:text-teal-dark transition-colors"
                    disabled={isLoading}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="signup-confirm-password" className="text-sm text-dark-gray">
                  Repeat your password
                </Label>
                <div className="relative">
                  <Input
                    id="signup-confirm-password"
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={signupConfirmPassword}
                    onChange={(e) => setSignupConfirmPassword(e.target.value)}
                    onClick={() => {
                      if (!signupConfirmPassword) {
                        setSignupConfirmPassword(demoAuthData.signup.confirmPassword);
                      }
                    }}
                    disabled={isLoading}
                    className="bg-teal-subtle border-teal-light focus:border-teal h-12 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-teal hover:text-teal-dark transition-colors"
                    disabled={isLoading}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="signup-terms"
                  checked={signupAgreeTerms}
                  onCheckedChange={(checked) => setSignupAgreeTerms(checked as boolean)}
                  disabled={isLoading}
                />
                <label
                  htmlFor="signup-terms"
                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I agree with Terms and Conditions and Privacy Policy
                </label>
              </div>

              {signupError && (
                <div className="text-destructive text-sm bg-destructive/10 p-3 rounded-md">
                  {signupError}
                </div>
              )}

              <Button
                type="submit"
                className="w-full h-12 bg-teal hover:bg-teal-dark text-white transition-colors"
                disabled={isLoading}
              >
                {isLoading ? 'Creating account...' : 'Sign up'}
              </Button>

              <div className="text-center text-sm text-dark-gray">
                You already have an account?{' '}
                <button
                  type="button"
                  onClick={() => setMode('login')}
                  className="text-teal hover:text-teal-dark underline hover:no-underline transition-colors"
                  disabled={isLoading}
                >
                  Log in
                </button>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-neutral-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-muted-foreground">or</span>
                </div>
              </div>

              <div className="space-y-3">
                <Button
                  type="button"
                  variant="outline"
                  className="w-full h-12 bg-teal-subtle border-teal-light hover:bg-teal-light hover:border-teal transition-colors"
                  onClick={() => handleSocialLogin('Google')}
                  disabled={isLoading}
                >
                  Google
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full h-12 bg-teal-subtle border-teal-light hover:bg-teal-light hover:border-teal transition-colors"
                  onClick={() => handleSocialLogin('Facebook')}
                  disabled={isLoading}
                >
                  Facebook
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full h-12 bg-teal-subtle border-teal-light hover:bg-teal-light hover:border-teal transition-colors"
                  onClick={() => handleSocialLogin('Apple')}
                  disabled={isLoading}
                >
                  apple
                </Button>
              </div>
            </form>
          </div>
        )}

        {/* Footer */}
        <div className="text-center mt-6 text-sm text-muted-foreground">
          <p>© 2025 Mediana VoIP. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}