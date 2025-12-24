import React from 'react';
import logoImage from '../../../images/border-ai-logo.svg';
import { Button } from './ui/button';

interface OnboardingScreenProps {
  onEstimateChance: () => void;
  onLogin?: () => void;
}

const FEATURES = [
  {
    title: 'Visa approval chance estimation',
    description: 'Quickly understand the strength of your application with AI-generated readiness scores.',
  },
  {
    title: 'Case document preparation',
    description: 'Organize every form, checklist, and supporting proof the way visa officers expect to see it.',
  },
  {
    title: 'Data-based suggestions',
    description: 'Get actionable recommendations grounded in the latest IRCC guidance and peer case data.',
  },
];

export function OnboardingScreen({ onEstimateChance, onLogin }: OnboardingScreenProps) {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-6 py-16">
      <div className="max-w-5xl w-full space-y-16 text-center">
        <div className="space-y-6">
          <div className="flex justify-center">
            <div className="rounded-3xl bg-muted/40 p-10 shadow-lg">
              <img
                src={logoImage}
                alt="Border AI Logo"
                className="w-36 h-36 object-contain"
              />
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-lg uppercase tracking-[0.3em] text-muted-foreground">Border AI</p>
            <h1 className="text-4xl md:text-5xl font-semibold">Your AI visa assistant and advisor</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Personalized pathways, crystal-clear requirements, and AI-powered prep for Canadian visas.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3 text-left">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="rounded-2xl border bg-card/60 p-6 shadow-sm">
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="mt-3 text-base text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-2 text-center">
          <Button
            size="lg"
            className="w-full max-w-md text-lg py-7"
            onClick={onEstimateChance}
          >
            Estimate your chance
          </Button>
          {onLogin && (
            <button
              type="button"
              onClick={onLogin}
              className="text-muted-foreground hover:text-foreground transition text-base font-medium"
            >
              Already have an account? Log in
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
