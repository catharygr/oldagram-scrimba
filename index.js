const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
        postID: '2435667'
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        postID: '34455465'
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        postID: '785649'
    }
]

const contenido = document.querySelector('#contenido')

function generarHTML({name, username,location,avatar,post,comment,likes,postID}) {
    return ` 
    <article>
        <header class="autor">
            <img  class="avatar"  src="./${avatar}" alt="avatar">
            <div>
                <h3>${name}</h3>
                <p>${location}</p>
            </div>
        </header>
        <img class="picture" src="./${post}" alt="Selfi del autor">
        <div class="likes">
            <img data-postID="${postID}" id="like-bt" class="iconos" src="./images/icon-heart.png" alt="heart">
            <img class="iconos" src="./images/icon-comment.png" alt="comment">
            <img class="iconos" src="./images/icon-dm.png" alt="message">
        </div>
        <div class="comentarios">
            <p><span class="gordita">${likes}</span> likes</p>
            <p><span class="gordita">${username}</span> ${comment}</p>
        </div>
    </article>`
} 


(function displayPosts() {
    const generarPosts = posts.map( post => generarHTML(post)).join('')
    contenido.innerHTML = generarPosts
    function manejarLikes() {
        const heartColection = document.querySelectorAll('#like-bt')
        heartColection.forEach( heart => heart.addEventListener('click', () => {
            const postID = heart.getAttribute('data-postID')
    
            const postEncontrado = posts.find( post => post.postID === postID )
            postEncontrado.likes = postEncontrado.likes + 1
            console.log(postEncontrado.likes)
            displayPosts()
        }))
    }
    manejarLikes()
})()



