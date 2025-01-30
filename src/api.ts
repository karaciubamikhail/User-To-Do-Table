export interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }
  
  export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    avatar?: string;
  }
  
  export const fetchTodos = async (): Promise<Todo[]> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    return response.json();
  };
  
  export const fetchUsers = async (): Promise<User[]> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    return response.json();
  };