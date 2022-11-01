export const entries = <K extends string, V = any>(obj: { [key in K]: V }): [K, V][] =>
  Object.entries(obj) as [K, V][];

export function keys<K extends string, V>(obj: PartialRecord<K, V>): K[];
export function keys<K extends string, V>(obj: Record<K, V>): K[] {
  return Object.keys(obj) as K[];
}
export type PartialRecord<K extends keyof any, T> = {
  [P in K]?: T;
};
