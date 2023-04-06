function errorMiddleware(error, req, res, next) {
    console.log('errorCheck', error)
    let code = 500;
    let message = 'internal server error';

    if ( error.name == 'JsonWebTokenError') {
        code = 401;
        message = 'invalid token'
    } else if (error.name == 'InvalidToken') {
        code = 401;
        message = 'invalid token';
    } else if (error.name == 'Unauthorized') {
        code = 401;
        message = 'unauthorized';
    } else if (error.name = "ErrNotFound") {
        code = 404;
        message = 'photo not found';
    } else if (error.name === "SequelizeValidationError") {
        const validationErrors = error.errors.map((error) => {
            return error.message
        });
        code = 400;
        message = 'validationErrors';
    } else if (error.name === "SequelizeForeignKeyConstraintError") {
        const validationErrors = error.errors.map((error) => {
            return error.message
        })
        code = 400;
        message = 'User doesnt exist';
    } else if (error.name === "EmailNotFound" || error.name === "WrongPassword") {
        code = 401;
        message = 'wrong email or password';
    } else if (error.name === 'SequelizeUniqueConstraintError') {
        code = 400;
        message = 'bad request';
    } else if (error.name === 'PageNotFound') {
        code = 404;
        message = 'nothing here';
    } 
    return res.status(code).json({ message})

}

module.exports = errorMiddleware;