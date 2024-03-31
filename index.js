import express from 'express';

const app =express()

app.use(express.json())

const PORT =process.env.PORT || 4000

app.listen(PORT , () => {
    console.log(`server is runing ... ${PORT}`)
})

let arr = [
    {
        id : 1,
        name : "suffiyan ahmed",
        email : "suffiyanahmed@gmail.com"
    },
    {
        id : 2,
        name : "suffiyan ahmed",
        email : "suffiyanahmed@gmail.com"
    },
    {
        id : 3,
        name : "suffiyan ahmed",
        email : "suffiyanahmed@gmail.com"
    }
]


app.get("/" , (req , res) => {
    res.status(200).send(arr)
})


app.post("/" , (req , res) => {
    arr.push({id : arr.length +1 , ...req.body})
})

app.delete("/:id" , (req , res) => {
    let index = arr.findIndex(i => i.id === parseFloat(req.params.id))
    if(index  !== -1){
        arr.splice(index , 1)
        return res.status(200).send({message : "successfully"})
    }
})

 app.put("/:id" , (req , res) => {
    let index = arr.findIndex(i => i.id === parseFloat(req.params.id))
    if(index !== -1) {
        arr.splice(index , 1 , {id : parseFloat(req.params.id) , ...req.body})
    }
 })