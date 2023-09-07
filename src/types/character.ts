export type ApiCharacterType = {
  about: string[];
  info: ApiInfoType;
  page: string;
  name: string;
  id: number;
  images: string[];
};

export type ApiInfoType = {
  Sexo: 'Masculino' | 'Feminino' | 'Não Binário' | 'Não Informado';
  Aniversário: string;
  Idade: string;
  Altura: string;
  Peso: string;
  'Tipo Sanguíneo': string;
  Ocupação: string;
  Afiliação: string;
  Parceiro: string;
  'Patente Ninja': string;
  'Registro Ninja': string;
};

export type AppSexType = 'Male' | 'Female';

export type CharacterType = Omit<ApiCharacterType, 'page' | 'info'> & {
  sex: AppSexType;
};
