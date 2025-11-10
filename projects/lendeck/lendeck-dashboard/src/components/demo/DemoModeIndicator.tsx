import { useDemo } from './DemoContext';
import { Badge } from '../ui/badge';
import { Info } from 'lucide-react';

export function DemoModeIndicator() {
  const { isDemoMode } = useDemo();

  if (!isDemoMode) return null;

  return null;
}