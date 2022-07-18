function Titulo () {
    return (
        <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
    )
  
  }
  
  function Sugestao (props) {
    return (
        <div class="sugestao">
        <div class="usuario">
          <img src= {props.imgSugestion} />
          <div class="texto">
            <div class="nome">{props.userSugestion}</div>
            <div class="razao">{props.follower}</div>
          </div>
        </div>
  
        <div class="seguir">{props.follow}</div>
      </div>
  
    )
   
  }
  
export default function Sugestoes () {
    const sugestoes = [
        {
            imgSugestion: "assets/img/bad.vibes.memes.svg",
            userSugestion: "bad.vibes.memes",
            follower: "Segue você",
            follow: "Seguir"
        },
        {
            imgSugestion: "assets/img/chibirdart.svg",
            userSugestion: "chibirdart",
            follower: "Segue você",
            follow: "Seguir"
        },
        {
            imgSugestion: "assets/img/razoesparaacreditar.svg",
            userSugestion: "razoesparaacreditar",
            follower: "Segue você",
            follow: "Seguir"
        },
        {
            imgSugestion: "assets/img/adorable_animals.svg",
            userSugestion: "adorable_animals",
            follower: "Segue você",
            follow: "Seguir"
        },
        {
            imgSugestion: "assets/img/smallcutecats.svg",
            userSugestion: "smallcutecats",
            follower: "Segue você",
            follow: "Seguir"
        }
    ]
  
    return (
  <div class="sugestoes">
        <Titulo />
    
  
        {sugestoes.map(sugestao => (
            <Sugestao
            imgSugestion = {sugestao.imgSugestion}
            userSugestion ={sugestao.userSugestion}
            follower = {sugestao.follower}
            follow = {sugestao.follow}
            />
        ))}
  </div>
    )
  
  }