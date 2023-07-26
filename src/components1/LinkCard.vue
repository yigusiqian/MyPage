<template>
    <el-col v-for="(item, index) in items" :key="index">
        <a-card>
            <div :style="{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }">
                <span :style="{ display: 'flex', alignItems: 'center', color: '#1D2129' }">
                    <a-avatar :style="{ marginRight: '8px', backgroundColor: '#165DFF' }" :size="28">
                        {{ item.avatar }}
                    </a-avatar>
                    <a-typography-text>{{ item.text }}</a-typography-text>
                </span>
                <a-link :href="item.href" icon target="_blank" />
            </div>
        </a-card>
    </el-col>
</template>
  
<script>
export default {
    props: ['items']
}
</script>
  