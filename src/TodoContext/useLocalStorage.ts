import { useState , useEffect  } from 'react';
import type { Todo } from './todo.types';

function useLocalStorage(itemName: string, initialValue: Todo[]) {

    const [Item,setItem]=useState<Todo[]>(initialValue);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(false);

    
    useEffect(() => {
        setTimeout(() => {
            try {
                    const localStorageItems=localStorage.getItem(itemName);
                    let parsedItems: Todo[]=[];
                    if(!localStorageItems){
                        localStorage.setItem(itemName,JSON.stringify(initialValue));
                        parsedItems=initialValue;
                    }else{
                        parsedItems=JSON.parse(localStorageItems);
                    }
                    setItem(parsedItems);
                    setLoading(false); 
            }catch(error){
                     setError(true);
                     console.log("El error es"+error);
                     setLoading(false); 
            }

        }, 1000);
        },[]);
            
    const saveItem=(newItems: Todo[])=>{
        localStorage.setItem(itemName,JSON.stringify(newItems));
        setItem(newItems);
    }
  
    return {Item,saveItem,error,loading};
}

export { useLocalStorage };