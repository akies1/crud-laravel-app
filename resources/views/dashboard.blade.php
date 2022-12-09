@extends('layouts.layouts.base')
@section('content')
@if(Session::has('message'))
<p class="alert {{ Session::get('alert-class', 'alert-info') }}">{{ Session::get('message') }}</p>
@endif
<div class="content">
<h1>Dashboard</h1>
</div>
@endsection
