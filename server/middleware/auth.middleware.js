const tokenService = require('../services/token.service')

module.exports = (req, res, next) => {
    if (req.method === 'OPTIONS') {
        return next()
    }

    try {
        const token = req.headers.authorization.split(' ')[1]
        console.log(token);
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized' })
        }

        const data = tokenService.validateAccess(token)
        console.log(data)
        if (!data) {
            return res.status(401).json({message: 'Unauthorized'})
        }

        req.user = data

        next()
    } catch (e) {
        res.status(401).json({ message: 'Unauthorized' })
    }
}