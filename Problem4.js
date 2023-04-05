// 4번 문제.

let user = {
  Name: "지환",
  years: 23,
};

// 아래에 코드를 작성해주세요 ~

let {Name, years, isAdmin} = user;

age = years;

if(isAdmin==undefined){
  isAdmin = false;
}
alert(Name); // "지환"
alert(age); // 23
alert(isAdmin); // false
