import {useState} from 'react';
export default function Dashboard(){
 const data=[
    {
            "OrderID":"OR1001",
            "Delivery_Date":"02-05-2005",
            "Price":123,
            "Description":"Fan" ,
            "Status":"Delivered"
        },
         {
            "OrderID":"OR1001",
            "Delivery_Date":"02-05-2005",
            "Price":123,
            "Description":"Fan" ,
            "Status":"Shipped"
        },
         {
            "OrderID":"OR1001",
            "Delivery_Date":"02-05-2005",
            "Price":123,
            "Description":"Fan" ,
            "Status":"Delivered"
        }
 ];

 const [filteredData,setData]=useState(data);
 const [oID,setId]=useState(null)



 function handleFilter(category){
    if(category=="none")
    {
        setData(data);
    }
    else{
     const filData=data.filter(element=>element.Status==category)
     setData(filData);
    }
 }


  function search(orderId){
   
     const filData=data.filter(element=>element.OrderID==orderId)
     setData(filData);
    
 }



        
   return (
     <div>
        <div>
           <h2>Track Your Order</h2>
        </div>
        <div>
        <input type="search" name="search" id="search-bar" onChange={(e)=>setId(e.target.value)}/>
        <button onClick={()=>search(oID)}>Search</button>
        <select id="selectedBox" onClick={(e)=>handleFilter(e.target.value)}>
            <option value="none"> View History</option>
            <option value="Delivered">Delivered</option>
            <option value="Shipped"> Shipped </option>
            <option value="Placed">Placed</option>
         </select>
        <table>
            <thead>
            <th>Order ID</th>
            <th>Delievery_Date</th>
            <th>Price</th>
            <th>Description</th>
            <th>Status</th>
            </thead>
            <tbody>
                
               {filteredData.map((e,index)=>{
                    return <tr key={index} >
                        <td>{e.OrderID}</td>
                        <td>{e. Delivery_Date}</td>
                        <td>{e.Price}</td>
                        <td>{e.Description}</td>
                        <td>{e.Status}</td>
                        </tr>})}

                        </tbody>
                                                
                
               

        </table>
        </div>
       


     </div>
   )
}