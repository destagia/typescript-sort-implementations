//
// 配列をたくさんつくるクイックソート
//

/**
 * ソートした配列を返す
 * @param arr 
 */
export default function sort(arr: number[]): number[] {
  if (arr.length < 2) {
    return arr;
  }

  // 先頭を軸要素とし、残りの部分をソート対象とする
  const [pivot, ...rest] = arr;

  // 軸要素の値をつかって以上の要素と未満の要素に分ける
  const left = [];
  const right = [];
  for (const x of rest) {
    if (x < pivot) {
      left.push(x);
    } else {
      right.push(x);
    }
  }

  return [...sort(left), pivot, ...sort(right)];
}