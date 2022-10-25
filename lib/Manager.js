const Employee = require(`./Employee`);

class Manager extends Employee {
    constructor(name, id, email, officeNum){
        super(name,id,email)
        this.officeNum = officeNum
}
getRole(){
    return `Manager`
}


}

console.log(new Manager(`Ben`, 3, `ben@goat.com`, 5464654))