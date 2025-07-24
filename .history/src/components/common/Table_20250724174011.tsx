// src/components/common/Table.tsx
import React, { ReactNode } from 'react';

interface TableProps {
  headers: string[];
  children: ReactNode;
  className?: string;
}

const Table: React.FC<TableProps> = ({ headers, children, className }) => {
  return (
    <div className="overflow-x-auto">
      <table className={`min-w-full bg-white border border-gray-200 ${className}`}>
        <thead className="bg-gray-100">
          <tr>
            {headers.map((header) => (
              <th key={header} className="text-left py-2 px-4 border-b border-gray-300">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};

export default Table;
