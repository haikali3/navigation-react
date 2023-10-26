// import Table from '../components/Table';
import SortableTable from '../components/SortableTable';

function TablePage() {
  const data = [
    { name: 'Orange', color: 'bg-orange-500', price: 2.99 },
    { name: 'Apple', color: 'bg-red-500', price: 1.99 },
    { name: 'Banana', color: 'bg-yellow-500', price: 0.99 },
    { name: 'Grape', color: 'bg-purple-500', price: 3.99 },
    { name: 'Kiwi', color: 'bg-green-500', price: 5.99 },
  ];

  const config = [
    {
      label: 'Name',
      render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name,
    },
    {
      label: 'Color',
      render: (fruit) => (
        <div className={`w-5 h-5 rounded-full ${fruit.color}`}></div>
      ),
    },
    {
      label: 'Price',
      render: (fruit) => fruit.price,
      sortValue: (fruit) => fruit.price,
      header: () => <th className="bg-red-400">Price</th>,
    },
  ];

  const keyFn = (fruit) => fruit.name;

  return (
    <div>
      <SortableTable data={data} config={config} keyFn={keyFn} />
    </div>
  );
}

export default TablePage;
