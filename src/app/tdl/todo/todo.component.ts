import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/shared/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public todoList: any[] = []
  public taskToBeUpdated: any
  public idVal: any

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    debugger
    this.todoService.firestoreCollection.valueChanges({idField: 'id'}).subscribe(res => {
      debugger
      this.todoList = res.sort((a:any, b:any) => 
      {return a.isDone - b.isDone} )
    })
  }

  onClick(titleInput: HTMLInputElement) {
    if(titleInput.value) {
      this.todoService.addTask(titleInput.value)
      titleInput.value = ""
    }
  }

  onStatusChange(id: string, newStatus: boolean) {
    debugger
    this.todoService.updateStatus(id, newStatus)

  }

  onDelete(id: string) {
    this.todoService.deleteTask(id)
  }

  onUpdate(id: string, newTitle: string) {
    debugger
    this.todoService.updateTask(id, newTitle)
    // this.ngOnInit()
  }

  openUpdateModal(id: string, title: string) {
    debugger
    this.taskToBeUpdated = title
    this.idVal = id
  }

}
