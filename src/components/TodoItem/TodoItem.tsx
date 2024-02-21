import style from './TodoItem.module.scss'

import { useAppDispatch } from '../../hooks/useApp';
import { toggleComplete, removeTodo } from '../../store/todoSlice';

interface TodoItemProps {
  id: string;
  title: string;
  completed: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, title, completed }) => {
  const dispatch = useAppDispatch();

  return (
    <li className={style.listItem}>
      <input
        type='checkbox'
        checked={completed}
        onChange={() => dispatch(toggleComplete(id))}
      />
      <span className={style.del} onClick={() => { if(window.confirm(`Удалить?`))  dispatch(removeTodo(id))}}>&times;</span>
      <span className={completed ? style.completed : ''}>{title}</span>
    </li>
  );
};

export default TodoItem;