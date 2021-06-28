<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link href="{{ asset('css/app.css') }}" rel="stylesheet"><meta charset="utf-8">
		<link href="https://fonts.googleapis.com/icon?family=Material+Icons"
			rel="stylesheet">
        <title>Laravel + Vue To-do list app</title>
    </head>
    <body class="bg-gray-200">
        <div id="app"></div>
		<script src="{{ mix('js/main.js') }}"></script>
    </body>
</html>
