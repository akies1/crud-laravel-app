@extends('layouts.layouts.base')
@section('content')
@if(Session::has('message'))
<p class="alert {{ Session::get('alert-class', 'alert-info') }}">{{ Session::get('message') }}</p>
@endif
<div class="content">

    <header id="topbar" class="alt">
        <div class="topbar-left">

            <ol class="breadcrumb">
                <li class="breadcrumb-icon">
                    <a href="/dashboard">
                        <span class="fa fa-home"></span>
                    </a>
                </li>
                <li class="breadcrumb-active">
                    <a href="/dashboard"> Dashboard </a>
                </li>
                <li class="breadcrumb-link">
                    <a href=""> Add </a>
                </li>
                <li class="breadcrumb-current-item"> Add User </li>
            </ol>

        </div>
    </header>
    <main class="signup-form">
        <div class="container">
            <div class="row justify-content-center style">
                <div class="col-md-4">
                    <div class="card">
                        <h3 class="card-header text-center">Add User</h3>


                        <div class="card-body">
                            <form action="" method="POST">
                                @csrf
                                <div class="section">
                                        <label for="input002">
                                            <h6 class="mb20 mt40"> Group </h6>
                                        </label>
                                 
                                        <select class="select2-single form-control" name="group_id" id="group_id" required>
                                            <option value="">Select Group</option>
                                            @foreach($groups as $group)
                                            <option value="{{$group->id}}">{{$group->name}}</option>
                                            @endforeach
                                        </select>
                                     
                                    </div>
                                <div class="form-group mb-3">
                                    
                                    <span class="text-danger">@error ('name'){{$message}}@enderror</span>
                                </div>
                             
                                <div class="d-grid mx-auto">
                                    <button type="submit" class="btn btn-dark btn-block">Add </button>
                                </div>

                            </form>
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</div>
@endsection
<style>
.style {
    display: flex;
    justify-content: center;
}
</style>