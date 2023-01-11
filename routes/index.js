//const { Router } = require('express')
const fs = require('fs')
const path = require('path')
const router = require('express').Router()
let notes = require('../db/db.json')

router.get('/', (req, res) => {

    res.sendFile(path.join(__dirname, '../public/index.html'))

})

router.get('/notes', (req, res) => {

    res.sendFile(path.join(__dirname, '../public/notes.html'))

})

router.get('/api/notes', (req, res) => {
    res.json(notes)
})


router.post('/api/notes', (req, res) => {
    const newNote = {

        id: notes.length+1,
        title: req.body.title,
        text: req.body.text
    }

    notes.push(newNote)

    console.log(notes)

    fs.writeFileSync()

    res.send(notes)
})

router.delete('/api/notes/:id', (req, res) => {
    res.send('delete request at /api/node/:id')

    

    fs.writeFileSync('../db/db.json', JSON.stringify(notes))
    res.json(notes)
})



router.listen(PORT, () => {
    console.log('request made to port' + PORT)
})

