const Employee = require('../lib/Employee.js');
const Engineer = require('../lib/Engineer.js');
//require our class Eeployee
describe('Engineer', () => {
    const testEmployee = new Engineer(`Bee`, 1, `ben@goat.net`, `MadeOfBees`)
    it(`Instantiates as a class object`,()=>{
expect(typeof(testEmployee)).toBe(`object`);
})
    it(`Has four properties`, ()=>{
        expect(Object.keys(testEmployee).length).toBe(4);
    })
    it(`Has the method getName return the property name`, ()=>{
        expect(testEmployee.getName()).toBe(`Bee`);
    })
})