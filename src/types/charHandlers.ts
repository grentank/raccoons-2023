import type { CharacterType } from './character';

export type PickCharType = (char: CharacterType) => void;

export type SubmitFormType = (e: React.FormEvent<HTMLFormElement>, input: string) => Promise<void>;
