const listaUsers =  () => {

     fetch(`https://jsonplaceholder.typicode.com/users`)
         
         .then(response => response.json())  
         .then( async json => {
             //console.log(json);

             let tbody = document.getElementById('tbody');

             let listaUsuarios = [];

             listaUsuarios = json;

             for (let item of listaUsuarios){
                
                var linha = document.createElement('tr');
                var id = document.createElement('td');
                // var name = document.createElement('td');
                // var name = document.createElement('td');
                // var email = document.createElement('td');
                // var street = document.createElement('td');
                // var city = document.createElement('td');
                // var phone = document.createElement('td');
                // var companyName = document.createElement('td');

                id.textContent = item.id;
                linha.appendChild(id);
                console.log(id);


                // let id = item.id;
                // console.log(id);

                // let name = item.name;
                // console.log(name);

                // let email = item.email;
                // console.log(email);

                // let street = item.address.street;
                // console.log(street);

                // let city = item.address.city;
                // console.log(city);

                // let phone = item.phone;
                // console.log(phone);

                // let companyName = item.company.name;
                // console.log(companyName);



             }

             
         }) 
         .catch(err => console.log('Erro de solicitação', err)); 
 
 
 }

 listaUsers();
