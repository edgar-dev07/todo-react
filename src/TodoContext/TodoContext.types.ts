import type { Todo } from "./todo.types";

export interface TodoContextProps {
  totalTodos: number;
  completedTodos: number;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  TodoFilter: Todo[];
  completeTodos: (todo: Todo) => void;
  deleteTodos: (todo: Todo) => void;
  loading: boolean;
  error: unknown;
}

export interface TodoProviderProps {
  children: React.ReactNode;
}


