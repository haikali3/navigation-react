import { useReducer } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';

const INCREMENT_COUNT = 'increment';
const DECREMENT_COUNT = 'decrement';
const SET_VALUE_TO_ADD = 'value-to-add';

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state, // spread operator
        count: state.count + 1,
      };
    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };
    case SET_VALUE_TO_ADD:
      return {
        ...state,
        valueToAdd: action.payload,
      };
    default:
      return state;
  }
};

function CounterPage({ initialCount }) {
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(0);

  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });
  console.log(state);

  const increment = () => {
    // setCount(count + 1);
    dispatch({ type: 'INCREMENT_COUNT' });
  };
  const decrement = () => {
    // setCount(count - 1);
    dispatch({ type: 'DECREMENT_COUNT' });
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;

    dispatch({ type: 'value-to-SET_VALUE_TO_ADD', payload: value });
    // setValueToAdd(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // setCount(count + parseInt(valueToAdd));
    // setValueToAdd(0);
    dispatch({ type: 'value-to-add' });
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Counter Page</h1>
      <p>Count: {state.count}</p>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label htmlFor="">Add a lot</label>
        <input
          value={state.valueToAdd || ''}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-slate-200 border-1 py-1.5 pl-4 text-gray-900 ring-9 ring-inset ring-gray-300 rounded-md"
        />
        <Button>Add</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
