import { ref , Ref} from 'vue'
import { defineStore } from 'pinia'

type Product = {
    id:number;
    title:string;
    price:string;
    discription:string;
    category:string;
    image:string;
}

export const useProductStore = defineStore('products',() =>{
    const all:Ref<Product[]> = ref([]) //响应式的，必须ref类型
    // actions
    const fetchAll = async() => {
        const res = await fetch(`http://fakestoreapi.com/products`)
        // 返回的是json ；  res.json()是一个promise，还没有被解决，要await一下
        const data:Product[] =await res.json()
        // all响应式数据，有value属性，声明泛型
        all.value = data
    }
    return  {
        all,
        fetchAll
    }
})