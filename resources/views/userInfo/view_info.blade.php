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
                    <a href=""> view </a>
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
                    <h3 class="card-header text-center">View User</h3>
                   
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
                                        <th class="text-center">Email</th>
                                        <th class="text-center">Phone</th>
                                        <th class="text-center">Address</th>
                                        <!-- <th class="text-center">Status</th> -->
                                        <th class="text-center">Action</th>

                                       
                                    </tr>
                                    </thead>
                                    <tbody>
                                    @foreach($info as $infor)
                                    <tr>
                                        <td class="text-center">{{ ++$i }}</td>
                                        <td class="text-center">{{$infor->name}}</td>
                                        <td class="text-center">{{$infor->email}}</td>
                                        <td class="text-center">{{$infor->phone}}</td>
                                        <td class="text-center">{{$infor->address}}</td>
                                        <!-- <td class="text-center">{{$infor->status}}</td> -->
                                        @if($infor->address == NULL)
                                        <td class="text-center">View</td>
                                        @else
                                        <td class="text-center">
                                            <div class="btn-group text-right">
                                                <a href="/showdata/{{$infor->id}}">View</a>
                                            </div>
                                        </td>
                                      
                                        @endif
                                    </tr>
                                    @endforeach
                                    </tbody>
                                </table>
                                {!! $info->links() !!}

                            </div>
                        </div>
                </div>
            </div>
            
        </div>
    </div>
    <div class="style">
        <a href="/add" ><input type="submit" value="Add New" class="btn btn-warning"></a>
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
