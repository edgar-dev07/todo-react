import { useState } from 'react';
import type { Todo } from './todo.types';

function useLocalStorage(itemName: string, initialValue: Todo[]) {
  
    const localStorageItems = localStorage.getItem(itemName);
    let parsedItems: Todo[];

  if (!localStorageItems) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItems = initialValue;
  } else {
    parsedItems = JSON.parse(localStorageItems) as Todo[];
  }

  const [items, setItems] = useState<Todo[]>(parsedItems);

  const saveItem = (newItems: Todo[]) => {
    localStorage.setItem(itemName, JSON.stringify(newItems));
    setItems(newItems);
  };

  return [items, saveItem] as const;
}

export { useLocalStorage };