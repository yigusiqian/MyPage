<template>
    <a-card class="search">
        <a-card class="searchTime" :bordered="false">
            <TimeBox class="TimeBox" />
            <el-input v-model="SeachInput" placeholder="请输入搜索内容..." clearable class="input" @keydown.enter="seach">
                <template #prepend>
                    <el-select v-model="SeachSelect" style="width: 85px">
                        <el-option label="Bing" value="https://cn.bing.com/search?q=" />
                        <el-option label="谷歌" value="https://www.google.com/search?q=" />
                        <el-option label="360" value="https://www.so.com/s?q=" />
                        <el-option label="搜狗" value="https://www.sogou.com/web?query=" />
                        <el-option label="鸭鸭搜" value="https://www.duckduckgo.com/?q=" />
                        <el-option label="StackOverflow" value="https://StackOverflow.com/nocaptcha?s=" />
                        <el-option label="雅虎" value="https://hk.search.yahoo.com/search?p=" />
                    </el-select>
                </template>
                <template #append>
                    <el-button type="info" @click="seach" @keydown.enter="seach">搜索</el-button>
                </template>
            </el-input>
            <el-divider />
            <div class="toolsbox">
                <el-button @click="HandleDialogOpenAtNews" class="toolsButton">每天60秒读懂世界</el-button>
                <el-divider />
                <el-button @click="HandleDialogOpenAtMoyu" class="toolsButton">啥时候放假</el-button>
                <el-divider />
                <el-button @click="HandleDialogOpenAtFengjing" class="toolsButton">看看风景</el-button>
            </div>
        </a-card>
    </a-card>
    <a-modal v-model:visible="ToolsDialogVisible" :title="toolsTitle" :width="DialogWidth">
        <img :src="toolsImg" style="width: 100%;">
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="ToolsDialogVisible = false" type="primary">确定</el-button>
            </span>
        </template>
    </a-modal>
</template>
  
<script>
import axios from 'axios';
/* 导入axios */
import TimeBox from './TimeBox.vue';
/* import WebIframe from './WebIframe.vue'; */
import { detectDeviceType } from "../utils/detectDeviceType"
export default {
    data() {
        return {
            SeachInput: '',
            DevType: '',
            SeachSelect: 'https://cn.bing.com/search?q=',
            path: '../style/seach.css',
            ToolsDialogVisible: false,
            DialogWidth: '',
            PcDialogWidth: '42%',
            MobileDialogWidth: '80%',
            toolsImg: '',
            toolsTitle: '',
        };
    },
    methods: {
        seach() {
            const url = this.SeachSelect + encodeURIComponent(this.SeachInput);
            window.open(url, '_blank');
            // 打开新窗口后重置值
            this.SeachSelect = 'https://cn.bing.com/search?q=';
            this.SeachInput = '';
        },
        HandleDialogOpenAtNews() {
            axios.get('https://api.vvhan.com/api/60s?type=json')
                .then(response => {
                    this.toolsImg = response.data.imgUrl;
                    this.toolsTitle = "每天60秒读懂世界"
                    this.ToolsDialogVisible = true
                })
                .catch(error => {
                    console.error(error);
                });
        },
        HandleDialogOpenAtMoyu() {
            axios.get('https://api.vvhan.com/api/moyu?type=json')
                .then(response => {
                    this.toolsImg = response.data.url;
                    this.toolsTitle = "摸鱼日历"
                    this.ToolsDialogVisible = true
                })
                .catch(error => {
                    console.error(error);
                });
        },
        HandleDialogOpenAtFengjing() {
            axios.get('https://api.vvhan.com/api/view?type=json')
                .then(response => {
                    this.toolsImg = response.data.imgurl;
                    this.toolsTitle = "随机风景,不排除是AI生成的可能性"
                    this.ToolsDialogVisible = true
                })
                .catch(error => {
                    console.error(error);
                });
        }
    },
    components: {
        TimeBox,
        /* WebIframe */
    },
    /* vite动态导入 */
    async created() {
        const { DevType } = detectDeviceType();
        this.DevType = DevType;
        if (this.DevType === "mobile") {
            this.DialogWidth = this.MobileDialogWidth;
            await import("../style/seachmobile.css");
        } else {
            this.DialogWidth = this.PcDialogWidth;
            await import("../style/seach.css");
        }
    }
}
</script>
