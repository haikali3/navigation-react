import Table from './Table';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import useSort from '../hooks/use-sort';

function SortableTable(props) {
  const { config, data } = props;
  const { sortOrder, sortBy, sortedData, setSortColumn } = useSort(
    data,
    config
  );

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-slate-200"
          onClick={() => setSortColumn(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  return <Table {...props} data={sortedData} config={updatedConfig} />;
}

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return (
      <div>
        <AiFillCaretUp />
        <AiFillCaretDown />
      </div>
    );
  }

  if (sortOrder === 'desc') {
    return (
      <div>
        <AiFillCaretDown />
      </div>
    );
  } else if (sortOrder === 'asc') {
    return (
      <div>
        <AiFillCaretUp />
      </div>
    );
  } else if (sortOrder === null) {
    return (
      <div>
        <AiFillCaretUp />
        <AiFillCaretDown />
      </div>
    );
  }
}

export default SortableTable;
