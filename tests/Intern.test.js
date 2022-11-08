const Intern = require('../lib/Intern.js');
//require our class Eeployee
describe('Intern', () => {
    const testEmployee = new Intern(`Bee`, 1, `ben@bee.bee`, `GA Tech`)
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