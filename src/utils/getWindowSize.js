//这是一个函数，用来判断用户窗口尺寸
export function getWindowSize() {
    // 获取窗口的宽度和高度
    const Wwidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const Wheight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    return { Wwidth, Wheight };
}
