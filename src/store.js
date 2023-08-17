import { v4 as uuidv4 } from 'uuid';
import { makeAutoObservable } from 'mobx';
import { createContext } from 'react';

class Todo {
  id = uuidv4();
  text = '';
  done = false;

  constructor(text) {
    makeAutoObservable(this);
    this.text = text;
  }

  toggleCompleted() {
    this.done = !this.done;
  }
}

class TodoStore {
  todos = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(text) {
    this.todos.push(new Todo(text));
  }

  removeTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}

export const todoStore = new TodoStore();
export const TodoStoreContext = createContext(todoStore);
