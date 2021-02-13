//
// 先頭の要素を軸要素とするクイックソート
//

/**
 * 配列を破壊的に昇順ソートする
 * @param arr 配列
 * @param left ソート範囲の開始点
 * @param right ソート範囲の終了点
 */
export default function sort(arr: number[], left: number, right: number): void  {
  if (left == right) {
      // 要素数が1つの場合は処理の必要がない
      return;
  }

  // 配列の先頭を軸要素とする
  const pivot = arr[left];

  // 配列を両方向から参照するための変数
  let l = left;
  let r = right;

  //
  // pivot 以上の要素と未満の要素に配列の要素を再配置する
  //

  // 先頭を軸要素としているため必ず最初の arr[l] は交換対象になる
  do {
      // 終点から左方向へ交換対象を検索
      for (; l < r; r--) {
          // pivot 未満の要素を見つける
          if (arr[r] < pivot) {
              // 要素を入れ替える
              const x = arr[l];
              arr[l] = arr[r];
              arr[r] = x;
              break;
          }
      }

      // 次の pivot 以上の値を探す
      while (l < r && arr[l] < pivot) {
          l++;
      }
  } while (l != r);

  // r が left と等しいとき pivot が配列の最小値なので
  // 最小値以外の右の配列をソートする
  if (r == left) {
      sort(arr, left + 1, right);
      return;
  }

  // 分けた2つの区間を更に処理する
  sort(arr, left, r - 1);
  sort(arr, r, right);
}