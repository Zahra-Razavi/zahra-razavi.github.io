import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { ResponsiveTable } from '../ui/responsive-table';

const testData = [
  {
    id: 'D001',
    companyName: 'ABC Electronics',
    brokerName: 'Sarah Johnson',
    dealSize: '$250,000',
    status: 'Under Review',
    riskScore: 85
  },
  {
    id: 'D002', 
    companyName: 'Tech Solutions Inc',
    brokerName: 'Mike Chen',
    dealSize: '$180,000',
    status: 'Approved',
    riskScore: 72
  }
];

export function TestUnderwriting() {
  const [searchTerm, setSearchTerm] = useState('');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Under Review': return 'bg-yellow-100 text-yellow-800';
      case 'Approved': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-4 sm:space-y-6 w-full max-w-full overflow-x-hidden">
      {/* Test Table */}
      <Card className="w-full max-w-full overflow-hidden">
        <CardHeader>
          <CardTitle>Test Underwriting Table</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          {/* Desktop Table View */}
          <div className="hidden xl:block">
            <ResponsiveTable>
              <TableHeader>
                <TableRow>
                  <TableHead>Deal ID</TableHead>
                  <TableHead>Company Name</TableHead>
                  <TableHead>Broker Name</TableHead>
                  <TableHead>Deal Size</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Risk Score</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {testData.map((deal) => (
                  <TableRow key={deal.id}>
                    <TableCell className="font-medium">{deal.id}</TableCell>
                    <TableCell>{deal.companyName}</TableCell>
                    <TableCell>{deal.brokerName}</TableCell>
                    <TableCell className="font-semibold">{deal.dealSize}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(deal.status)}>{deal.status}</Badge>
                    </TableCell>
                    <TableCell>{deal.riskScore}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </ResponsiveTable>
          </div>

          {/* Mobile Card View */}
          <div className="xl:hidden p-4 space-y-4">
            {testData.map((deal) => (
              <Card key={deal.id} className="p-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-medium text-sm text-muted-foreground">Deal ID</div>
                      <div className="font-bold">{deal.id}</div>
                    </div>
                    <div className="text-right space-y-1">
                      <Badge className={getStatusColor(deal.status)}>{deal.status}</Badge>
                    </div>
                  </div>
                  
                  <div>
                    <div className="font-medium text-sm text-muted-foreground">Company</div>
                    <div className="font-medium">{deal.companyName}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="font-medium text-sm text-muted-foreground">Broker</div>
                      <div className="text-sm">{deal.brokerName}</div>
                    </div>
                    <div>
                      <div className="font-medium text-sm text-muted-foreground">Deal Size</div>
                      <div className="text-sm font-medium">{deal.dealSize}</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-2 border-t">
                    <span className="text-sm font-medium">Risk Score: {deal.riskScore}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}