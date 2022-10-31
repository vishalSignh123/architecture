enum StatusCodeEnum {
    UNKNOWN_CODE = 0,
    OK = 200,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    UNPROCESSABLE_ENTITY = 422,
    INTERNAL_SERVER_ERROR = 500,
    GATEWAY_TIMEOUT = 504,
}
export default StatusCodeEnum;