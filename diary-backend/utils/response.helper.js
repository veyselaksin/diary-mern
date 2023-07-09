function Response(res, status, message, data, success) {
    return res.status(status).json({
        message: message,
        data: data,
        success: success
    })
}

function SuccessResponse(res, message, data, status) {
    return new Response(res, status, message, data, true)
}

function ErrorResponse(res, message, status) {
    return new Response(res, status, message, [], false)
}

export { SuccessResponse, ErrorResponse }
