
/**
 * マージソート（破壊的）
 * @param arr 
 */
export default function sort(arr: number[]) {
  // マージした結果を保持するための配列
  // マージは最大で配列の半分の長さになる
  let merged = new Array<number>(Math.ceil(arr.length / 2));

  // マージ結果の幅
  let width = 1;

  // マージの幅が配列の長さを超えるまでつづける
  for (; width < arr.length; width *= 2) {
    // 左から順に幅に従ってマージをすすめる
    for (let i = 0; i + width < arr.length; i += width * 2) {
      // マージの右側の配列は元の配列の幅を超えてしまう場合があるので計算する
      const rwidth = i + width * 2 <= arr.length ? width : arr.length - i - width;

      // 左側の配列、右側の配列、結果の配列のそれぞれのインデックス
      let l = 0, r = 0, j = 0;
      while (true) {
        const left = arr[i + l];
        const right = arr[i + width + r];

        // 小さい順に入れていく
        if (left < right) {
          merged[j] = left;
          l++;
        } else {
          merged[j] = right;
          r++;
        }

        j++;

        if (l == width) {
          for (; r < rwidth; r++, j++) {
            merged[j] = arr[i + width + r];
          }
          break;
        } else if (r == rwidth) {
          for (; l < width; l++, j++) {
            merged[j] = arr[i + l];
          }
          break;
        }
      }

      // 結果の配列を元の配列に反映させる
      for (let k = 0; k < width + rwidth; k++) {
        arr[i + k] = merged[k];
      }
    }
  }
}