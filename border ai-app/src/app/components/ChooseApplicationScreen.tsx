import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { GraduationCap, Briefcase, Plane, Home, ArrowRight } from 'lucide-react';

interface ChooseApplicationScreenProps {
  onChoose: (type: string) => void;
}

export function ChooseApplicationScreen({ onChoose }: ChooseApplicationScreenProps) {
  const applicationTypes = [
    {
      id: 'study',
      title: 'Study Permit',
      description: 'For international students planning to study in Canada',
      icon: GraduationCap,
      popular: true,
      features: ['Letter of Acceptance required', 'Proof of funds', 'Study plan guidance'],
    },
    {
      id: 'work',
      title: 'Work Permit',
      description: 'For temporary workers and skilled professionals',
      icon: Briefcase,
      popular: false,
      features: ['Job offer verification', 'LMIA support', 'Work history analysis'],
    },
    {
      id: 'visit',
      title: 'Visitor Visa',
      description: 'For tourism, family visits, or business trips',
      icon: Plane,
      popular: false,
      features: ['Travel itinerary', 'Ties to home country', 'Purpose of visit'],
    },
    {
      id: 'pr',
      title: 'Permanent Residency',
      description: 'Express Entry, PNP, and other PR pathways',
      icon: Home,
      popular: true,
      features: ['CRS score calculation', 'Document requirements', 'Provincial programs'],
    },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-8">
        <Badge className="mb-4 bg-[#E9692C]/10 text-[#E9692C] border-[#E9692C]/20">
          Canada Only
        </Badge>
        <h1 className="mb-2">Choose Your Application Type</h1>
        <p className="text-gray-600">
          Select the type of Canadian visa or permit you want to apply for. We'll guide you through the entire process.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {applicationTypes.map((type) => {
          const Icon = type.icon;
          return (
            <Card
              key={type.id}
              className="p-6 hover:shadow-lg transition-all cursor-pointer group border-2 hover:border-[#E9692C]"
              onClick={() => onChoose(type.id)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#E9692C]/10 flex items-center justify-center group-hover:bg-[#E9692C] transition-colors">
                  <Icon className="w-6 h-6 text-[#E9692C] group-hover:text-white transition-colors" />
                </div>
                {type.popular && (
                  <Badge className="bg-green-100 text-green-700 border-green-200">
                    Popular
                  </Badge>
                )}
              </div>

              <h3 className="mb-2">{type.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{type.description}</p>

              <div className="space-y-2 mb-4">
                {type.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#E9692C]" />
                    {feature}
                  </div>
                ))}
              </div>

              <Button className="w-full group-hover:bg-[#E9692C] transition-colors">
                Start Application
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Card>
          );
        })}
      </div>

      <div className="mt-8 p-6 bg-amber-50 border border-amber-200 rounded-lg">
        <h4 className="text-sm mb-2">Not sure which one to choose?</h4>
        <p className="text-sm text-gray-700 mb-3">
          Our AI can help you determine the best pathway based on your situation. Answer a few questions and we'll recommend the right application type.
        </p>
        <Button variant="outline" size="sm">
          Get Recommendation
        </Button>
      </div>
    </div>
  );
}
