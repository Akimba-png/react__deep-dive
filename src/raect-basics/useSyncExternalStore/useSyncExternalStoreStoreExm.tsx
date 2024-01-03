import { ChangeEvent, useState, useSyncExternalStore, MouseEvent } from 'react';

interface ITodo {
  id: number;
  content: string;
}

class Store {
  todos: ITodo[];
  listeners: (() => void)[];
  id: number = 0;

  constructor() {
    this.todos = [{id: 0, content: 'default'}];
    this.listeners = [];
    this.subscribe = this.subscribe.bind(this);
    this.getSnapshot = this.getSnapshot.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }
  // сигнатура метода определена реактом в useSyncExternalStore
  subscribe(cb: () => void) {
    // данный cb подставляется самим react и вызывает ререндер компонента
    this.listeners = [...this.listeners, cb];
    return () => this.listeners.filter(listener => listener !== cb);
  }

  getSnapshot() {
    return this.todos;
  }

  emmit() {
    this.listeners.forEach(listener => listener());
  }

  addTodo(todo: string) {
    this.todos = [...this.todos, {id: ++this.id, content: todo}];
    this.emmit();
  }
}

const store = new Store();

export function UseSyncExternalStoreStoreExample(): JSX.Element {
  const data = useSyncExternalStore(store.subscribe, store.getSnapshot);
  const [ content, setContent ] = useState<string>('');
  const inputHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    setContent(evt.target.value)
  };
  const buttonHandler = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    store.addTodo(content);
  };
  return (
    <>
      <h2>useSyncExternalStore</h2>
      <form>
        <input
          type='text'
          name='todo'
          value={content}
          onChange={inputHandler}
        />
        <button
          type='button'
          onClick={buttonHandler}
          >add content</button>
      </form>
      {data.map(todo => (
        <div key={todo.id}>
          <h3>todo number {todo.id}</h3>
          <p>{todo.content}</p>
        </div>
      ))}
    </>
  );
}
