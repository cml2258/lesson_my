import { defineStore } from 'pinia' //pinia 数据管理 
import { ref, Ref } from 'vue'
const apiUrl:string = 'http://fakestoreapi.com' //常量声明在前面

export type Product ={
    id:number;
    title:string;
    price:number;
    description:string;
    category:string;
    image:string,
    rating:{
        rate: number;
        count:number
    }
}

export const useProductStore = defineStore('products', () => {
    // all Ref
    const all:Ref<Product[]> = ref([])
    const ids:Ref<number[]> = ref([]) //number[] 泛型里的简单数据类型，自己的
    const loaded = () :boolean=>all.value.length > 0   
    //() :boolean 括号后面限定的是函数的返回值，return乱写会报错
    
    const fetchAll = async() =>{ //如果有  不重复加载
        if(loaded()){
            return
        }
        const res = await fetch(`${apiUrl}/products`) // 发送了请求
        const data:Product[] = await res.json() //res.json() 统一的JSON数组返回 Any[]
        all.value = data  //all 是响应式对象，value才是data

        console.log(data,"-------")
        ids.value = data.map(product=> product.id) // 参数类型
    }
    return{
        all,
        ids,
        loaded,
        fetchAll
    }
})