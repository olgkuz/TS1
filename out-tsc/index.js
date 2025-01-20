"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("./users");
function getUsersJobPositions(userArr) {
    let newUserArray = [
        {
            name: 'Anna',
            position: 'Manager',
            age: 34,
            gender: 'woman'
        },
        {
            name: 'John',
            position: 'General manager',
            age: 40,
            gender: 'man'
        }
    ];
    return newUserArray;
}
const usersPositions = getUsersJobPositions(users_1.usersArray);
console.log('userPositions', usersPositions);
//# sourceMappingURL=index.js.map