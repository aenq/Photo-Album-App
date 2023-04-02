function authenticationMiddleware (req, res, next) {
    const { Authorization } = req.headers;
    console.log(Authorization);
    next();
}

module.exports = authenticationMiddleware;