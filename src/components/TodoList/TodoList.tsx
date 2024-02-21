import style from './TodoList.module.scss'

import { useAppSelector } from '../../hooks/useApp';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = () => {
  const todos = useAppSelector(state => state.todos.list);

  return (
    <ul className={style.list}>
      {todos.map((todo) => {
        // console.log('todo: ', todo);
        return (
          <TodoItem
            key={todo.id}
            {...todo}
          />
        )
      })}
    </ul>
  );
};

export default TodoList;
