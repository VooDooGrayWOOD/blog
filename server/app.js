const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const chalk = require('chalk')
const cors = require('cors')
const path = require('path')
const initDatabase = require('./startUp/initDatabse')
const routes = require('./routes')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use('/api', routes)

const PORT = config.get('port') ?? 8080

if (process.env.NODE_ENV === 'production') {
    app.use('../client', express.static(path.join(__dirname, 'build')))

    const indexPath = path.join(__dirname, 'build', 'index.html')

    app.get('*', (req, res) => {
        res.sendFile(indexPath)
    })
}

async function start() {
    mongoose.connection.once('open', () => {
        initDatabase()
    })
    try {
        await mongoose.connect(config.get('mongoUri'))
        console.log(chalk.green('MongoDb connected.'))
        app.listen(PORT, () =>
            console.log(chalk.green(`Server has been started on port ${PORT}`))
        )
    } catch (e) {
        console.log(chalk.red(e.message))
        process.exit(1)
    }
}

start()
