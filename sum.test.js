const sumOfFiles = require('./sum');

test('it works with the example case', () => {
    return sumOfFiles('/example/A.txt')
        .then((output) => {
            expect(output).toMatchObject({
                'A.txt': 111,
                'B.txt': 39,
                'C.txt': 12
            });
        });
})

test('it works with 2 separate branches', () => {
    return sumOfFiles('/example2/A.txt')
        .then((output) => {
            expect(output).toMatchObject({
                'A.txt': 90,
                'B.txt': 23,
                'C.txt': 7,
                'D.txt': 13,
            });
        });
})

test('it works with files declared at the end', () => {
    return sumOfFiles('/example3/A.txt')
        .then((output) => {
            expect(output).toMatchObject({
                'A.txt': 111,
                'B.txt': 39,
                'C.txt': 12
            });
        });
})

test('it throws an error if a file does not exist', () => {
    return sumOfFiles('/example4/A.txt')
        .catch(error => {
            expect(error).toBeDefined()
        })
})
