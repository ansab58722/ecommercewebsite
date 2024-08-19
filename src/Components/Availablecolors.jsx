import React from 'react'

export const Availablecolors = ({url,color}) => {
    const addremoveclass = (e) => {
        document.querySelector(".colour").attributes.value.value=e.target.attributes.value.value
        let active = document.querySelectorAll(".vactive");
        for (let index = 0; index < active.length; index++) {
          active[index].classList.remove("vactive");
        }
        e.target.classList.add("vactive");
        var parent =
          e.target.parentElement.parentElement.parentElement.parentElement
          .parentElement;
           // console.log(e.target.closest(".mainimage"));
        parent.querySelector(".mainimage").src = e.target.src;
      };

if(url!=undefined){

    return(

        <span id="pink">


          
        <img
          className="circle  vactive"
          src={url}
          value={color}
          alt="NIL"
         onClick={(e) => addremoveclass(e)}
        />
      </span>

    )
}else{

    return;
}


}

export default Availablecolors