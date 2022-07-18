function ionIcon(props) {
    <ion-icon name={props.name}></ion-icon>
}

const names = [
   "paper-plane-outline",
   "compass-outline",
   "heart-outline",
   "person-outline"
]

const namesMap = names.map( name => <ion-icon name={name}></ion-icon>)