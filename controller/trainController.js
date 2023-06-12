const jwt = require('jsonwebtoken');

let trainList=[

    {
        "trainName": "Chennai Exp",
        "trainNumber": "2344",
        "departureTime": {
          "Hours": 21,
          "Minutes": 35,
          "Seconds": 0
        },
        "seatsAvailable": {
          "sleeper": 3,
          "AC": 1
        },
        "price": {
          "sleeper": 2,
          "AC": 5
        },
        "delayedBy":15
        },
    {
        "trainName": "Hyderabad Exp",
        "trainNumber": "2341",
        "departureTime": {
          "Hours": 23,
          "Minutes": 55,
          "Seconds": 0
        },
        "seatsAvailable": {
          "sleeper": 6,
          "AC": 7
        },
        "price": {
          "sleeper": 554,
          "AC": 1854
        },
        "delayedBy": 5
      },
      
        {
        "trainName": "Delhi Door Hai Exp",
        "trainNumber": "2343",
        "departureTime": {
          "Hours": 9,
          "Minutes": 45,
          "Seconds": 0
        },
        "seatsAvailable": {
          "sleeper": 32,
          "AC": 1
        },
        "price": {
          "sleeper": 1,
          "AC": 723
        },
        "delayedBy": 3
        }
]


module.exports.Register=function(req,res){
    console.log('a::',req.body);
    if(!req.body){
        res.status(400).send('Please fill all the Details');
    }
    res.status(200).send('Register Successfully');
}

module.exports.home=function(req,res){
        return res.json(trainList);
}

module.exports.getById=function(req,res){
    let id = req.params.id;
    let train = trainList.find(t => t.trainNumber === id);
    if (!train) {
        res.status(404).send("Train Not Found");
        return;
    }

    return res.send(train);
}

 module.exports.authrorize=function(req,res){
//             try{
//                 let train=trainList.find({id: req.body.id});
//                 if (!train){
//                     return res.json(422, {
//                         message: "Invalid Train ID"
//                     });
//             }
//             return res.json(200, {
//                 message: 'Train Found Keep the Token safe',
//                 data:  {
//                     token: jwt.sign({id: req.body.id}, 'Bearer', {expiresIn:  '1682629264'})
//                 }
//             });
// }
// catch(err){
//     console.log('********', err);
//     return res.json(500, {
//         message: "Internal Server Error"
//     });
 }



