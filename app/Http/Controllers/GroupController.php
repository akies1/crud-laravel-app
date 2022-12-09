<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Group;
use App\Models\UserInfo;


class GroupController extends Controller{

  public function viewGroup(){
    return view('group.add_group');
  }

  public function addGroup(request $request){
    $request->validate([
        'name' => 'required',
        'desc' => 'required',
    ]);
    $data = $request->all();
    $check = $this->create($data);
    return view('group.add_group');
  }
  public function create(array $data)
  {
    return Group::create([
      'name' => $data['name'],
      'desc' => $data['desc'],
    ]);
  } 

  public function listGroup(){
    $members = UserInfo::get();
    $list = Group::latest()->paginate(15);
    return view('group.list_group',compact('list','members'))
    ->with('i', (request()->input('page', 1) - 1) * 5);
  }
  public function groupMembers($id){
    $members = UserInfo::where('group_id',$id)->paginate(15);
    return view('group.list_members',compact('members'))
    ->with('i', (request()->input('page', 1) - 1) * 5);
  }
  
}