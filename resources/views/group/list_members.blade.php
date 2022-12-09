@extends('layouts.layouts.base')
@section('content')
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
                    <a href=""> groups </a>
                </li>
                <li class="breadcrumb-current-item">  Listings </li>
            </ol>
        </div>
    </header>
<main class="signup-form">
    <div class="cotainer">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <h3 class="card-header text-center"> Groups Listing</h3>
                   
                    <div class="col-md-12">
                            @if(Session::has('flash_message'))
                                <div class="alert alert-success">
                                    {{ Session::get('flash_message') }}
                                    </div>
                            @endif
                            <div class="col-md-12">
                            <table class="table allcp-form theme-warning tc-checkbox-1 fs13">
                                    <thead>
                                    <tr class="bg-light">
                                        <th class="text-center">Sr.No</th>
                                        <th class="text-center">Name</th>
                                        <th class="text-center">email</th>
                                        <th class="text-center">Phone</th>

                                    </tr>
                                    </thead>
                                    <tbody>
                                    @foreach($members as $lists)
                                    <tr>
                                        <td class="text-center">{{ ++$i }}</td>
                                        <td class="text-center">{{$lists->name}}</td>
                                        <td class="text-center">{{$lists->email}}</td>
                                        <th class="text-center">{{$lists->phone}}</th>

                                       
                                    </tr>
                                    @endforeach
                                    </tbody>
                                </table>
                                {!! $members->links() !!}
                            </div>
                        </div>
                </div>
            </div>
            
        </div>
    </div>
</main>
</div>
@endsection
<style>

.style{
    display:flex;
    justify-content:center;
}
</style>
