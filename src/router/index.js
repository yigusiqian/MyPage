import {
    createRouter,
    createWebHashHistory,
} from 'vue-router'
import HomePc from '../components/HomePc.vue'
import HomeMobile from '../components/HomeMobile.vue'
import NavigationPc from '../components/NavigationPc.vue'
import NavigationMobile from '../components/NavigationMobile.vue'
import Tool from '../components/Tool.vue'
//import MyHitokoto from '../components/MyHitokoto.vue'测试
import { detectDeviceType } from '../utils/detectDeviceType';
const { DevType } = detectDeviceType();
const routes = [
    {
        path: '/',
        name: '首页',
        component: DevType === 'mobile' ? HomeMobile : HomePc,
    },
    {
        path: '/Navigation',
        name: '导航',
        component: DevType === 'mobile' ? NavigationMobile : NavigationPc,
    },
    {
        path: '/Tool',
        name: '工具',
        component: Tool
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router