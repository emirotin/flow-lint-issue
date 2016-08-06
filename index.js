/* @flow */

type TArrayPredicate<T> = (el: T, i: number) => boolean
type TArrayMap<T> = (el: T, i: number) => T

export const updateWhere = <T> (list: Array<T>, pred: TArrayPredicate<T>, map: TArrayMap<T>): Array<T> =>
  list.map((el, i) => (pred(el, i) ? map(el, i) : el))

export const updateWhereField = <V, TObj: { [key: string]: V }> (
    list: Array<TObj>, field: string, value: V, map: TArrayMap<TObj>
): Array<TObj> => {
  const pred = el => el[field] === value
  return updateWhere(list, pred, map)
}
