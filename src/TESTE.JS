function ionIcon(props) {
    <ion-icon name={props.name}></ion-icon>
}
const names = [
    "paper-plane-outline",
    "compass-outline",
    "heart-outline",
    "person-outline"
]
const namesMap = names.map(name => <ion-icon name={name}></ion-icon>)
const stories = [
    {
        image: "assets/img/9gag.svg",
        username: "9gag"
    },
    {
        image: "assets/img/meowed.svg",
        username: "meowed"
    },
    {
        image: "assets/img/barked.svg",
        username: "barked"
    },
    {
        image: "assets/img/nathanwpylestrangeplanet.svg",
        username: "nathanwpylestrangeplanet"
    },
    {
        image: "assets/img/wawawicomics.svg",
        username: "wawawicomics"
    },
    {
        image: "assets/img/respondeai.svg",
        username: "respondeai"
    },
    {
        image: "assets/img/filomoderna.svg",
        username: "filomoderna"
    },
    {
        image: "assets/img/memeriagourmet.svg",
        username: "memeriagourmet"
    }
]
const imagesMap = stories.map(img => <img src={img.image} />)
const usersMap = stories.map(user => <img src={user.username} />)
