import bcrypt from 'bcrypt';

export type User = {
    name: string;
    email: string;
    password: string;
    roles: 'User' | 'Admin';
    designation: 'Software_Engineer' | 'Data_Analyst' | 'Devops_Engineer';
}

export async function createUsers(): Promise<User[]> {
    return [
        {
            name: "John Doe",
            email: "john.doe@example.com",
            password: await bcrypt.hash("password123", 10),
            roles: 'User',
            designation: 'Software_Engineer'
        },
        {
            name: "Jane Smith",
            email: "jane.smith@example.com",
            password: await bcrypt.hash("securepass", 10),
            roles: 'Admin',
            designation: 'Data_Analyst'
        },
        {
            name: "Alice Johnson",
            email: "alice.johnson@example.com",
            password: await bcrypt.hash("mypassword", 10),
            roles: 'User',
            designation: 'Devops_Engineer'
        },
        {
            name: "Bob Brown",
            email: "bob.brown@example.com",
            password: await bcrypt.hash("bobsecure", 10),
            roles: 'User',
            designation: 'Software_Engineer'
        },
        {
            name: "Charlie Davis",
            email: "charlie.davis@example.com",
            password: await bcrypt.hash("charliedav123", 10),
            roles: 'Admin',
            designation: 'Data_Analyst'
        },
        {
            name: "Eva Green",
            email: "eva.green@example.com",
            password: await bcrypt.hash("evagreen123", 10),
            roles: 'User',
            designation: 'Devops_Engineer'
        },
        {
            name: "Frank Harris",
            email: "frank.harris@example.com",
            password: await bcrypt.hash("frankpass", 10),
            roles: 'User',
            designation: 'Software_Engineer'
        },
        {
            name: "Grace Lee",
            email: "grace.lee@example.com",
            password: await bcrypt.hash("gracelee123", 10),
            roles: 'Admin',
            designation: 'Data_Analyst'
        },
        {
            name: "Henry Adams",
            email: "henry.adams@example.com",
            password: await bcrypt.hash("henrypass", 10),
            roles: 'User',
            designation: 'Devops_Engineer'
        },
        {
            name: "Ivy Walker",
            email: "ivy.walker@example.com",
            password: await bcrypt.hash("ivywalkerpass", 10),
            roles: 'User',
            designation: 'Software_Engineer'
        },
        {
            name: "Jack King",
            email: "jack.king@example.com",
            password: await bcrypt.hash("jackkingpass", 10),
            roles: 'Admin',
            designation: 'Data_Analyst'
        },
        {
            name: "Kate White",
            email: "kate.white@example.com",
            password: await bcrypt.hash("katewhitepass", 10),
            roles: 'User',
            designation: 'Devops_Engineer'
        },
        {
            name: "Leo Brooks",
            email: "leo.brooks@example.com",
            password: await bcrypt.hash("leobrookspass", 10),
            roles: 'User',
            designation: 'Software_Engineer'
        },
        {
            name: "Mia Scott",
            email: "mia.scott@example.com",
            password: await bcrypt.hash("miascottpass", 10),
            roles: 'Admin',
            designation: 'Data_Analyst'
        },
        {
            name: "Noah Reed",
            email: "noah.reed@example.com",
            password: await bcrypt.hash("noahreedpass", 10),
            roles: 'User',
            designation: 'Devops_Engineer'
        },
        {
            name: "Olivia Clark",
            email: "olivia.clark@example.com",
            password: await bcrypt.hash("oliviaclarkpass", 10),
            roles: 'User',
            designation: 'Software_Engineer'
        },
        {
            name: "Paul Young",
            email: "paul.young@example.com",
            password: await bcrypt.hash("paulyoungpass", 10),
            roles: 'Admin',
            designation: 'Data_Analyst'
        },
        {
            name: "Quinn Taylor",
            email: "quinn.taylor@example.com",
            password: await bcrypt.hash("quinntaylorpass", 10),
            roles: 'User',
            designation: 'Devops_Engineer'
        },
        {
            name: "Ryan Mitchell",
            email: "ryan.mitchell@example.com",
            password: await bcrypt.hash("ryanmitchellpass", 10),
            roles: 'User',
            designation: 'Software_Engineer'
        }
    ];
}

// Usage
createUsers().then(users => {
    console.log(users);
});
