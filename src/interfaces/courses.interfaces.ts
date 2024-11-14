export interface ICourse {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  total_aulas: number;
  total_horas: number;
  error?: string;
}

export interface IClass {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  curso_id: number;
  tempo: number;
  ordem: number;
  error?: string;
}

export interface IClassParams {
  courseSlug: string;
  classSlug: string;
}
