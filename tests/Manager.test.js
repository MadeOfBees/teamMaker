
const Manager = require('../lib/Manager.js');
//require our class Eeployee
describe('Manager', () => {
    const testEmployee = new Manager(`Bee`, 1, `ben@bee.bee`, 5435)
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