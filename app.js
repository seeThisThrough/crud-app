// Set the configuration for your app
// TODO: Replace with your project's config object

// Get a reference to the database service
var database = firebase.database();

var blogs = [];

//onSubmit variables
var isEditing = false;

var editPostData;

var editId;

//database variable
var fireBasePost = firebase.database().ref('users/');
//console.log(post.key)

//database method which fetches data on update
fireBasePost.on('value', function(snapshot) {
  //console.log(snapshot.val());
  removePosts()
  var data = snapshot.val();
  for (var postId in data) {
    var post = data[postId];
    //console.log(data)
    //console.log(postId + '    ' + data[postId].title);
    blogPost(postId, post);
  };
});

var title = document.getElementById('post-title');

var body = document.getElementById('post-body');

//writeUserData
function writeData() {
  firebase.database().ref('users/').push({
    title: document.getElementById('text-title').value,
    body: document.getElementById('text-body').value
  });
};

function onSubmit() {
  if(isEditing) {
   updateData(editId, editPostData);
   isEditing = false;
  }else {
    writeData();
  };
};

function updateData(postId, post) {
  firebase.database().ref('users/' + postId).set({
    title: document.getElementById('text-title').value,
    body: document.getElementById('text-body').value
  });
}

//readUserData
function blogPost(postId, post) {
  //console.log(post)
  var placeholder = document.getElementById('placeholder');
 
  var newTitle = document.createElement('h3');

   newTitle.appendChild(document.createTextNode(post.title));
 
  var newBody = document.createElement('p');

   newBody.append(document.createTextNode(post.body));
 
 //timeStamp
 var timeStamp = document.createElement('h6')

  timeStamp.append(moment().format('LLL'))

 //edit button element
  var editBtn = document.createElement('button');

  var eText = document.createTextNode('edit');

  editBtn.appendChild(eText);
  editBtn.setAttribute('id', 'edit-button');
  editBtn.addEventListener("click", function(){editPost(postId, post)});

 //delete button element
  var deleteBtn = document.createElement('button');

  var dText = document.createTextNode('delete');

  deleteBtn.appendChild(dText);
  deleteBtn.setAttribute('id', 'delete-button');
  deleteBtn.addEventListener("click", function(){deletePost(postId, post)})// not working

//moving things to container
  placeholder.append(newTitle);
  placeholder.append(timeStamp);
  placeholder.append(newBody);
  placeholder.append(editBtn)
  placeholder.append(deleteBtn) 
}
//helper function of readUserData
function removePosts() {
  var myNode = document.getElementById("placeholder");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  };
};


//Delete Posts
function deletePost(postId, post) {
  //firebase.database().ref('users/').update(title, body);
  //console.log(postId, post)
  //console.log("delete function press successful on ", post.title, "and body ", post.body)
  firebase.database().ref('users/' + postId).remove();
}


function editPost(postId, post) {
  //edit mode
  isEditing = true;
  editPostData = post;
  editId = postId;
  //console.log(postId, post)
  //console.log("edit function press successful on ", post.title, "and body ", post.body)
  document.getElementById('text-title').value = post.title;
  document.getElementById('text-body').value = post.body;
  //scroll to top of page
  window.scrollTo(0, 0);
};