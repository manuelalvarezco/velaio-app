type IUser  = {
  id?: number;
  fullName: {
    name: string,
    lastName: string,
  };
  age: number;
  habilities: string[];
}

export interface Task {
  id?: number;
  name: string;
  completed: boolean;
  date: string,
  users: IUser[];
}
