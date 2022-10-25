class Employee {
    // Just like constructor functions, classes can accept arguments
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
     
    }
    getName(){
        return this.name
    }
    getId(){
        return this.id
    }

    getEmail(){
        return this.email
    }
    getRole(){
        return `Employee`
    }
}

console.log(new Employee(`Ben`, 1, `ben@lol.com`).getRole())


module.exports = Employee