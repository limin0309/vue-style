console.log('aa');

let arr=[11,22,33,44,55];
arr.b=34;
for(let i=0;i<arr.length;i++){ // 编程式
    console.log(arr[i]); // 11,22,33,44,55
}

// 面试题：forEach ，for in，for ,for of 的区别
// 1）forEach不支持return
arr.forEach(item=>{ // 声明式(不关心如何实现)
    console.log(item)  // 11,22,33,44,55
})

for(let key in arr){  // key 会变成字符串类型 ，包括数组的私有属性也会打印出来
    console.log(typeof key,key) // 11,22,33,44,55,34
}

let obj ={company:'gaojihealth',age:'1'};// Object.keys将对象的key作为新的数组
// ['company','age']
for(let val of Object.keys(obj)){ // 支持return 并且是  值of 数组 (不能遍历对象，只能遍历数组)
    console.log(obj[val]); //  11,22,33,44,55
}

// 工作中比较常用filter和map filter主要用于删除  map主要用于更新
// 2)filter 是否操作原数组：不会   返回结果：过滤后的新数组   回调函数的返回结果：如果返回true，表示这一项放到新数组中
console.log([33,21,34,56,77,1,4,6].filter(item=>item>2&&item<5))  // [4]

// 3)map 映射 将原有的数组映射成一个新数组 [1,2,3]
// 转成 <li>1</li>  <li>2</li>  <li>3</li>
// 不操作原数组 返回新数组  回调函数中返回什么这一项就是什么
let mapArr=[1,2,3].map((item,index)=>{
    return `<li>${item}</li>` // ` `是es6中的模板字符串，遇到变量用${}取值
});
console.log(mapArr);  // [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ]
console.log(mapArr.join('')); // <li>1</li><li>2</li><li>3</li>  必须得加join('') 否则会返回带字符串的li

// 4)includes 返回的是boolean
let arr3=[1,2,3,4,5];
console.log(arr3.includes(5)); // true  返回的是boolean

// 5) 返回找到的那一项 不会改变数组 回调函数中返回true表示找到了，找到后停止循环,
// 找不到返回的是undefined
// let result = arr3.find((item,index)=> {  // 需要找到具体的某一项用find
//     return item.toString().indexOf(5)>-1
//     }
// )

// （6）some 找ture 找到true后返回，返回true  找不到返回false
// let result = arr3.some((item,index)=> {  // 需要找到具体的某一项用find
//     return item >-1
//     }
// )
//  (7)every 找false，找到false后返回，返回false
// （8）reduce 收敛四个参数  返回的是叠加后的结果，原数组不发生变化，毁掉函数返回的结果
//prev 代表的是数组的第一项，next是数组的第二项
// 第二次prev是undefined，（因为没有返回值，没有return，所以是undefined），next是数组的第三项

let sum=[1,2,3,4,5].reduce(function (prev,next,index,item){
    console.log(arguments,prev,next)
    // return 100  // 本地的返回值会作为下一次的上一次prev
    return prev+next
})

let sum2=[{price:30,count:2},{price:30,count:3},{price:30,count:4}].reduce(function (prev,next){
    console.log(prev,next);
    return prev+next.price*next.count
},0)
console.log(sum2)

let flat=[[1,2,3],[4,5,6],[7,8,9]].reduce(function(prev,next){
    return prev.concat(next)
})
console.log(flat)





