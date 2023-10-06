//! Synchronous & Asynchronous 
//! Example: 

// console.log("app is started")
// setTimeout(()=> console.log("loading..."),2000)
// setTimeout(()=> console.log("app completed"),5000)
// console.log("Under process")     


//(1)app is started (2)loading...    (3)app completed (4)Under process    //! Synchronous
//(1)app is started (2)Under process (3)loading...    (4)app completed    //! ASynchronous

// *************************************************************************************************************************

//! Normal Example: 

// console.log("first");
// console.log("second");
// console.log("third");  // first second third



//! Callback using setTimeout Example 1: 

// console.log("first");
// setTimeout(() =>console.log("second"),2000);       ===>setTimeout is a Callback function
// console.log("third");       // first third second  ===>setTimeout 2000 m/s



//! Callback using setTimeout Example 2: 

// console.log("app is started")
// setTimeout(()=> console.log("loading..."),2000)
// setTimeout(()=> console.log("app completed"),5000)
// console.log("Under process")     //(1)app is started   (2)Under process   (3)loading...   (4)app completed



//! Callback using function Example: 

// var complete =()=>{      ===>complete is function name
//     console.log("Finish")
// }
// var add = (abc)=>{       ===>add is function name (callback)   abc ===>destructure method
//       var x = 2;
//       var y = 3;
//       console.log("sum is : ", x+y)
//       abc();
//    }
//   add(complete);        ===>func(func) function call     //sum is :  5     Finish


//! Callback using function Not a Prefered Method: JUST UNDERSTANDING

// var complete =()=>{      
//     console.log("Finish")
// }
// var add = ()=>{      
//       var x = 2;
//       var y = 3;
//       console.log("sum is : ", x+y)
//       complete();
//    }
//   add(complete);         //sum is :  5     Finish

// *************************************************************************************************************************

// ! Example for Call Stack, WebAPI, Event Loop, Queue:

// console.log("a")
// setTimeout(function(){
//     console.log("b")
// },5000)
// console.log("c")       //a c b   ===>Since b,5000 m/s printed

// *************************************************************************************************************************

// ! Example for Callback hell

setTimeout(() => {
    console.log("10");
    document.getElementById("display").innerText = "10";
  
    setTimeout(() => {
      console.log("9");
      document.getElementById("display").innerText = "9";
  
      setTimeout(() => {
        console.log("8");
        document.getElementById("display").innerText = "8";
  
        setTimeout(() => {
          console.log("7");
          document.getElementById("display").innerText = "7";
  
          setTimeout(() => {
            console.log("6");
            document.getElementById("display").innerText = "6";
  
            setTimeout(() => {
              console.log("5");
              document.getElementById("display").innerText = "5";
  
              setTimeout(() => {
                console.log("4");
                document.getElementById("display").innerText = "4";
  
                setTimeout(() => {
                  console.log("3");
                  document.getElementById("display").innerText = "3";
                  setTimeout(() => {
                    console.log("2");
                    document.getElementById("display").innerText = "2";
                    setTimeout(() => {
                      console.log("1");
                      document.getElementById("display").innerText = "1";
                      setTimeout(() => {
                        document.getElementById("display").innerText =
                          "✨ Wish You A Happy Birthday ✨";
                      },1000);//wish
                    }, 1000);//1
                  }, 1000);//2
                }, 1000);//3
              }, 1000); //4
            }, 1000); //5
          }, 1000); //6
        }, 1000);//7
      }, 1000); //8
    }, 1000); //9
  }, 1000);  //10

// *************************************************************************************************************************