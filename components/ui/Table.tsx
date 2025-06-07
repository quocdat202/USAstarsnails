interface TableColumn {
  label: string;
  key: string;
}

interface TableData {
  [key: string]: string;
}

interface ServiceTableProps {
  columns: TableColumn[];
  data: TableData[];
}

const Table = ({ columns, data }: ServiceTableProps) => {
  return (
    <table className="w-full border-collapse rounded-lg overflow-hidden">
      <thead>
        <tr className="bg-[#D3D3D3] text-left text-xl poppins-medium text-[#222] uppercase">
          {columns.map((col, index) => (
            <th key={col.key} className="px-4 py-3 border border-[#F1F5F9]">
              {col.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr
            key={index}
            className={index % 2 === 0 ? "bg-white" : "bg-[#F5F5F5]"}
          >
            {columns.map((col, index) => (
              <td
                key={col.key}
                className="px-4 py-4 border border-[#E2E8F0] poppins-light"
              >
                {row[col.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
