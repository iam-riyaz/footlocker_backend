
async function getdata(){
 
    let res = await fetch("http://localhost:3000/products")
    
    console.log(res)


}

getdata()