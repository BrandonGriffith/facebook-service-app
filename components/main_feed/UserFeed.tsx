import InputBox from "./InputBox"
import UserStories from "./UserStories"

const UserFeed = () => {
    return (
        <div className="flex-grow h-screen mr-5 xl:mr-40 overflow-y-auto">
            <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
                <UserStories />
                <InputBox />
            </div>
        </div>
    )
}
export default UserFeed
