// 格式化 money 类型的数据
function formatMonye(value, decimalCount = 2) {
    const dataString = (value + '').toString().replace(/^\s*|\s*$|,*/g, ''); // 去除空格

    if (dataString.match(/^-?\d*\.?\d*$/) === null || Number(value).toString() === 'NaN') {
        return '--'; // 不合法数据
    }

    if (decimalCount === null || decimalCount <= 0) {
        return Number(value).toLocaleString('en-US', { maximumFractionDigits: 16 }); // 不处理小数部分，保留原来数据。整数部分格式化处理
    }

    const [intData = '', decimalData = '0'] = (value + '').split('.');

    const intString = Number(intData).toLocaleString();
    const decimalString = Number('0.' + decimalData)
        .toFixed(decimalCount)
        .split('.')[1]; // 小数位单独运算，提高精度

    return intString + '.' + decimalString;
}
