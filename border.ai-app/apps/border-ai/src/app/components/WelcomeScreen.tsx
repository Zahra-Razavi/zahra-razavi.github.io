import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { FileText, Shield, Clock, Globe, CheckCircle, TrendingUp } from 'lucide-react';
import { Logo } from './Logo';

interface WelcomeScreenProps {
  onGetStarted: () => void;
  onLogin: () => void;
}

export function WelcomeScreen({ onGetStarted, onLogin }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-3">
            <Button variant="ghost" onClick={onLogin}>
              Log in
            </Button>
            <Button onClick={onGetStarted}>Get Started</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-[#E9692C]/10 text-[#E9692C] border-[#E9692C]/20">
            Canada Visa Services
          </Badge>
          <h1 className="text-5xl font-bold mb-6 text-gray-900">
            Your AI-Powered Canadian Visa Assistant
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Navigate visa processes with confidence. Border.ai clarifies requirements, assists with document preparation, and answers case-specific questions in your language.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" onClick={onGetStarted} className="px-8">
              Start Your Application
            </Button>
            <Button size="lg" variant="outline" onClick={onLogin}>
              Sign In
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-[#E9692C]/10 flex items-center justify-center mb-4">
              <FileText className="w-6 h-6 text-[#E9692C]" />
            </div>
            <h3 className="mb-2">Document Preparation</h3>
            <p className="text-gray-600 text-sm">
              AI-powered analysis and generation of supporting documents based on official requirements and best practices.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-[#E9692C]/10 flex items-center justify-center mb-4">
              <CheckCircle className="w-6 h-6 text-[#E9692C]" />
            </div>
            <h3 className="mb-2">Compliance Checks</h3>
            <p className="text-gray-600 text-sm">
              Automated verification against IRCC requirements with real-time feedback and suggestions.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-[#E9692C]/10 flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-[#E9692C]" />
            </div>
            <h3 className="mb-2">Multi-Language Support</h3>
            <p className="text-gray-600 text-sm">
              Ask questions and receive guidance in your own language throughout the application process.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-[#E9692C]/10 flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-[#E9692C]" />
            </div>
            <h3 className="mb-2">Timeline Management</h3>
            <p className="text-gray-600 text-sm">
              Detailed project plans with deadlines, milestones, and task tracking to keep you on schedule.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-[#E9692C]/10 flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-[#E9692C]" />
            </div>
            <h3 className="mb-2">Official Sources</h3>
            <p className="text-gray-600 text-sm">
              All guidance is based on official IRCC sources, updated with the latest rule changes.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-[#E9692C]/10 flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-[#E9692C]" />
            </div>
            <h3 className="mb-2">Case Insights</h3>
            <p className="text-gray-600 text-sm">
              Learn from similar successful applications and understand what works for your specific case.
            </p>
          </Card>
        </div>

        {/* Visa Types */}
        <div className="bg-white rounded-lg border p-8 mb-16">
          <h2 className="text-center mb-6">We Support All Canadian Visa Types</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center p-4">
              <div className="text-2xl mb-2">🎓</div>
              <h4 className="text-sm">Study Permits</h4>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl mb-2">💼</div>
              <h4 className="text-sm">Work Permits</h4>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl mb-2">✈️</div>
              <h4 className="text-sm">Visitor Visas</h4>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl mb-2">🏠</div>
              <h4 className="text-sm">Permanent Residency</h4>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 text-center">
          <p className="text-sm text-gray-700">
            <strong>Important:</strong> Border.ai provides information and document-prep assistance, not legal advice. 
            Always verify with official IRCC sources. Border.ai is not intended for collecting PII or securing highly sensitive data.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm text-gray-600">
          <p>© 2024 Border.ai - Canadian Visa Assistant</p>
        </div>
      </footer>
    </div>
  );
}