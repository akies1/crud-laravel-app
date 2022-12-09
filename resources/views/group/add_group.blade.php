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
                <li class="breadcrumb-current-item"> Add Group </li>
            </ol>

        </div>
    </header>
    <main class="signup-form">
        <div class="container">
            <div class="row justify-content-center style">
                <div class="col-md-4">
                    <div class="card">
                        <h3 class="card-header text-center">Add Group</h3>


                        <div class="card-body">
                            <form action="" method="POST">
                                @csrf
                                <div class="form-group mb-3">
                                    <input type="text" placeholder="Group Name" id="name" class="form-control" name="name"
                                        required autofocus>
                                    @if ($errors->has('name'))
                                    <span class="text-danger">{{ $errors->first('name') }}</span>
                                    @endif
                                </div>
                                <div class="form-group mb-3">
                                    <input type="text" placeholder="Description" id="desc" class="form-control"
                                        name="desc" required autofocus>
                                    @if ($errors->has('desc'))
                                    <span class="text-danger">{{ $errors->first('desc') }}</span>
                                    @endif
                                </div>
                               
                                <div class="d-grid mx-auto">
                                    <button type="submit" class="btn btn-dark btn-block">Add </button>
                                </div>

                            </form>
                            <!-- <div class="center style">

                                <a href="/view-user">
                                    <input type="submit" value="View" class="btn btn-warning"></a>

                            </div> -->
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