import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from './models/Todo';

@Injectable({
    providedIn: 'root'
})
export class TodoService {

    constructor(private http: HttpClient) {
    }

    fetchTodos() {
        return this.http.get<Todo[]>('https://5ea6f79384f6290016ba78c2.mockapi.io/api/todo');
    }

    deleteTodo(id: number) {
        return this.http.delete(`https://5ea6f79384f6290016ba78c2.mockapi.io/api/todo/${id}`);
    }

    addTodo(payload: Todo) {
        return this.http.post<Todo>('https://5ea6f79384f6290016ba78c2.mockapi.io/api/todo', payload);
    }

    updateTodo(payload: Todo, id: number) {
        return this.http.put<Todo>(`https://5ea6f79384f6290016ba78c2.mockapi.io/api/todo/${id}`, payload);
    }
}