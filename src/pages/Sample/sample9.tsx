import { useReducer, useState } from 'react';

type State = {
  id: number;
  text: string;
};

type AddAction = {
  text: string;
  type: 'ADD';
};

type DeleteAction = {
  id: number;
  type: 'DELETE';
};

type Action = AddAction | DeleteAction;

const initialState: State[] = [
  {
    id: 0,
    text: 'initial todo',
  },
];

// stateとactionを受け取り、actionのtypeによってstateの更新方法を変える
const reducer = (state: State[], action: Action): State[] => {
  console.log(state, action, 'reducer');
  console.log(state.slice(-1));
  switch (action.type) {
    case 'ADD':
      return [...state, { id: state.slice(-1)[0].id + 1, text: action.text }];
    case 'DELETE':
      if (state.length === 1) {
        return state;
      }
      return state.filter((todo) => {
        return todo.id !== action.id;
      });
  }
};

const Sample9 = () => {
  const [text, setText] = useState('');
  const [todoList, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>useReducer</h1>
      <div>
        <label>
          todo
          <input
            type='text'
            value={text}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              return setText(e.target.value);
            }}
          />
        </label>
        <button
          onClick={() => {
            return dispatch({ text: text, type: 'ADD' });
          }}
        >
          Add todo
        </button>
        <ol>
          {todoList.map((todo) => {
            return (
              <div key={todo.id} className='flex'>
                <li className=''>{todo.text}</li>
                <button
                  onClick={() => {
                    return dispatch({ id: todo.id, type: 'DELETE' });
                  }}
                >
                  ✖
                </button>
              </div>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default Sample9;
