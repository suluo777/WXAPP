// pages/about/about.js
Page({
   data: {
     name:'Coder why',
     age:'18',
     students:[
       {id:110,name:'Kobe',age:40},
       {id:111,name:'Harden',age:31},
       {id:112,name:'James',age:35},
       {id:113,name:'Curry',age:32}
     ],
     counter:0
   },
   handleBtnClick(){
     this.setData({
       counter:this.data.counter +1

      //  console.log(this.data.counter)
     })
   }
})