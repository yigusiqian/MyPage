<template>
    <a-card class="search">
        <a-card class="searchTime" :bordered="false">
            <TimeBox class="TimeBox" />

            <el-input v-model="SeachInput" placeholder="请输入..." clearable class="input">
                <template #prepend>
                    <el-select v-model="SeachSelect" style="width: 100px">
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
        </a-card>
    </a-card>
</template>
  
<script>
import TimeBox from './TimeBox.vue';
/* import WebIframe from './WebIframe.vue'; */
export default {
    data() {
        return {
            SeachInput: '',
            SeachSelect: 'https://cn.bing.com/search?q=',
        };
    },
    methods: {
        seach() {
            const url = this.SeachSelect + encodeURIComponent(this.SeachInput);
            window.open(url, '_blank').then(/* 进入搜索清空输入框 */
                this.SeachSelect = 'https://cn.bing.com/search?q=',
                this.SeachInput = ''
            );
        }
    },
    components: {
        TimeBox,
        /* WebIframe */
    }
};
</script>
<style src="../style/seach.css"/>
