<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\UserInfo;
use App\Models\Group;
use App\Models\User;
use Hash;
use Mail;
use App\Mail\User_info;
use Auth;
use Illuminate\Support\Str;

use Session;
class UsersInfoController extends Controller
{
    public function add()
    {
        return view('userInfo.add');
    }
    public function viewUser()
    {
        $info = UserInfo::latest()->paginate(15);
      
        return view('userInfo.view_info',compact('info'))
            ->with('i', (request()->input('page', 1) - 1) * 5);
    } 

    public function addnew(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users',
        ]);
        $data = $request->all();
        $pass_random=Str::random(6);

        $check = $this->create($data,$pass_random);
        
        $user_info=UserInfo::where('email',$request->email)->first();
        $id = md5($user_info->id);
        $url= url('');
        $mailData= 'Fill This Form '. $url.'/data/'.$id;
        $pass_random='This is your temporory password: '. $pass_random. '. Please login on '. $url.' and change it immediately';
        Mail::to($request->email)->send(new User_info($mailData,$pass_random));
        Session::flash('message', 'Email has been sent successfully.'); 
        return view('userInfo.add');
    }
    public function create(array $data,string $pass_random)
    {
     
        $create= User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password'=> Hash::make($pass_random),
        ]);
        $lastInsertID = $create->id;
        return UserInfo::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'user_id' => $lastInsertID ,
        ]);
    }  
    public function data($id)
    {
        $auth_id = Auth::id();
        
        $user_id = UserInfo::where('user_id',$auth_id)->first();
        $user_id_md5 = md5($user_id->id);

        if($id == $user_id_md5){
            $user_info = UserInfo::where('user_id',$auth_id)->first();
            return view('userInfo.addData',compact('user_info'));
        }else{
            Session::flash('message', 'You are not allowed to access this link'); 
            return view('dashboard');
        }
       
    }
    public function addData(request $request,$id)
    {
        $updateData = $request->validate([
            'name' => 'required|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|numeric',
            'address' => 'required',
        ]);
        $auth_id = Auth::id();
        $user_id = UserInfo::where('user_id',$auth_id)->first();
        $user_info = UserInfo::findOrFail($user_id->id);
        UserInfo::whereId($user_id->id)->update($updateData);
        return view('userInfo.addData',compact('user_info'));
    }

    public function showdata($id){
        $user_info = UserInfo::findOrFail($id);
        $groups = Group::get();
        return view('userInfo.assignGroup',compact('user_info','groups'));
    }

    public function assignGroupData($id ,request $request){
        $updateData = $request->validate([
            'group_id' => 'required',
        ]);
        $user_info = UserInfo::findOrFail($id);
        UserInfo::whereId($id)->update($updateData);
        return redirect('/view-user')->with('status', 'Profile updated!');
    }
}
                                                                                                                      