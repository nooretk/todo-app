import type { Status } from "./status.enum";

export interface Todo {
  id: number;
  text: string;
  createdAt: Date;
  status: Status;
}
