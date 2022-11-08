
const Engineer = require('../lib/Engineer.js');
//require our class Eeployee
describe('Engineer', () => {
    const testEmployee = new Engineer(`Bee`, 1, `ben@bee.bee`, `MadeOfBees`)
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