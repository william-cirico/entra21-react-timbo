module.exports = (error, req, res, next) => {
    if (!error.status) error.status = 500;

    res.status(error.status);
    res.json({ message: error.message });
};