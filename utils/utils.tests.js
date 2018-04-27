const utils = require('./utils');
const expect = require('expect');

it('should add two numbers', () => {
    const res = utils.add(33, 67);

    expect(res).toBe(100).toBeA('number');
});

it('should square a number', () => {
    const res = utils.square(6);

    expect(res).toBe(36).toBeA('number');
});

it('should have first and last names', () => {
    const inputUser = {
        age: 40,
        location: 'London'
    };

    const res = utils.setNames(inputUser, 'Arun Kumar');

    // expect(res).toInclude({
    //     firstName: 'Arun',
    //     lastName: 'Kumar'
    // });

    expect(inputUser).toEqual(res);
});