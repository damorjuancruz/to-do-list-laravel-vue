<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Todo;

class TodosAPIController extends Controller
{
	public function index () {
		return Todo::all();
	}

	public function new () {
		request() -> validate([
			'text' => 'required',
			'done' => 'required',
		]);
		return Todo::create([
			'text' => request('text'),
			'done' => request('done'),
		]);
	}
	// public function edit ($id) {
	// 	$todo = Todo::findOrFail($id);
	// 	// ...
	// }
	public function edit (Todo $todo) {
		$text = request('text') !== null ? request('text') : $todo->text;
		$done = request('done') !== null ? request('done') : $todo->done;
		$success = $todo->update([
			'text' => $text,
			'done' => $done,
		]);
		return [
			'success' => $success
		];
	}
	public function delete (Todo $todo){
		$success =  $todo -> delete();
		return [
			'success' => $success
		];
	}
}
