import { Link } from 'react-router-dom';
import { Table } from '../common/Table';
import { Customer } from '../../types/customer.types';

const columns = [
  { header: 'Name', accessor: 'name' },
  { header: 'Phone', accessor: 'phone' },
  { header: 'Email', accessor: 'email' },
  { 
    header: 'Actions', 
    cell: (row: Customer) => (
      <div className="space-x-2">
        <Link 
          to={`/customers/${row.id}`}
          className="text-blue-500 hover:underline"
        >
          View
        </Link>
        <Link
          to={`/customers/${row.id}/edit`}
          className="text-green-500 hover:underline"
        >
          Edit
        </Link>
      </div>
    )
  }
];

export const CustomerTable = ({ customers }: { customers: Customer[] }) => {
  return (
    <Table
      data={customers}
      columns={columns}
      emptyMessage="No customers found"
      className="mt-4"
    />
  );
};