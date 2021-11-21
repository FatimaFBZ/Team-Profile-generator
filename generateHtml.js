

//var team=[{name:'Fatima'},{name:'Yasmin'}]
function generateHtml(managers, engineers, interns) {
    console.log(managers, engineers, interns)
    var cards = "";
    for (let i = 0; i < managers.length; i++) {
   

    cards += `<div class="col-4">
    <div class="card">
      <div class="card-body">
        <h1 class="card-header">Manager</h1>
        <p class="card-text">My name is: ${managers[i].name} </p>
        <p class="card-text"> My id is ${managers[i].id} </p>
        <p class="card-text">My email is ${managers[i].email} </p>
        <p class="card-text"> My role is ${managers[i].role} </p>
        <p class="card-text">My officeNumber is: ${managers[i].officeNumber} </p>
      </div>
    </div>
  </div>
    `

    }
    for (let i = 0; i < engineers.length; i++) {
    //     cards += `
   
    cards += `<div class="col-4">
   <div class="card">
     <div class="card-body">
     <h1 class="card-header">Engineer </h1>
       <p class="card-text">My name is! ${engineers[i].name} </p>
       <p class="card-text"> My id is ${engineers[i].id} </p>
       <p class="card-text"> My email is ${engineers[i].email} </p>
       <p class="card-text"> My role is ${engineers[i].role} </p>
       <p class="card-text"> My github is ${engineers[i].github} </p>
     </div>
   </div>
 </div>
   `

    }

    for (let i = 0; i < interns.length; i++) {
  
  cards += `<div class="col-4">
   <div class="card">
     <div class="card-body">
   
       <h1 class="card-header">Intern </h1>
       <p class="card-text"> My name is: ${interns[i].name}</p>
       <p class="card-text"> My id is: ${interns[i].id} </p>
       <p class="card-text"> My email is: ${interns[i].email} </p>
       <p class="card-text"> My role is: ${interns[i].role}</p>
       <p class="card-text"> My school is: ${interns[i].school}</p>
     </div>
   </div>
 </div>`
    }
    
    var fakeHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../assets/style.css" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body>

    <div class="col-12 jumbotron mb-3 team-heading">
        <h1 class="text-center">MY Team</h1>
    </div>


<div class="row">

    ${cards}
    </div>
   
</body>
</html>
`
    return fakeHtml
}



module.exports = generateHtml