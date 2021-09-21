
const gitHubForm = document.getElementById('gitHubForm');



gitHubForm.addEventListener('submit', (e) => {
    

    e.preventDefault();

    
    let usernameInput = document.getElementById('usernameInput');
    //let reponameInput=document.getElementById('reponameInput');

   
    let gitHubUsername = usernameInput.value;  
    //let gitHubReponame=reponameInput.value;        

    
    requestUserRepos(gitHubUsername);

})




function requestUserRepos(username){
    
    
    const xhr1 = new XMLHttpRequest();
    const xhr = new XMLHttpRequest();
    
    const urlone=`https://api.github.com/users/${username}`;
    const url = `https://api.github.com/users/${username}/repos`;
    //https://api.github.com/users/neslimanka/repos?per_page=100
   

    xhr.open('GET', url, true);
    xhr1.open('GET', urlone, true);
    
    
   
    xhr.onload = function () {
    
       
        const data = JSON.parse(this.response);
    
 
            
        
       
        for (let i in data) {
            
            
            const repoList=data.length;
            console.log(repoList);
            const repocount=data.length;
            let ul1 = document.getElementById('userRepos');
           
          
            let li1 = document.createElement('li');
         
            
            li1.classList.add('list-group-item')
         
            
          
            li1.innerHTML = (`
                <p><strong>Repo(s):</strong> ${data.length}</p> 
                <p><strong>Repository:</strong> ${data[i].name}</p>
                <p><strong>Description:</strong> ${data[i].description}</p>
                <p><strong>URL:</strong> <a href="${data[i].html_url}">${data[i].html_url}</a></p>
                <p><strong>Language:</strong> ${data[i].language}</p>
               
                
                
            `);
       
            

   
            ul1.appendChild(li1);
         
        
        }

    }
    xhr1.onload = function () {
    
       
        const data = JSON.parse(this.response);
        console.log(data);
 
        let ul = document.getElementById('user');
    
          
        let li = document.createElement('li');
        
        
        li.classList.add('list-group-item')
        
      
        li.innerHTML = (`
            <p><strong>Username:</strong> ${data.name}</p> 
          
         
           
            
            
        `);

        ul.appendChild(li);
       
       
     

    }

    xhr.send();
    xhr1.send();
    
}

