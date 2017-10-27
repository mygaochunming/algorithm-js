/**
 * 冒泡排序是一种简单的排序算法。
 * 它重复地走访过要排序的数列，一次比较两个元素，如果他们的顺序错误就把他们交换过来。
 * 走访数列的工作是重复地进行直到没有再需要交换，也就是说该数列已经排序完成。
 * 这个算法的名字由来是因为越小的元素会经由交换慢慢“浮”到数列的顶端。
 * 冒泡排序的时间复杂度为O(n^2)
 * @param array  需要排序的数组
 * @param isAsc  是否正序排序
 * @returns array 返回排序后的数组
 */
function bubbleSort(array, isAsc) {
    // 如果传入的参数不是array，则报错
    if (!Array.isArray(array)) {
        throw 'The first arguments must be a array!';
    }

    let length = array.length;
    // 如果array的内容<=1,则直接返回原数组
    if (length <= 1) {
        return array;
    }

    let temp;
    let end = length;
    if (isAsc) {  // 升序
        while (end--) {
            for (let i = 0; i < end; i++) {
                if (array[i] > array[i + 1]) {
                    temp = array[i];
                    array[i] = array[i + 1];
                    array[i + 1] = temp;
                }
            }
        }
    } else {
        while (end--) {
            for (let i = 0; i < end; i++) {
                if (array[i] < array[i + 1]) {
                    temp = array[i];
                    array[i] = array[i + 1];
                    array[i + 1] = temp;
                }
            }
        }
    }

    return array;
}