import { IUseGender, usersArray } from "./users";
import {usersInfoArray, IUsersInfo } from "./userinfo";





 interface IUsersNew {
    name: string;
    position?:string;
    age?: number;
    gender:string
}




function getUsersJobPositions (

    uArr: IUseGender [] , 
    uInfoArr: IUsersInfo [] ,
    ):IUsersNew []  {
    return uArr.map(element => {
        const userNew = uInfoArr.find(el=> el.userid === element.userid)
        return{
            name: element.name,                    
            position: userNew?.organization.position,                    
            age: userNew?.age,                   
            gender: element.gender,
        }
    })
    
    
        }

    

const usersPositions = getUsersJobPositions( usersArray, usersInfoArray );
console.log ('userPositions', usersPositions);