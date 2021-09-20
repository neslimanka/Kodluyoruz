
const gitHubForm = document.getElementById('gitHubForm');



gitHubForm.addEventListener('submit', (e) => {
    

    e.preventDefault();

    
    let usernameInput = document.getElementById('usernameInput');
    let reponameInput=document.getElementById('reponameInput');

   
    let gitHubUsername = usernameInput.value;  
    let gitHubReponame=reponameInput.value;        

    
    requestUserRepos(gitHubUsername,gitHubReponame);

})




function requestUserRepos(username,reponame){
    
    
    const xhr = new XMLHttpRequest();
    
   
    const url = `https://api.github.com/repos/${username}/${reponame}/languages`;
   

    xhr.open('GET', url, true);
    
    
   
    xhr.onload = function () {
    
       
        const data = JSON.parse(this.response);
        console.log(data);
 
            
        
       
        for (let i in data) {
            
            
          
            let ul = document.getElementById('userRepos');
    
          
            let li = document.createElement('li');
            
            
            li.classList.add('list-group-item')
        
          
            li.innerHTML = (`
            
                <p><strong>Language:</strong> ${data[i]}</p>
                
            `);
   
            ul.appendChild(li);
        
        }

    }
    

    xhr.send();
    
}

