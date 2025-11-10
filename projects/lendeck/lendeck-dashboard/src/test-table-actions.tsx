import React from 'react';
import { Eye, Edit } from 'lucide-react';
import { TableActionsMenu, TableActionItem } from './components/ui/table-actions-menu';

export default function TestTableActions() {
  return (
    <div className="p-8">
      <h1>Test Table Actions Menu</h1>
      <div className="mt-4">
        <TableActionsMenu label="Test Actions">
          <TableActionItem
            onClick={() => console.log('View clicked')}
            icon={<Eye className="h-4 w-4" />}
            label="View"
          />
          <TableActionItem
            onClick={() => console.log('Edit clicked')}
            icon={<Edit className="h-4 w-4" />}
            label="Edit"
          />
        </TableActionsMenu>
      </div>
    </div>
  );
}