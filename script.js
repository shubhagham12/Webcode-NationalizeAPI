
//Creating  HTML elements with DOM only.

document.body.innerHTML=`
<div class="form-group box1">
<br>
<input type="text" id="num" placeholder="Enter name here ">

<button onclick="getData()" id="btn">Search</button>
</div>
<br>
<div id="result">
   
 </div>
`


//Get the data from Nationalize API Using #Fetch & #await
async function getData(){

    try {
        let uname=document.getElementById("num").value;
        console.log(uname);
        let url=`https://api.nationalize.io?name=${uname}`;
       // console.log(url)

       let response= await fetch(url);
       let data= await response.json();

       //console.log(data.country[0],data.country[1]);
      

        //  displaying the top two countries and Probablity
        let result=document.getElementById("result");

     result.innerHTML=`
    <div class="format">

        <div id="highlight">Results for <b> ${data.name}</b></div><br>
            
        <!-- displaying data in tabular format -->
    <table id="tab">
        <tr>
            <th>Country ID</th>
            <th>Probablity</th>
        </tr>
        <tr>
            <td>${data.country[0].country_id}</td>
            <td>${data.country[0].probability}</td>
        </tr>
        <tr>
            <td>${data.country[1].country_id}</td>
            <td>${data.country[1].probability}</td>
        </tr>
    </table>
    </div>
    `;

    // clearing the text after clicking the on button
    uname=document.querySelector("#num").value="";
    

    } catch (error) {
        console.log(error);        
    }
    
}

  






 