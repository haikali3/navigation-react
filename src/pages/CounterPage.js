import Button from '../components/Button';
import useCounter from '../hooks/use-counter';

function CounterPage({ initialCounter }) {
  const { count, increment } = useCounter(initialCounter);

  return (
    <div>
      <h1>Counter Page</h1>
      <p>Count: {count}</p>
      <Button onClick={increment}>Increment</Button>
    </div>
  );
}

export default CounterPage;
