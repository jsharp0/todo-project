import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoContainerComponent } from './todo-container/todo-container.component';
import { TodoItemComponent } from './todo-container/todo-item/todo-item.component';
import { CheckboxComponent } from './ui-components/checkbox/checkbox.component';
import { InputTodoComponent } from './ui-components/input-todo/input-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoContainerComponent,
    TodoItemComponent,
    CheckboxComponent,
    InputTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
