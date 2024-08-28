var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import bcrypt from 'bcrypt';
export function createUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        return [
            {
                name: "John Doe",
                email: "john.doe@example.com",
                password: yield bcrypt.hash("password123", 10),
                roles: 'User',
                designation: 'Software_Engineer'
            },
            {
                name: "Jane Smith",
                email: "jane.smith@example.com",
                password: yield bcrypt.hash("securepass", 10),
                roles: 'Admin',
                designation: 'Data_Analyst'
            },
            {
                name: "Alice Johnson",
                email: "alice.johnson@example.com",
                password: yield bcrypt.hash("mypassword", 10),
                roles: 'User',
                designation: 'Devops_Engineer'
            },
            {
                name: "Bob Brown",
                email: "bob.brown@example.com",
                password: yield bcrypt.hash("bobsecure", 10),
                roles: 'User',
                designation: 'Software_Engineer'
            },
            {
                name: "Charlie Davis",
                email: "charlie.davis@example.com",
                password: yield bcrypt.hash("charliedav123", 10),
                roles: 'Admin',
                designation: 'Data_Analyst'
            },
            {
                name: "Eva Green",
                email: "eva.green@example.com",
                password: yield bcrypt.hash("evagreen123", 10),
                roles: 'User',
                designation: 'Devops_Engineer'
            },
            {
                name: "Frank Harris",
                email: "frank.harris@example.com",
                password: yield bcrypt.hash("frankpass", 10),
                roles: 'User',
                designation: 'Software_Engineer'
            },
            {
                name: "Grace Lee",
                email: "grace.lee@example.com",
                password: yield bcrypt.hash("gracelee123", 10),
                roles: 'Admin',
                designation: 'Data_Analyst'
            },
            {
                name: "Henry Adams",
                email: "henry.adams@example.com",
                password: yield bcrypt.hash("henrypass", 10),
                roles: 'User',
                designation: 'Devops_Engineer'
            },
            {
                name: "Ivy Walker",
                email: "ivy.walker@example.com",
                password: yield bcrypt.hash("ivywalkerpass", 10),
                roles: 'User',
                designation: 'Software_Engineer'
            },
            {
                name: "Jack King",
                email: "jack.king@example.com",
                password: yield bcrypt.hash("jackkingpass", 10),
                roles: 'Admin',
                designation: 'Data_Analyst'
            },
            {
                name: "Kate White",
                email: "kate.white@example.com",
                password: yield bcrypt.hash("katewhitepass", 10),
                roles: 'User',
                designation: 'Devops_Engineer'
            },
            {
                name: "Leo Brooks",
                email: "leo.brooks@example.com",
                password: yield bcrypt.hash("leobrookspass", 10),
                roles: 'User',
                designation: 'Software_Engineer'
            },
            {
                name: "Mia Scott",
                email: "mia.scott@example.com",
                password: yield bcrypt.hash("miascottpass", 10),
                roles: 'Admin',
                designation: 'Data_Analyst'
            },
            {
                name: "Noah Reed",
                email: "noah.reed@example.com",
                password: yield bcrypt.hash("noahreedpass", 10),
                roles: 'User',
                designation: 'Devops_Engineer'
            },
            {
                name: "Olivia Clark",
                email: "olivia.clark@example.com",
                password: yield bcrypt.hash("oliviaclarkpass", 10),
                roles: 'User',
                designation: 'Software_Engineer'
            },
            {
                name: "Paul Young",
                email: "paul.young@example.com",
                password: yield bcrypt.hash("paulyoungpass", 10),
                roles: 'Admin',
                designation: 'Data_Analyst'
            },
            {
                name: "Quinn Taylor",
                email: "quinn.taylor@example.com",
                password: yield bcrypt.hash("quinntaylorpass", 10),
                roles: 'User',
                designation: 'Devops_Engineer'
            },
            {
                name: "Ryan Mitchell",
                email: "ryan.mitchell@example.com",
                password: yield bcrypt.hash("ryanmitchellpass", 10),
                roles: 'User',
                designation: 'Software_Engineer'
            }
        ];
    });
}
// Usage
createUsers().then(users => {
    console.log(users);
});
