const express = require('express')
const app = express();

app.use(express.json());

// app.get()
// app.post()
// app.put()
// app.delete()

const courses = [
    {id:1, name:'Course 1'},
    {id:2, name:'Course 2'},
    {id:3, name:'Course 3'}
]


app.get('/', (req,res) => {
    res.send('Hello World!!!');
})

app.get('/api/courses', (req,res) =>{
    res.send(courses);
})

app.get('/api/courses/:id', (req,res)=>{
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if(!course){
        res.status(404).send('The course with the given id was not found.')
    }
    else{
        res.send(course)
    }
})

app.get('/api/posts/:year/:month', (req,res) =>{
    res.send(req.params)
})

app.get('/api/courses/:id', (req,res)=>{
    res.send(req.query)
})

app.post('/api/courses', (req,res) =>{
    const course = {
        id:courses.length+1,
        name:req.body.name
    };
    courses.push(course);
    res.send(course);
})

const port = process.env.port || 3000;

app.listen(port, () =>{
    console.log( `listening on Port ${port}`)
})
//By default the value port will remain 3000, to change it do the following in terminal 
//Stop nodemon using Ctrl+C then -> set port=5000

