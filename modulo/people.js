const names = require('../functions/names');
const hobby = require('../functions/hobbis');


function getObj(){
    const {name, surName} = names('Daniela', 'Conceicao');
    //const [hobbyOne, hobbyTwo, hobbyThree] = hobby('Futebol', 'Cerveja jelada', 'serie');
    const ogj = {
        firstName: name, 
        LastName: surName,
        hobbies: hobby('Futebol', 'Cerveja jelada', 'serie') ,   
    }

    return ogj
}

console.log(getObj())

//console.log(names('Daniela', 'Conceicao'));
//console.log(hobby('Futebol', 'Cerveja jelada', 'serie'));