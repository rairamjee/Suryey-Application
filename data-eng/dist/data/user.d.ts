export type User = {
    name: string;
    email: string;
    password: string;
    roles: 'User' | 'Admin';
    designation: 'Software_Engineer' | 'Data_Analyst' | 'Devops_Engineer';
};
export declare function createUsers(): Promise<User[]>;
