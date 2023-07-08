<template>
    <!-- 这里是Git -->
    <el-row style="text-align: center; margin-top: 2vh;">
        <el-col :span="12" class="center"><!-- 原先的github图标加载很慢，现使用Arco的Icon代替 -->
            <el-link :underline="false" href="https://github.com/Hvm2633E" target="_blank" hoverable="false">
                <IconGithub class="center-img" />
            </el-link>
        </el-col>
        <el-col :span="12" class="center">
            <el-link href="https://gitee.com/yigusiqian" target="_blank" hoverable="false">
                <img src="https://tse3-mm.cn.bing.net/th/id/OIP-C.oHpHa2WHNMJTAI25sVRDIAAAAA?pid=ImgDet&rs=1"
                    class="center-img" />
            </el-link>
        </el-col>
    </el-row>
</template>
<script>
import {
    IconGithub
} from '@arco-design/web-vue/es/icon';
export default {
    components: {
        IconGithub
    }
}
</script>
  
<style>
.center {
    display: flex;
    align-items: center;
    justify-content: center;
}

.center-img {
    height: 12vh;
    width: 12vh;
}
</style>
  