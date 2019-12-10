//web service=it is interface between two servers via API
//root of webservice is http
//REST full api and SOAP service

//REST=representational statefull tranform(json)(modern)
//SOAP=simple object access protocol(xml)(almost outdated)

//to create json we need server side programing
//if we have json it can be fetch by using ajax,js,angular,react.

//REST API is an apllication program interface (API) that uses HTTP request to GET,PUT,POST and DELETE data 
//REST technology is genreally preferredd to the more robust simple Object Acess Protocol (SOAP) technology because
//REST leverages less bandwidth ,making it more for internet usage.

//what is web service
//A web is any piece of software that makes itself available over the internet and uses a standerdised xml or json messaging system. XML is used to encode all communication to a web service 
//is  a collection of open protocols and standards used for exchaning between apllication or systems.

//a web service is a way for two apllicatioon or electronic devices to communicate over a network.
//think it
//like one human coumminicating with another human to provide a service
// .....load git hub api
//comunicate between localserver to github server
const api="https://api.github.com/users";
window.fetch(api)
.then(data=>{
    data.json().then(git=>{
        var output= [];
       for(let user of git){//git.foreach(user=>{})
          output +=`
           <div class="container">
           <table class="table table-bordered mt-4">
           <tr>
           <th>id</th>
           <th>name</th>
           <th>photo</th>
           <th>repo</th>
           <th>url</th>
           </tr>
           <tr>
           <td>${user.id}</td>
           <td>${user.login}</td>
           <td><img style="width:100px;height:100px;border-radius:100%;"src="${user.avatar_url}"/></td>
           <td>${user.repos_url}</td>
           <td>${user.url}</td></tr></table></div>
           `;
           document.getElementById('template').innerHTML=output;
       }
    }).catch(err=>console.log(err))
})
.catch(err=>console.log(err));