import Story from "./Story"
export default function Stories() {
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
    return (
        <div class="stories">
            {stories.map(story => (<Story image={story.image} username={story.username} />))}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}