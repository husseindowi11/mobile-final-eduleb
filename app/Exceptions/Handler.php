<?php

namespace App\Exceptions;

use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Database\QueryException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Symfony\Component\HttpKernel\Exception\MethodNotAllowedHttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array<int, class-string<Throwable>>
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {
        $this->renderable(function (Throwable $e) {

            if ($e instanceof NotFoundHttpException){
                return response()->json([
                    'statusCode' => 404,
                    'message' => 'Could not find what you were looking for.',
                    'data' => null,
                ]);
            }

            if ($e instanceof AuthorizationException){
                return response()->json([
                    'statusCode' => 401,
                    'message' => 'Unauthorized.',
                    'data' => null,
                ]);
            }

            if ($e instanceof MethodNotAllowedHttpException){
                return response()->json([
                    'statusCode' => 405,
                    'message' => 'This method is not allowed for this endpoint.',
                    'data' => null,
                ]);

            }

            if ($e instanceof QueryException ){
                return response()->json([
                    'statusCode' => 500,
                    'message' => 'Sql error occurred.',
                    'data' => null,
                ]);
            }

            if ($e instanceof Throwable){
                return response()->json([
                    'statusCode' => 500,
                    'message' => $e->getMessage() ?? 'An error occurred.',
                    'data' => null,
                ]);
            }
        });
    }
}
