export interface Blog {
  id: string;
  title: string;
  date: string;
  link: string;
  thumbnail: string;
  createdAt: string;
  updatedAt: string;
}

export interface BlogInput {
  title: string;
  date: string;
  link: string;
  thumbnail: string;
}