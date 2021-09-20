
const gitHubForm = document.getElementById('gitHubForm');


// Listen for submissions on GitHub username input form
gitHubForm.addEventListener('submit', (e) => {
    
    // Prevent default form submission action
    e.preventDefault();

    // Get the GitHub username input field on the DOM
    let usernameInput = document.getElementById('usernameInput');
    let reponameInput=document.getElementById('reponameInput');

    // Get the value of the GitHub username input field
    let gitHubUsername = usernameInput.value;  
    let gitHubReponame=reponameInput.value;        

    // Run GitHub API function, passing in the GitHub username
    requestUserRepos(gitHubUsername,gitHubReponame);

})




function requestUserRepos(username,reponame){
    
    // Create new XMLHttpRequest object
    const xhr = new XMLHttpRequest();
    
    // GitHub endpoint, dynamically passing in specified username
    const url = `https://api.github.com/repos/${username}/${reponame}/languages`;
   
    // Open a new connection, using a GET request via URL endpoint
    // Providing 3 arguments (GET/POST, The URL, Async True/False)
    xhr.open('GET', url, true);
    
    // When request is received
    // Process it here
    xhr.onload = function () {
    
        // Parse API data into JSON
        const data = JSON.parse(this.response);
        console.log(data);
        
        
        // Loop over each object in data array
        for (let i in data) {
            
            
            // Get the ul with id of of userRepos
            let ul = document.getElementById('userRepos');
    
            // Create variable that will create li's to be added to ul
            let li = document.createElement('li');
            
            // Add Bootstrap list item class to each li
            li.classList.add('list-group-item')
        
            // Create the html markup for each li
            li.innerHTML = (`
            
                <p><strong>Language:</strong> ${data[i]}</p>
                
            `);
            
            // Append each li to the ul
            ul.appendChild(li);
        
        }

    }
    
    // Send the request to the server
    xhr.send();
    
}