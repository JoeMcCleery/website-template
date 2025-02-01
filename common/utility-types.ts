export type ChangeFields<T, R> = Omit<T, keyof R> & R;
