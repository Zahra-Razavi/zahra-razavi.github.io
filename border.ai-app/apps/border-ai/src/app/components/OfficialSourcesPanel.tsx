import React from 'react';
import { Card } from './ui/card';
import { ExternalLink, Calendar } from 'lucide-react';
import { Badge } from './ui/badge';

interface Source {
  title: string;
  url: string;
  lastUpdated: string;
}

interface OfficialSourcesPanelProps {
  sources?: Source[];
}

export function OfficialSourcesPanel({ sources }: OfficialSourcesPanelProps) {
  const defaultSources: Source[] = sources || [
    {
      title: 'IRCC Study Permit Requirements',
      url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada.html',
      lastUpdated: 'Dec 10, 2024',
    },
    {
      title: 'Document Checklist (IMM 5483)',
      url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/application-forms-guides.html',
      lastUpdated: 'Nov 28, 2024',
    },
    {
      title: 'Processing Times',
      url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/check-processing-times.html',
      lastUpdated: 'Dec 15, 2024',
    },
  ];

  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-sm">Official Sources</h4>
        <Badge variant="outline" className="text-xs">
          <Calendar className="w-3 h-3 mr-1" />
          Last checked today
        </Badge>
      </div>

      <div className="space-y-3">
        {defaultSources.map((source, index) => (
          <a
            key={index}
            href={source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-2 p-2 rounded hover:bg-gray-50 transition-colors group"
          >
            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#E9692C] mt-0.5 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-sm group-hover:text-[#E9692C] truncate">{source.title}</p>
              <p className="text-xs text-gray-500">Updated {source.lastUpdated}</p>
            </div>
          </a>
        ))}
      </div>
    </Card>
  );
}
