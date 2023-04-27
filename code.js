function myfunc(event) {
   
    event.preventDefault();

   const name= document.getElementById('name').value;
   const price = document.getElementById('price').value;
    
   localStorage.setItem('name', name);
   localStorage.setItem('price', price);

   const obj = {
       name,
       price
   }

   axios.post("https://crudcrud.com/api/df13a6b1da7643488321ed7c88bb8ee7/products"
   , obj).then((response)=>
   {
    console.log(response)
   })
   .catch((error)=> {
    console.log(error)
   })
   //localStorage.setItem(obj.price, JSON.stringify(obj));
   showuseronscreen(obj)
} 

function showuseronscreen(obj) {
    const parentele = document.getElementById("listofitems")

    const childele = document.createElement('li')
    childele.textContent = obj.name + '-' + obj.price;

    //parentele.innerHTML = parentele.innerHTML + '<li>${obj.name} - ${obj.email}</li>';

    const deletebtn = document.createElement('input');
    deletebtn.type = "button";
    deletebtn.value = 'Delete';
    deletebtn.onclick = () => {

        axios.delete("https://crudcrud.com/api/df13a6b1da7643488321ed7c88bb8ee7/productlist"
   , obj).then((response)=>
   {
    console.log(response)
   })
   .catch((error)=> {
    console.log(error)
   })

        //localStorage.removeItem(obj.price)
        parentele.removeChild(childele)


    }




    const editbtn = document.createElement('input');
    editbtn.type = "button";
    editbtn.value = 'Edit';
    editbtn.onclick = () => {

        localStorage.removeItem(obj.email)
        parentele.removeChild(childele)
        document.getElementById('name').value = obj.name;
        document.getElementById('price').value = obj.price;

    }


    childele.appendChild(deletebtn)
    childele.appendChild(editbtn)
    parentele.appendChild(childele)

}



 