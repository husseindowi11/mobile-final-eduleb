<?php

namespace App\Exceptions;

use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Database\QueryException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Validation\UnauthorizedException;
use Illuminate\Validation\ValidationException;
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

    public function report(Throwable $exception)
    {
        parent::report($exception);
    }


    public function render($request, Throwable $exception)
    {


        if ($exception instanceof ValidationException){
            return response()->json([
                'statusCode' => $exception->status,
                'message' =>  $exception->errors(),
                'data' => null,
            ]);
        }

        if ($exception instanceof ModelNotFoundException){
            return response()->json([
                'statusCode' => 404,
                'message' => str_replace('App\\Models\\', '', $exception->getModel()).' not found.',
                'data' => null,
            ]);
        }

        if ($exception instanceof NotFoundHttpException){
            return response()->json([
                'statusCode' => $exception->getStatusCode(),
                'message' => 'Could not find what you were looking for.',
                'data' => null,
            ]);
        }

        if ($exception instanceof MethodNotAllowedHttpException){
            return response()->json([
                'statusCode' => $exception->getStatusCode(),
                'message' => 'This method is not allowed for this endpoint.',
                'data' => null,
            ]);

        }

        if ($exception instanceof QueryException ){
            return response()->json([
                'statusCode' => 500,
                'message' => $exception->getMessage(),
                'data' => null,
            ]);
        }

        if ($exception instanceof AuthorizationException){
            return response()->json([
                'statusCode' => 1,
                'message' => 'Unauthorized.',
                'data' => null,
            ]);
        }

        if ($exception instanceof Throwable){
            return response()->json([
                'statusCode' => $exception->getCode(),
                'message' => $exception->getMessage() ?? 'An error occurred.',
                'data' => null,
            ]);
        }

        return parent::render($request, $exception);
    }
}
