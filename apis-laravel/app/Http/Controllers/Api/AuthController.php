<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Auth\authResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => ['required', 'confirmed', Password::defaults()],
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return response()->json([
            'status_code' => 200,
            'message' => 'Register successful.',
            'data' => new authResource($user),
        ]);
    }

    public function login(Request $request)
    {

        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $user = User::where('email', $request->email)->first();

        if (! $user || ! Hash::check($request->password, $user->password)) {
            return response()->json([
                'status_code' => 401,
                'message' => 'Login failed.',
                'is_authenticated' => false,
                'data' => null,
            ]);
        }

        $user->access_token = $user->createToken($request->email)->plainTextToken;

        return response()->json([
            'status_code' => 200,
            'message' => 'Login successful.',
            'is_authenticated' => true,
            'data' => new authResource($user),
        ]);
    }

    public function logout(Request $request)
    {


        auth()->user()->tokens()->delete();


        return response()->json([
            'status_code' => 200,
            'message' => 'Logout Successful.',
            'data' => null,
        ]);
    }
}
