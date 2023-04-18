AOS.init();


const container = document.querySelector(".cont");

const data  = async ()=>{
    try {
        const fetchres =await fetch("/data.json");
        const data = await fetchres.json();
        return data;

    } catch (error) {
        console.log(error);
        alert("something is wrong !")
    }
}
// add()



// data.forEach(da[i] => {
//     container.innerHTML += `
     
//     <div class="card ${da[i].size}">
//       <a href="${da[i].src}" data-lightbox="hira">
//         <img data-src="${da[i].src}" class="lazyload" alt="hira" />
//       </a>
//     </div>`
// });


// infinite scroll 
// nahid hasan sagar

let from = 8;
let to = 16;


 let strNew = async (sour , num)=>{
    let da = await data();
    let n ;
    
    if( da.length > num ){
      n = da.length - num;
    }else{
      n = 0;
    }
    for ( let i = da.length - 1 ; i > n; i--) {
        sour.innerHTML += `<div class="card data-aos="fade-up" ${da[i].size}">
        <a href="${da[i].src}" data-lightbox="hira">
          <img data-src="${da[i].src}" class="lazyload" alt="hira" />
        </a>
     </div>`
        
    }

}

 let str = async (sour , num)=>{
    let da = await data();
    // console.log(da[0]);
    let n ;
    if( da.length > num ){
      n = num;
    }else{
      n = da.length
    }
    for (let i = 0; i < n; i++) {
        sour.innerHTML += `<div data-aos="fade-up" class="card ${da[i].size}">
              <a href="${da[i].src}" data-lightbox="hira">
                <img data-src="${da[i].src}" class="lazyload" alt="hira" />
              </a>
           </div>`
        
    }

}

str(container ,to);

let search = document.querySelector('#search');

async function qury_movie (value){

  let data2 = await data();
  let newdata = [];
  let key = value.toLowerCase();

  for (let i = 0; i < data2.length; i++) {
    
    let v = data2[i].tag.toLowerCase();
    
    if( v.indexOf(key) !== -1){
      newdata.push(data2[i]);
      // console.log(v);
      // console.log(` macth ${v} , with ${key}`)
    
    }
    else{
      // console.log(`not macth ${v} , with ${key}`)
      // console.log(key);
    }

    
  }
  return newdata;

}




function dib(fn,dl){
  let set;
  return function(){
      if(set){
          clearTimeout(set)
      }
   set = setTimeout(()=>{
          fn();
      },dl)
  }
}


let red =  async (data3 , ti)=>{
  console.log(data3);
  
  ti.innerHTML='';
  let n ;
  if( data3.length > 20 ){
    n = 20;
  }else{
    n = data3.length
  }
  
  for (let i = 0; i < n; i++) {
              ti.innerHTML += `<div data-aos="fade-up" class="card ${da[i].size}">
              <a href="${da[i].src}" data-lightbox="hira">
                <img data-src="${da[i].src}" class="lazyload" alt="hira" />
              </a>
           </div>`
              
        }
}




 let body = document.querySelector('body');
//  aoto scroll
// let stid;
// window.scrollbars.addEventListener("click",()=>{
//   console.log('ok');
// })

     function autoScroll(i){
      
      console.log(flavoursScrollWidth);
      if(i < flavoursScrollWidth + 200){
        stid = setTimeout(() => {
        verti.scrollTo(i, 0);
            i+= 5;
            autoScroll(i)
            
           }, 1);


      }else{
        return
      }
          
          
     }






// infinit scrollprint

 async function scp (div,from,to){

   let da = await data();

   if (to < da.length){
     
        for (let i = from; i < to; i++) {
     

          console.log(`frist`+ i);

          let n = `<div data-aos="fade-up" class="card ${da[i].size}">
          <a href="${da[i].src}" data-lightbox="hira">
            <img data-src="${da[i].src}" class="lazyload" alt="hira" />
          </a>
       </div>`
          
          div.insertAdjacentHTML('beforeend', n);
      
          }

   }else{
     
   for (let i = from; i < da.length; i++) {
     
     console.log(i);
    let n = `<div data-aos="fade-up" class="card ${da[i].size}">
    <a href="${da[i].src}" data-lightbox="hira">
      <img data-src="${da[i].src}" class="lazyload" alt="hira" />
    </a>
 </div>`
    
    div.insertAdjacentHTML('beforeend', n);
 
    }
   }
   




   
  }


window.addEventListener('scroll', dib(()=>{
  let {scrollTop, clientHeight, scrollHeight} = document.documentElement;
  
if(scrollTop + clientHeight + 60> scrollHeight){
  from = from + 8;
  to = to + 8;
  scp(container,from,to)}
},300));

// loadmore.addEventListener('click', dib(()=>{
//   alert('o')
//   let {scrollTop, clientHeight, scrollHeight} = document.documentda[i];
  
// if(scrollTop + clientHeight + 10> scrollHeight){
//   from = from + 4;
//   to = to + 4;
//   scp(container,from,to)}
// },300));