import { Customer } from '../../types/customer.types';
import { Table } from '../common/Table';

const columns = [
  { header: 'Name', accessor: 'name' },
  { header: 'Email', accessor: 'email' },
  { header: 'Phone', accessor: 'phone' }
];

export const CustomerTable = ({ data }: { data: Customer[] }) => {
  return <Table columns={columns} data={data} />;
};