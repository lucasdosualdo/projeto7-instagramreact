function Topo(props) {
    return (
        <div class="topo">
            <div class="usuario">
                <img src={props.imgUser} />
                {props.user}
            </div>
            <div class="acoes">
                <ion-icon name={props.ionicon}></ion-icon>
            </div>
        </div>
    )
}
function Conteudo(props) {
    return (
        <div class="conteudo">
            <img src={props.imgContent} />
        </div>
    )
}
function Fundo(props) {

    return (
        <div class="fundo">
            <div class="acoes">
                <div>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
            </div>

            <div class="curtidas">
                <img src={props.likedImg} />
                <div class="texto">
                    Curtido por <strong>{props.likedUser}</strong> e <strong>outras {props.likedQnt} pessoas</strong>
                </div>
            </div>
        </div>
    )
}

export default function Post(props) {



    return (
        <div class="post">
            <Topo
                imgUser={props.imgUser}
                user={props.user}

            />
            <Conteudo
                imgContent={props.imgContent}
            />


            <Fundo
                likedImg={props.likedImg}
                likedUser={props.likedUser}
                likedQnt={props.likedQnt}
            />
        </div>
    )
}