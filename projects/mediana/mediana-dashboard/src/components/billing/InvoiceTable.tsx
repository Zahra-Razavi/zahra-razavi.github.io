import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Download } from 'lucide-react';
import { invoiceHistory } from './constants';
import { getStatusBadge } from './utils';

interface InvoiceTableProps {
  onDownloadInvoice: (invoiceNumber: string) => void;
}

export function InvoiceTable({ onDownloadInvoice }: InvoiceTableProps) {
  return (
    <>
      <CardHeader>
        <CardTitle>Invoice History</CardTitle>
        <CardDescription>
          Download and manage your billing invoices
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice Number</TableHead>
                <TableHead>Billing Period</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoiceHistory.map((invoice) => (
                <TableRow key={invoice.id}>
                  <TableCell className="font-mono">{invoice.invoiceNumber}</TableCell>
                  <TableCell>{invoice.period}</TableCell>
                  <TableCell>{invoice.date}</TableCell>
                  <TableCell>{invoice.dueDate}</TableCell>
                  <TableCell className="font-semibold">${invoice.amount.toFixed(2)}</TableCell>
                  <TableCell>{getStatusBadge(invoice.status)}</TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onDownloadInvoice(invoice.invoiceNumber)}
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </>
  );
}