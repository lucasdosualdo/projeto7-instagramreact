import Post from './Post';

export default function Posts() {
  const posts = [
    {
      imgUser: "assets/img/meowed.svg",
      user: "meowed",
      imgContent: "assets/img/gato-telefone.svg",
      likedImg: "assets/img/respondeai.svg",
      likedUser: "respondeai",
      likedQnt: "101.523",
    },
    {
      imgUser: "assets/img/barked.svg",
      user: "barked",
      imgContent: "assets/img/dog.svg",
      likedImg: "assets/img/adorable_animals.svg",
      likedUser: "adorable_animals",
      likedQnt: "99.159",
    }
  ]
  return (
    <div class="posts">
      {posts.map(post =>
        <Post
          imgUser={post.imgUser}
          user={post.user}
          imgContent={post.imgContent}
          likedImg={post.likedImg}
          likedUser={post.likedUser}
          likedQnt={post.likedQnt}
        />)}
    </div>
  )
}