function names(firstName, lastName){
    const fullName = {
            name: `${firstName}`,
            surName: `${lastName}` 
        };
    return fullName
}

names('Daniela', 'Conceicao');

module.exports = names

