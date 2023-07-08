<script setup>
import Carousel from '../components/Carousel.vue'
import TimeBox from '../components/TimeBox.vue'
import LogoBox from '../components/LogoBox.vue'
import MyHitokoto from '../components/MyHitokoto.vue'
import CardA from './CardA.vue'
import CardB from './CardB.vue'
import CardC from './CardC.vue'
</script>
<template>
    <div class="background">
        <el-row :gutter="20">
            <el-col :span="11" :offset="1">
                <a-divider margin="0" />
                <LogoBox />
                <a-divider margin="0" />
                <el-row>
                    <el-col :span="22">
                        <a-card class="Box" :bordered="false" style="overflow: hidden;">
                            <TimeBox id="clock" />
                        </a-card>
                    </el-col>
                    <el-col :span="2"><!-- 3D立体玻璃位置 -->
                        <el-card class="Other" :bordered="false">
                        </el-card>
                    </el-col>
                    <a-divider margin="0" />
                </el-row>
            </el-col>
            <el-col :span="11" :offset="0"><!-- offset:中间偏移量 -->
                <el-card id="card1">
                    <Carousel />
                </el-card>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="22" :offset="1">
                <el-card class="text-card">
                    <MyHitokoto />
                </el-card>
            </el-col>
        </el-row>
        <el-row class="main-card">
            <el-col :span="6" :offset="1">
                <el-card id="line-box" style="overflow: hidden;">
                    <CardA />
                </el-card>
            </el-col>
            <el-col :span="7" :offset="1">
                <el-card class="Nav-box">
                    <CardB />
                </el-card>
                <el-card class="Nav-box bottom" style="overflow: hidden;">
                    <el-row style="text-align: center; margin-top: 5vh;">
                        <el-col :span="6" class="center">
                            <el-button text style="height: 100%;width: 100%;">
                                <el-link :underline="false" href="https://res.abeim.cn/api/qq/?qq=2021591968" target="_blank"
                                    hoverable="false">
                                    <IconQq class="lianxiIcon" />
                                </el-link>
                            </el-button>
                        </el-col>
                        <el-col :span="6" class="center">
                            <el-button text style="height: 100%;width: 100%;" @click="openDialog">
                                <el-link>
                                    <IconEmail class="lianxiIcon" />
                                </el-link>
                            </el-button>
                        </el-col>
                        <el-col :span="6" class="center">
                            <el-button text style="height: 100%;width: 100%;" @click="openDialog">
                                <el-link>
                                    <IconPhone class="lianxiIcon" />
                                </el-link>
                            </el-button>
                        </el-col>
                        <el-col :span="6" class="center">
                            <el-button text style="height: 100%;width: 100%;" @click="openDialog">
                                <el-link>
                                    <IconHeartFill class="lianxiIcon" />
                                </el-link>
                            </el-button>
                        </el-col>
                    </el-row>
                </el-card>
            </el-col>
            <el-col :span="7" :offset="1">
                <el-card class="Nav-box" style="overflow: hidden;">
                    <CardC />
                </el-card>
                <el-card class="Nav-box bottom" style="overflow: hidden;">
                    友链
                </el-card>
            </el-col>
        </el-row>
    </div>
    <!-- 本来想用el-dialog的，可是他的遮罩层的附属级别真的很烦 -->
    <a-modal v-model:visible="dialogVisible" title="联系作者" width="40%" :before-close="handleClose">
        <a-space size="small" direction="vertical">
            <el-text>因为只有QQ可用好友链接,其他联系方式的链接无法稳定有效存在,所以留下了这个对话框</el-text>
            <el-text>作者QQ:2021591968;2498579216</el-text>
            <el-text>作者邮箱:2021591968@qq.com</el-text>
            <el-text>作者电话:不经常接,不留了</el-text>
        </a-space>
        <img src="../assets/image/wx.jpg" style="width: 20vh">
        <img src="../assets/image/zfb.jpg" class="zanshang" style="width: 20vh">
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogVisible = false" type="primary">确定</el-button>
            </span>
        </template>
    </a-modal>
</template>
<style src="../style/background.css"/>
<style src="../style/card.css"/>
<script>
import {
    IconQq, IconEmail, IconPhone, IconHeartFill
} from '@arco-design/web-vue/es/icon';
export default {
    data() {
        return {
            dialogVisible: false,
        }
    },
    components: {
        IconQq, IconEmail, IconPhone, IconHeartFill
    },
    methods: {
        openDialog() {
            this.dialogVisible = true
        }
    }
}
</script>
  
<style>
.center {
    display: flex;
    align-items: center;
    justify-content: center;
}

.lianxiIcon {
    height: 8vh;
    width: 8vh;
}
</style>