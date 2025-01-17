
const asyncHandler = (reqMetod) => {
    return (req, resp, next) => {
        Promise.resolve(reqMetod(req, resp, next))
            .catch((err) => {
                next(err)
            })
    }
}

module.exports = asyncHandler;