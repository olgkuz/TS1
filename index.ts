import { userArray } from "./users";



interface IUserArray {
    userid: string;
    name: string;
    gender:string
}

interface IOrganization {
    name: string,
    position :string
} interface IUserInfoArray {
    userid: string;
    name: string;
    birthdate: string;
    age: number;
    organization: IOrganization
}

interface IPersonalUsersArray {
    name: string;
    position:string;
    age: number;
    gender:string
}
function getUsersJobPositions(userArr:Readonly<IUserArray[]>): IPersonalUsersArray[]{
    let personalUserArray:IPersonalUsersArray[]= [
        {
            name: 'Anna',
            position: 'Manager', 
            age: 34 ,
            gender: 'woman'
        },
        {
            name: 'John',
            position: 'General manager', 
            age: 40 ,
            gender: 'man'
        }
    ];
    return personalUserArray
}
const usersPositions = getUsersJobPositions(userArray);
console.log ('userPositions', usersPositions);
