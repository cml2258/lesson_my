<template>
    <el-card class="category-container">
        <template #header>
            <div class="header">
                <el-button type="primary" :icon="Plus" @click="handleAdd">增加</el-button>
                <el-popconfirm
                    title="确定要删除吗？"
                    confirmButtonText="确定"
                    cancelButtonText="取消"
                    @confirm="handleDelete"
                >
                    <template #reference>
                        <el-button type="danger" :icon="Delete">批量删除</el-button>
                    </template>
                </el-popconfirm>
            </div>
        </template>
        <el-table
            ref="multipleTable"
            tooltip-effect="dark"
            style="width:100%"
            :data="state.tableData"
        >
            <el-table-column
                type="selection"
                width="55"
            >
            </el-table-column>
            <el-table-column
                prop="categoryName"
                label="分类名称">
            </el-table-column>
            <el-table-column
                prop="categoryRank"
                label="排序值"
                width="120"
            >
            </el-table-column>
            <el-table-column
                prop="createTime"
                label="添加时间"
                width="200"
            >
            </el-table-column>
            <el-table-column
                label="操作"
                width="220"
            >
                <template #default="scope">
                    <a @click="handleEdit(scope.row.categoryId)">修改</a>
                    <a @click="handleNext(scope.row)">下级分类</a>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination 
            background 
            layout="prev, pager, next"
            :total="state.total"
            :page-size="state.pageSize"
            :current-page="state.currentPage"
            @current-change="changePage"
        >
        </el-pagination>
    </el-card>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { Plus, Delete } from '@element-plus/icons-vue'
import { getCategoryData } from '@/service/category.js'
import { useRouter , useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const state = reactive({
    tableData: [],
    currentPage: 1, // 当前页
    pageSize: 10,
    total: 0, // 总条数
    level: 1,
    parent_id: 0
})
const multipleTable = ref(null)
const handleAdd = () => {
}
const handleDelete = () => {
}
const handleEdit = (id) => {
    console.log(id)
}
const handleNext = (item) => {
    const levelNumber = item.categoryLevel + 1
    
    router.push({
        name: `level${levelNumber}`,
        // 查询参数
        query: {
            level: levelNumber,
            parent_id: item.categoryId
        }
    })
}
onMounted(() => {
    getCategory()
})
const getCategory = async () => {
    const { level = 1, parent_id = 0 } = route.query
    try{
        const { data } = await getCategoryData({
            params: {
                pageNumber: state.currentPage,
                pageSize: state.pageSize,
                categoryLevel: level,
                parentId: parent_id
            }
        })
        state.tableData = data.list
        state.total = data.totalCount
        state.currentPage = data.currPage
    } catch(err) {

    }
}

router.afterEach(to => {
    if (['category','level2','level3'].includes(to.name)){
        getCategory() //发送数据请求，相应一下
    }
})

const changePage = (val) => {
    state.currentPage = val
    getCategory()
}
</script>

<style  scoped>

</style>