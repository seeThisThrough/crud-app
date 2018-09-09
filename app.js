
// Set the configuration for your app
// TODO: Replace with your project's config object

// Get a reference to the database service
var database = firebase.database();

//submit
//document.getElementById("text-body").onclick = function

var post = firebase.database().ref('users/');

post.on('value', function(snapshot) {
  //console.log(snapshot.val());
  removePosts()
  if(snapshot.val()){
  Object.values(snapshot.val()).forEach(updateBlog)
 }
});

var title = document.getElementById('post-title');

var body = document.getElementById('post-body');

//writeUserData
function writeData() {
  firebase.database().ref('users/').push({
    title: document.getElementById('text-title').value,
    body: document.getElementById('text-body').value
  });
}

//readUserData
function updateBlog(post) {
 console.log(post.title, post.body) 

 var placeholder = document.getElementById('placeholder');
 
 var newTitle = document.createElement('h2');
   newTitle.appendChild(document.createTextNode(post.title));

 //var newBody = document.createElement('p');
   //newBody.appendChild(document.createTextNode(post.body));

   placeholder.append(newTitle);
   //placeholder.append(newBody);
  
}

function removePosts() {
  var myNode = document.getElementById("placeholder");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild)
  }
}




