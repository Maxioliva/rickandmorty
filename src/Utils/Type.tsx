export type Character = {
  id: number;
  name: string;
  image: string;
  status: string;
  gender: string;
};

export type Info = {
  next?: string;
  prev?: string;
};

export type Search = {
  text?: string;
  status?: string;
};
