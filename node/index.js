import express from 'express'
import { conn } from './db.js'

const app = express()
app.use(express.json())

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.post('/person', async (req, res) => {
  try {
    const data = req.body
    
    if (!data.name) throw new Error('body_att_required: name')

    const command = `
    INSERT INTO people(name)
    VALUES('${data.name}')
    `
    
    conn.query(command)
      
    res.status(201).send(data)
  } catch (e) {
    console.error('app.post error:', e.message)
    res.status(400).send(e.message)
  } finally {
    conn.end()
  }
})

app.listen(port, () => {
  console.log(`✔ app up and listening on port ${port}`)
})
