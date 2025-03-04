export declare enum UserRole {
    ADMIN = "admin",
    USER = "user"
}
export declare class User {
    id: number;
    role: UserRole;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    otp: string;
    isActive: boolean;
    created_at?: Date;
    updated_at?: Date;
}
