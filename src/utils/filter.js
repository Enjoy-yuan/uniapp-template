import Vue from "vue";

// 减去n月，nowMonth格式形如201902，类型为number
Vue.filter("minusMonth", (nowMonth, n) => {
  let month1 = nowMonth - n;
  let month2 = nowMonth - 1;
  if (month1 % 100 > 12 || month1 % 100 === 0) {
    month1 -= 88;
  }
  if (month2 % 100 > 12 || month2 % 100 === 0) {
    month2 -= 88;
  }
  if (n === 1) {
    return month2;
  } else {
    return `${month1} ~ ${month2}`;
  }
});