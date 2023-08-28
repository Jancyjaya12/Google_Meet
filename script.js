// const btn1 = document.getElementById('quest1');
// const btn2 = document.getElementById('quest2');
// const btn3 = document.getElementById('quest3');
// const btn4 = document.getElementById('quest4');
// const btn5 = document.getElementById('quest5');
// const btn6 = document.getElementById('quest6');
// const divt= document.querySelector('.drop');

// let check = true;
// function checktrue(){
//   if(check){
//     divt.style.display='block';
//     check=false;
//     console.log("hello");
//   }
//   else{
//     divt.style.display='none';
//     check=true;
//     console.log(
//       'hai'
//     );
//   }
// }
//   btn1.addEventListener('click',checktrue);
//   btn2.addEventListener('click',checktrue);
//   btn3.addEventListener('click',checktrue);
//   btn4.addEventListener('click',checktrue)
//   btn5.addEventListener('click',checktrue)
//   btn6.addEventListener('click',checktrue)


// const footquest = document.querySelector('.footquest')
// const btn1 = document.querySelectorAll('.quest1');
// const divt = document.querySelectorAll('.drop');


// footquest.addEventListener("click", function (e) {
//   const id = e.target.dataset.id;

//   if (id) {
//     btn1.forEach(function (btn) {
//       btn.classList.remove("live")
//     });

//     e.target.classList.add("live");
//     divt.forEach(function (drop) {
//       drop.classList.remove("live")
//     })
//     const elm = document.getElementById(id);
//     elm.classList.add("live")
//   }

// })

const accordionContent = document.querySelectorAll(".accordion-content");

accordionContent.forEach((item, index) => {
  let header = item.querySelector("header");
  header.addEventListener("click", () => {
    item.classList.toggle("open");

    let description = item.querySelector(".description");
    if (item.classList.contains("open")) {
      description.style.height = `${description.scrollHeight}px`; //scrollHeight property returns the height of an element including padding , but excluding borders, scrollbar or margin
      item.querySelector("i").classList.replace("fa-chevron-down", "fa-chevron-up");
    } else {
      description.style.height = "0px";
      item.querySelector("i").classList.replace("fa-chevron-up", "fa-chevron-down");
    }
    removeOpen(index); //calling the function and also passing the index number of the clicked header
  })
})

function removeOpen(index1) {
  accordionContent.forEach((item2, index2) => {
    if (index1 != index2) {
      item2.classList.remove("open");

      let des = item2.querySelector(".description");
      des.style.height = "0px";
      item2.querySelector("i").classList.replace("fa-chevron-up", "fa-chevron-down");
    }
  })
}
