# Frontend Documentation for Todo App   

## This documentation outlines the frontend implementation for the Todo App. The Todo App allows users to create, list and manage tasks.  The frontend is built with HTML, CSS, and JavaScript and integrated with the backend API using Express and MongoDB.

**LIVE LINK** https://tourmaline-figolla-8aaad3.netlify.app/

## Required Features  
The following are the required features for the frontend implementation of the Todo App:  

-Create a task with priority (1-9)   
-List the tasks  
-Report of tasks   
-Mark as completed    
-Mark as canceled  
-Delete a task from list   
-Create a Task   
-Users can create a new task by filling out the form on the create task page. The form allows the user to specify the task name and its priority level, which should be between 1 and 9.

## List the Tasks    
The app displays the list of tasks on the main page. Each task is displayed with its index number, task name, and priority level inside square brackets. If the task is completed, a tick mark is displayed inside the brackets, and if the task is canceled, a cross mark is displayed inside the brackets.

## Report of Tasks    
The app provides a report of tasks that shows the total count of tasks based on their status, such as pending tasks, canceled tasks, deleted tasks, and completed tasks. The app also sorts the tasks based on their status, such as pending, canceled, and completed tasks.

## Mark as Completed    
The user can mark a task as completed by clicking the tick mark inside the brackets next to the task.

## Mark as Canceled   
The user can mark a task as canceled by clicking the cross mark inside the brackets next to the task.

## Delete a Task from List   
The user can delete a task from the list by clicking the delete button next to the task.

## Integration with Backend API 
The frontend is integrated with the backend API using Express and MongoDB. The API provides endpoints for creating, retrieving, updating, and deleting tasks.  
The Backend Repo: https://github.com/pnkjxmwl/FullStack-ToDoApp-backend     
The API endpoints are:

GET /api - retrieves a list of all tasks   
POST /api/save - creates a new task       
PUT /api/update - updates a task with the given ID    
DELETE /api/delete - deletes a task with the given ID    
The frontend uses **axios** to make requests to the API and update the page dynamically based on the response.

## Conclusion    
This documentation outlines the required features and integration of the frontend for the Todo App. The app allows users to create, list, and manage tasks, and is integrated with the backend API using Express and MongoDB.
