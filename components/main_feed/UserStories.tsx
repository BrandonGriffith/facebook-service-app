import StoryCard from "./StoryCard"

const stories = [
    {
        name: "bob ross",
        src: "https://images.freeimages.com/images/small-previews/76e/abstract-1-1174741.jpg",
        profile: "https://images.freeimages.com/images/small-previews/648/bs-04-1255720.jpg"
    },
    {
        name: "tem ross",
        src: "https://images.freeimages.com/images/small-previews/a31/colorful-umbrella-1176220.jpg",
        profile: "https://images.freeimages.com/images/small-previews/4d6/chugh-1171409.jpg"
    },
    {
        name: "billy ross",
        src: "https://images.freeimages.com/images/small-previews/25c/abstract-flowers-2-1199959.jpg",
        profile: "https://images.freeimages.com/images/small-previews/03b/abstract-series-13-1529920.jpg"
    },
    {
        name: "jemmy ross",
        src: "https://images.freeimages.com/images/small-previews/1d2/music-nightclub-1420666.jpg",
        profile: "https://images.freeimages.com/images/small-previews/e33/tate-weather-project-8-1473995.jpg"
    },
    {
        name: "ted ross",
        src: "https://images.freeimages.com/images/small-previews/5f1/beach-resort-1395730.jpg",
        profile: "https://images.freeimages.com/images/small-previews/d9c/parrot-attack-1410608.jpg"
    }
]


const UserStories = () => {
    return (
        <div className='flex justify-center mx-auto space-x-2 p-1'>
            {
                stories.map(story => (
                    <StoryCard key={story.src} name={story.name} src={story.src} profile={story.profile} />
                ))
            }
        </div>
    )
}
export default UserStories
