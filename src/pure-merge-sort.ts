//
// 副作用のないマージソート
//

/**
 * ２つの配列を小さい順に並べる
 * @param left 
 * @param right 
 */
function merge(left: number[], right: number[]): number[] {
  // 配列を参照するカーソル
  let l = 0;
  let r = 0;

  // 結果を保持する配列
  let merged = [];

  // どちらかの配列を使い切るまで続ける
  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) {
      merged.push(left[l++]);
    } else {
      merged.push(right[r++]);
    }
  }

  // 残った要素を格納する
  for (; l < left.length; l++) {
    merged.push(left[l]);
  }
  for (; r < right.length; r++) {
    merged.push(right[r]);
  }

  return merged;
}

export default function sort(arr: number[]) {
  // バラバラの状態にする
  let values = arr.map(a => [a]);

  // マージが完了するまで処理を続ける
  while (values.length > 1) {
    // マージ結果を格納する配列
    let next = [];

    let i;
    for (i = 0; i + 1 < values.length; i += 2) {
      next.push(merge(values[i], values[i + 1]));
    }

    // 最後の要素が余っている場合は格納する
    if (i < values.length) {
      next.push(values[i]);
    }

    values = next;
  }

  return values;
}