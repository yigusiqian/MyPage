<template>
    <a-typography-text :type="displayType" style="font-size: x-large;">{{ displayText }}</a-typography-text>
</template>
  
<script>
export default {
    data() {
        return {
            typewriter: [
                "一块毛玻璃的美学之路",
                "在遥远理想的彼岸",
                "漫漫征途，只有自己才是灯塔和希望",
                "忆苦思甜，忆故才能思迁",
                "走再远，也不能忘记了来时的路"
            ],
            currentIndex: 0,
            displayText: "",
            displayType: "secondary" // 初始类型为 secondary
        };
    },
    mounted() {
        this.typeWriterEffect();
    },
    methods: {
        typeWriterEffect() {
            if (this.currentIndex >= this.typewriter.length) {
                // 所有句子都打印完毕，重新开始
                this.currentIndex = 0; // 重置计数器
                this.displayText = "";
            }
            const currentText = this.typewriter[this.currentIndex];
            let index = 0;

            const typeInterval = setInterval(() => {
                if (index < currentText.length) {
                    // 写入字符
                    this.displayText += currentText[index];
                    index++;
                } else {
                    clearInterval(typeInterval);
                    // 写完，执行删除字符
                    setTimeout(() => {
                        this.deleteText();
                    }, 1000);
                }
            }, 200);
        },
        deleteText() {
            const currentText = this.typewriter[this.currentIndex];
            let index = currentText.length - 1;

            const deleteInterval = setInterval(() => {
                if (index >= 0) {
                    this.displayText = this.displayText.slice(0, -1);
                    index--;
                } else {
                    clearInterval(deleteInterval);
                    this.currentIndex++;
                    this.displayText += "|"; // 添加光标字符
                    this.displayType = this.getRandomType(); // 随机选择类型
                    setTimeout(() => {
                        this.displayText = this.displayText.slice(0, -1); // 删除光标字符
                        this.typeWriterEffect();
                    }, 1000);
                }
            }, 100);
        },
        getRandomType() {
            const types = ["secondary", "success", "warning", "primary"];
            const randomIndex = Math.floor(Math.random() * types.length);
            return types[randomIndex];
        }
    }
};
</script>
