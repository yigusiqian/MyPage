<template>
    <!-- 这里是便携链接 -->
    <a-space size="small" direction="vertical">
        <a-link v-for="item in Link" :href="item.href" target="_blank" :hoverable="false">
            <img :src="item.icon" style="width: 3vh; height: 3vh" />
            <el-text truncated>{{ item.text }}</el-text>
        </a-link>
    </a-space>
</template>
<script>
import LinkData from '../data/cardlink.json'
export default {
    data() {
        return {
            Link: [],
        }
    },
    created() {
        this.Link = LinkData.Link;
    },
}
</script>