/* istanbul ignore file */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus, RpcExceptionFilter } from '@nestjs/common';
import { AbstractHttpAdapter } from '@nestjs/core';
import { Observable, of } from 'rxjs';
import { InternalException, ValidateException } from 'src/shared/domain/model/exception';
import { HttpApiResponse } from '../api-http.response';
import { ErrorCode } from '../error.code';
import { HttpArgumentsHost, RpcArgumentsHost } from '@nestjs/common/interfaces/features/arguments-host.interface';
import { RpcApiResponse } from '../api-rpc.response';

/**
 * Validate exception filter.
 * Gets an ValidateException in code and creates an error response
 */
@Catch(ValidateException)
export class DefaultValidateExceptionFilter implements RpcExceptionFilter<ValidateException> {
  constructor(private readonly httpAdapter: AbstractHttpAdapter) {}

  catch(exception: ValidateException, host: ArgumentsHost): Observable<HttpApiResponse<any>> {
    if (host.getType() === 'http') {
      return httpValidateExceptionHandler(this.httpAdapter, host.switchToHttp(), exception);
    }

    return rpcValidateExceptionHandler(host.switchToRpc(), exception);
  }
}

/**
 * Internal exception filter
 * Gets an InternalException in code and creates an error response
 */
@Catch(InternalException)
export class DefaultInternalExceptionFilter implements RpcExceptionFilter<InternalException> {
  constructor(private readonly httpAdapter: AbstractHttpAdapter) {}

  catch(exception: InternalException, host: ArgumentsHost): Observable<HttpApiResponse<any>> {
    if (host.getType() === 'http') {
      return httpInternalExceptionHandler(this.httpAdapter, host.switchToHttp(), exception);
    }

    return rpcInternalExceptionHandler(host.switchToRpc(), exception);
  }
}

/**
 * Unhandle error exception filter
 * Gets an Unhandle Exception in code and creates an error response
 */
@Catch()
export class UnknownExceptionsFilter implements ExceptionFilter {
  constructor(private readonly httpAdapter: AbstractHttpAdapter) {}

  catch(exception: unknown, host: ArgumentsHost): any {
    if (host.getType() === 'http') {
      return httpUnknownExceptionHandler(this.httpAdapter, host.switchToHttp(), exception);
    }

    return rpcUnknownExceptionHandler(host.switchToRpc(), exception);
  }
}

function httpValidateExceptionHandler(httpAdapter: AbstractHttpAdapter, context: HttpArgumentsHost, exception: ValidateException): any {
  const responseBody = HttpApiResponse.failed(exception.code, exception.message);
  httpAdapter.reply(context.getResponse(), responseBody, 400);
  return null;
}

function httpInternalExceptionHandler(httpAdapter: AbstractHttpAdapter, context: HttpArgumentsHost, exception: InternalException): any {
  const responseBody = HttpApiResponse.failed(exception.code, exception.message);
  httpAdapter.reply(context.getResponse(), responseBody, 500);
  return null;
}

function httpUnknownExceptionHandler(httpAdapter: AbstractHttpAdapter, context: HttpArgumentsHost, exception: unknown): any {
  const httpStatus = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
  const responseBody = HttpApiResponse.failed(ErrorCode.UNKNOWN, 'Unhandle exception');
  httpAdapter.reply(context.getResponse(), responseBody, httpStatus);

  return null;
}

function rpcValidateExceptionHandler(_ctx: RpcArgumentsHost, exception: ValidateException): Observable<HttpApiResponse<any>> {
  return of(RpcApiResponse.badRequest(exception.code, exception.message));
}

function rpcInternalExceptionHandler(_ctx: RpcArgumentsHost, exception: InternalException): any {
  return of(RpcApiResponse.internalError(exception.code, exception.message));
}

function rpcUnknownExceptionHandler(_ctx: RpcArgumentsHost, _exception: unknown): any {
  return of(RpcApiResponse.internalError(ErrorCode.UNKNOWN, 'unknow exception'));
}
