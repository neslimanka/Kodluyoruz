
const gitHubForm = document.getElementById('gitHubForm');



gitHubForm.addEventListener('submit', (e) => {
    
    e.preventDefault();
    let usernameInput = document.getElementById('usernameInput');
   // let repoInput = document.getElementById('repos');
    let gitHubUsername = usernameInput.value;
    //let gitHubRepo = repoInput.value;
      
    requestUserRepos(gitHubUsername);
    requestUserRepos1(gitHubUsername);
   // requestUserRepos2(gitHubUsername,gitHubRepo);

})

function requestUserRepos(username){
    const userName = document.getElementById("username");
    const name = document.getElementById("name");
    const profilePhoto = document.getElementById("profile-photo");
    const repoInfo = document.querySelectorAll("#repo-info p  strong");
    const xhr = new XMLHttpRequest();
    const url = `https://api.github.com/users/${username}`;
    
    xhr.open('GET', url, true);
 
    xhr.onload = function () {
    
        const data = JSON.parse(this.response);
 
        if(data.name===undefined){
            userName.innerHTML="Kullanıcı Bulunamadı";

        }
        else {

            profilePhoto.src=data.avatar_url;
            userName.innerHTML = "@" + data.login;
            name.innerHTML = data.name;
            repoInfo[0].innerHTML=data.public_repos;
        }
        
      
    }

    xhr.send();

}
function requestUserRepos1(username){
    const xhr1 = new XMLHttpRequest();
    const url1 = `https://api.github.com/users/${username}/repos`;
  
    
    xhr1.open('GET', url1, true);
 
    xhr1.onload = function () {
    
        var lang=new Array();
        
        
        const data = JSON.parse(this.response);
       
     
        data.forEach(element => {
            lang.push(element.language)
            
            console.log(lang);
        });
  

    
     
        
        
     
        
     
    
        for (let i in data) {
        
            let ul1 = document.getElementById('userRepos');
      
          
            let li1 = document.createElement('li');

            li1.classList.add('list-group-item')
         
            li1.innerHTML = (`
                
                <p><strong>Repository:</strong> ${data[i].name}</p>
                <p><strong>Description:</strong> ${data[i].description}</p>
                <p><strong>URL:</strong> <a href="${data[i].html_url}">${data[i].html_url}</a></p>
                <p><strong>Language:</strong> ${data[i].language}</p>
 
            `);

            ul1.appendChild(li1);
         
        
        }

    }
    

    xhr1.send();
   
    
}
// function requestUserRepos2(username,repos){
 
//     const xhr2 = new XMLHttpRequest();
//     const url2 = `https://api.github.com/repos/${username}/${repos}/languages`;
    
//     xhr2.open('GET', url2, true);
 
//     xhr2.onload = function () {
    
//         const data = JSON.parse(this.response);
//         console.log(data);
//         let arr=new Array();
//         let lang=new Map();
//         const sayac=0;
//         var top=0;

      
      

//     }

//     xhr2.send();

// }


