<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Hash;
use Session;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
class CustomAuthController extends Controller
{
    public function index()
    {
        // if ((Auth::user()->password_change_at == null)) {
        //     return redirect(route('change-password'));
        //  }
        //  else{
            return view('auth.login');   
        //  }
     
    }  

    public function customLogin(Request $request)
    {
        $request->validate([
            'email' => 'required',
            'password' => 'required',
        ]);
   
        $credentials = $request->only('email', 'password');
        if (Auth::attempt($credentials)) {
               if((Auth::user()->password_change_at == null)) {
                    return redirect(route('change-password'));
                }
                else{
                    return redirect()->intended('dashboard')->withSuccess('Signed in');
                }
        }
  
        return redirect("login")->withSuccess('Login details are not valid');
    }

    public function registration()
    {
        return view('auth.registration');
    }
      
    public function customRegistration(Request $request)
    {  
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6',
        ]);
           
        $data = $request->all();
        $check = $this->create($data);
         
        return redirect("dashboard")->withSuccess('You have signed-in');
    }

    public function create(array $data)
    {
      return User::create([
        'name' => $data['name'],
        'email' => $data['email'],
        'password' => Hash::make($data['password'])
      ]);
    }    
    
    public function dashboard()
    {
        if(Auth::check()){
            return view('dashboard');
        }
  
        return redirect("login")->withSuccess('You are not allowed to access');
    }
    
    public function signOut() {
        Session::flush();
        Auth::logout();
  
        return Redirect('login');
    }
    public function changePassword(request $request) {
        $password = $request->old;
		$user = User::where('id', \Auth::user()->id)->first();

		if (Hash::check($password, $user->password)) {
			$user->password = bcrypt($request->new);
			$user->save();
			\Auth::logout();

			return redirect()->to('/')->with('message', 'Password updated! LOGIN again with updated password.');
		} else {
			\Session::flash('flash_message', 'The supplied password does not matches with the one we have in records');

			return redirect()->back();
		}
    }
    
}