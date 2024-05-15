import { User } from "./types";

export const createEmployee = ``;

export const createDepartmentTable = `CREATE TABLE departments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(50) NOT NULL
)`;

export const insertIntoDept = (depts: string[]) => {
  return `INSERT INTO departments (name) VALUES ${depts
    .map((_, index) => `($${index + 1})`)
    .join(", ")} ON CONFLICT (name) DO NOTHING RETURNING *`;
};

export const selectDepartment = `SELECT * FROM departments WHERE id = '89f69124-abb8-4282-ac9d-af18e28b9cf8' ORDER BY name ASC LIMIT 3 OFFSET 0 `;

export const createEmployeesTable = `CREATE TABLE employees(
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    deptId UUID REFERENCES departments(id)
)`;

export const usersData: User[] = [
  {
    firstName: "",
    lastName: "",
    email: "",
    deptId: "",
  },
];
