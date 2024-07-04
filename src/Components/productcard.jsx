
import Shoesdata from '../shoesdata.json'
import Productcards from './Productcards'
import { rawdata } from '../features/CartSlice'
import {useDispatch } from 'react-redux';
import { useState } from 'react';
import Allproducts from '../Screens/Allproducts';

//function Updatevalue({name,id,price,imageURL}){
    

//}

const Productcard = () => {   

const keys_in_shoesdata=Object.keys(Shoesdata)
   
   const data = []

    return (

        <div>
{
    
 keys_in_shoesdata.map((item,index)=>{
    
       
        data.push(Shoesdata[item]);



})   }



{

<Productcards  Product={data} />

}


          
</div>



            )
            
}

            export default Productcard