export type Department = {
  id?: string;
  name: string;
};

export type User = {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  deptId: string;
};
