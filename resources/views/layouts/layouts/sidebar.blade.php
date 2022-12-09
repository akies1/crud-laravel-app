<!-- -------------- Sidebar - Author -------------- -->
<div class="sidebar-widget author-widget">
    <div class="media">
        <a href="/profile" class="media-left">
            @if(isset(Auth::user()->employee->photo))
                <img src="{{asset('photos/'.Auth::user()->employee->photo)}}" width="40px" height="30px" class="img-responsive">
            @else
                <img src="/assets/img/avatars/profile_pic.png" class="img-responsive">
            @endif

        </a>

        <div class="media-body">
            <div class="media-author"><a href="/profile"></a></div>
        </div>
    </div>
</div>

<!-- -------------- Sidebar Menu  -------------- -->
<ul class="nav sidebar-menu scrollable">
    <li class="active">
        <a  href="{{route('dashboard')}}">
            <span class="fa fa-dashboard"></span>
            <span class="sidebar-title">Dashboard</span>
        </a>
    </li>
  
        <li>
            <a class="accordion-toggle" href="/dashboard">
                <span class="fa fa-user"></span>
                <span class="sidebar-title">Add</span>
                <span class="caret"></span>
            </a>
            <ul class="nav sub-nav">
                <li>
                    <a href="{{route('add')}}">
                        <span class="glyphicon glyphicon-tags"></span> Add  </a>
                </li>
                <li>
                    <a href="{{route('view-user')}}">
                        <span class="glyphicon glyphicon-tags"></span> Listing </a>
                </li>
            </ul>
        </li>
        <li>
            <a class="accordion-toggle" href="/dashboard">
                <span class="fa fa-user"></span>
                <span class="sidebar-title"> Groups</span>
                <span class="caret"></span>
            </a>
            <ul class="nav sub-nav">
                <li>
                    <a href="{{route('add-group')}}">
                        <span class="glyphicon glyphicon-tags"></span> Add  </a>
                </li>
                <li>
                    <a href="{{route('list-group')}}">
                        <span class="glyphicon glyphicon-tags"></span> Listing </a>
                </li>
            </ul>
        </li>
    <p> &nbsp; </p>
</ul>
<!-- -------------- /Sidebar Menu  -------------- -->