//这是一个函数，用来判断用户设备类型
export function detectDeviceType() {
    // 获取用户代理字符串
    const userAgent = navigator.userAgent;

    // 判断设备类型
    if (userAgent.match(/Mobile|Android/i)) {
        return { DevType: 'mobile', PcShow: false };
    } else if (userAgent.match(/Windows NT/i)) {
        return { DevType: 'pc', PcShow: true };
    } else {
        return { DevType: 'other', PcShow: false };
    }
}
