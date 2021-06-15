// This function return a string representation of number value with a comma (,) character between every 3rd digit. //
const res = (num) => {
    return Number(num.toFixed(0)).toLocaleString().split(/\s/).join(',') + '.' + Number(num.toString().slice(num.toString().indexOf('.')+1))};
console.log(res(123456.2));


export const formatNumber = (number) => {
    return number.toLocaleString('en-US')
};

console.log(result(9874562365.32));