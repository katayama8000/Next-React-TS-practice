const { sum } = require('./sum');

const result = sum(1, 2);
const expected = 3;

const test = async (title, callback) => {
    try {
        await callback();
        console.log(`✓ ${title}`);
    } catch (error) {
        console.error(`x ${title}`);
        console.error(error);
    }
}


const expect = (result) => {
    return {
        toBe(expected) {
            if (result !== expected) {
                throw new Error(`${result} is not equal to ${expected}`);
            }
        }
    }
}




expect(result).toBe(expected);

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('adds 3 + 2 to equal 5', () => {
    expect(sum(3, 2)).toBe(4);
});