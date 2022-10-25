const Employee = require(`./Employee`);

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name,id,email)
        this.github = github
}
getGithub(){
    return this.github
}
getRole(){
    return `Engineer`
}
}

console.log(new Engineer(`Ben`, 6, `ben@goat.com`, MadeOfBees))