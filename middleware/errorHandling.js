function errorHandling(err, req, res, next) {
    if (err || (res && res.statusCode >= 400)) {
        res.status(err.status || res.statusCode || 500).json({
            statusCode: err.status || res.statusCode || 500,
            msg: 'Apologies, there seems to be an error in the server. Please try again later.'
        });
    } else {
        next();
    }
}

export { errorHandling };
