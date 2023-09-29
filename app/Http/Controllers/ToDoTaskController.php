<?php

namespace App\Http\Controllers;

use App\Models\ToDoTask;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ToDoTaskController extends Controller
{
    public function index()
    {
   
    $user = auth()->user();
    $todos = ToDoTask::where('user_id', $user->id)->get();
    return response()->json($todos);

    }

    public function create()
    {
        return response()->json(['message' => 'Tarea creada con éxito']);
    }

    public function save(Request $request)
    {
        $user = auth()->user();

        $todo = new ToDoTask;
        $todo->name = $request->input('name');
        $todo->description = $request->input('description');

        $todo->user_id = $user->id;

        $todo->save();

        return redirect('/#/todolistmanager');
    }

    public function edit(ToDoTask $todo)
    {
        return Inertia::render('ToDoTask/Edit', [
            'todo' => $todo,
        ]);
    } 

    public function editStatus($id)
    {
        $todo = ToDoTask::find($id);
        $todo->completed = !$todo->completed;
        $todo->save();

        return response()->json(['message' => 'Tarea actualizada con éxito']);
    }


    public function delete($id)
    {
        $todo = ToDoTask::find($id);
        $todo->delete();

        return response()->json(['message' => 'Tarea eliminada con éxito']);
    }

    public function update(Request $request, TodoTask $todo)
    {
        $request->validate([
            'name' => 'required|max:255',
            'description' => 'required|max:255',
        ]);

        $todo->name = $request->name;
        $todo->description = $request->description;
        $todo->save();

        return response()->json($todo);
    }
    

    public function destroy(ToDoTask $todo)
    {
        $todo->delete();

        return redirect()->route('todos.index');
    }
}
