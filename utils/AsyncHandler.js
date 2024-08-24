module.exports = asyncHandler = (fn) => async(req, res) => {
    try {
        await fn(req, res);
    } catch (error) {
        res.status(error.code || 500).json({
            message: 'some error occured: '+ error,
            error: error
        })
    }
}
