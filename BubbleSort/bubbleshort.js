function bubbleSort(arr) {
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Troca os elementos se estiverem na ordem errada
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// Exemplo de uso
var array = [64, 34, 250,200, 304, 255,684, 34, 25,64, 34, 25, 12, 22, 11,100 ,90];
console.log("Array antes da ordenação: " + array);
console.log("Array após o Bubble Sort: \n" + bubbleSort(array));
