@extends('layouts.layouts.base')
@section('content')
@if(Session::has('message'))
<p class="alert {{ Session::get('alert-class', 'alert-info') }}">{{ Session::get('message') }}</p>
@endif
<div class="content">

    <main class="signup-form">
        <div class="container">
            <div class="row justify-content-center style">
                <div class="col-md-4">
                    <div class="card">
                        <h3 class="card-header text-center">Add personal Data</h3>
                        <div class="card-body">
                            <form action="" method="POST">
                                @csrf
                                <div class="form-group mb-3">
                                    <input type="text" placeholder="Name" id="name" class="form-control" name="name" value="{{$user_info->name}}"
                                        required autofocus>
                                    @if ($errors->has('name'))
                                    <span class="text-danger">{{ $errors->first('name') }}</span>
                                    @endif
                                </div>
                                <div class="form-group mb-3">
                                    <input type="text" placeholder="Email" id="email_address" class="form-control"
                                        name="email" value="{{$user_info->email}}" required autofocus>
                                    @if ($errors->has('email'))
                                    <span class="text-danger">{{ $errors->first('email') }}</span>
                                    @endif
                                </div>
                                <div class="form-group mb-3">
                                    <input type="text" placeholder="phone" id="phone" class="form-control" name="phone" value="{{$user_info->phone}}"
                                        required autofocus>
                                    @if ($errors->has('phone'))
                                    <span class="text-danger">{{ $errors->first('phone') }}</span>
                                    @endif
                                </div>   <div class="form-group mb-3">
                                    <input type="text" placeholder="address" id="address" class="form-control" name="address" value="{{$user_info->address}}"
                                        required autofocus>
                                    @if ($errors->has('address'))
                                    <span class="text-danger">{{ $errors->first('address') }}</span>
                                    @endif
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