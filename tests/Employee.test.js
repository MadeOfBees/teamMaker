const Employee = require('../lib/Employee')
//require our class Eeployee
describe('Employee', () => {
    const testEmployee = new Employee(`Bee`, 1, `ben@goat.net`)
    it(`Instantiates as a class object`,()=>{
expect(typeof(testEmployee)).toBe(`object`);
})
    it(`Has three properties`, ()=>{
        expect(Object.keys(testEmployee).length).toBe(3);
    })
    it(`Has the method getName return the property name`, ()=>{
        expect(testEmployee.getName()).toBe(`Bee`);
    })
})