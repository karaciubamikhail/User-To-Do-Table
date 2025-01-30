import React, { useEffect, useState } from "react";
import { fetchTodos, fetchUsers, Todo, User } from "../api";
import "./UserTodoTable.css"; // Подключаем стили
import avatar from "../assets/avatar.svg";

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const usersData = await fetchUsers();
      const todosData = await fetchTodos();
      setUsers(usersData);
      setTodos(todosData);
      setLoading(false);
    };
    loadData();
  }, []);

  if (loading) return <div className="loading">Загрузка...</div>;

  return (
    <div className="container">
      <div className="wrapper">
        <h1 className="header">User To-Do Table</h1>
        <h2 className="subheader">User task table for effective planning.</h2>
        <div className="tableWrapper">
          <table className="table">
            <thead>
              <tr>
                <th className="index">#</th>
                <th>Username</th>
                <th>To-Do Count</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <td className="index">{index + 1}</td>
                  <td>
                    <div className="userInfo">
                      <img className="avatar" src={(user.avatar !== undefined) ? user.avatar : avatar } alt="avatar" />
                      <div>
                        <h3 className="userName">{user.name}</h3>
                        <p className="userEmail">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td>{todos.filter((todo) => todo.userId === user.id).length}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>  
    </div>
  );
};

export default App;