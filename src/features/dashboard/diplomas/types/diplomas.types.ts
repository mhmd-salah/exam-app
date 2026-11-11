export type TDiploma = {
  id: string;
  title: string;
  description: string;
  image: string;
  immutable: boolean;
  createdAt: string;
  updateAt: string;
};

export type TDiplomasMetadata = {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
};

export type TDiplomasResponse = {
  status: boolean;
  code: number;
  payload: {
    data: TDiploma[];
    metadata: TDiplomasMetadata;
  };
};
