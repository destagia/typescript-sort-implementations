
export default function sort(arr: number[]) {
  let merged = new Array<number>(Math.ceil(arr.length / 2));
  let width = 1;
  while (width < arr.length) {
    for (let i = 0; i + width < arr.length; i += width * 2) {
      let l = i;
      let r = i + width;

      let j = 0;
      do {
        if (arr[l] < arr[r]) {
          merged[j] = arr[l];
          l++;
        } else {
          merged[j] = arr[r];
          r++;
        }
        j++;
      } while (l - i < width && r - i < width * 2);

      for (; l - i < width; l++, j++) {
        merged[j] = arr[l];
      }
      for (; r - i < width * 2; r++, j++) {
        merged[j] = arr[r];
      }

      console.log(merged.slice(0, width * 2));
      for (let k = 0; k < width * 2; k++) {
        arr[i + k] = merged[k];
      }
    }
    width *= 2;
  }
}

const arr = [1, 2, 7, 3, 9, 5, 4, 6];
sort(arr);
console.log(arr);