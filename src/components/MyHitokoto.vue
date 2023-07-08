<template>
    <el-button type="primary" @click="getHitokoto" size="small">换</el-button>
    <el-text>{{ showHitokoto }}——来自：一言</el-text>
</template>
  
<script>
import axios from 'axios';

export default {
    data() {
        return {
            showHitokoto: ':D 获取中...',
        };
    },
    methods: {
        getHitokoto() {
            axios.get('https://v1.hitokoto.cn')
                .then(response => {
                    //console.log(response.data.hitokoto);检查点
                    this.showHitokoto = response.data.hitokoto;
                })
                .catch(error => {
                    console.error(error);
                });
        },
    },
    mounted() {
        this.getHitokoto();
    },
};
</script>
  