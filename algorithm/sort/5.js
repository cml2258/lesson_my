const bubblesort = arr =>{
    //函数局部变量
    console.time("冒泡排序耗时");//时间计算
    const length = arr.length; //缓存数组长度 变量
    //相邻 一趟循环 搞定一个位置的排序？ 最右侧一定是最大值
    for (let i = 0 ; i<arr.length - 1; i++){  // i 一个元素的排序 外循环i+1 
        //所有元素排序 位置上放置正确的数字 位置？ 
         let isSorted = false;//本轮有序嘛？
        for( let j = 0;j<length - i - 1; j++){ //内循环 排好一个位置后
            if(arr[j]> arr[j+1]){
                // const temp = arr[j];
                // arr[j] = arr[j+1];
                // arr[j+1] = temp;
                [arr[j] , arr[j+1]] = [arr[j+1] , arr[j]];
                isSorted = true;
            }
        }
        if(!isSorted){
        //一次都没有发生？
            break;    
        }
    }

    console.timeEnd("冒泡排序耗时");
}
const arr = [2,1,7,3,5,6,8,9] //引用式赋值 堆内存   值决定
// 全局
bubblesort(arr);
console.log(arr);