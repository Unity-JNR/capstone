function errorHandling(err, req, res, next) {
    if (err || (res && res.statusCode && res.statusCode >= 400)) {
        const statusCode = err && err.status ? err.status : (res && res.statusCode) ? res.statusCode : 500;
        res.status(statusCode).json({
            statusCode: statusCode,
            msg: 'Apologies, there seems to be an error in the server. Please try again later.'
        });
    } else {
        next(); // Pass control to the next middleware
    }
}

export { errorHandling };
