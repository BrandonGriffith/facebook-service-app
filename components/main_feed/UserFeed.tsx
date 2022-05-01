import { updateProps } from "../Types"
import InputBox from "./InputBox"
import Posts from "./Posts"
import UserStories from "./UserStories"

const UserFeed = (props: updateProps) => {
    return (
        <div className="flex-grow h-screen mr-5 xl:mr-40 overflow-y-auto scrollbar-hide">
            <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
                <UserStories />
                <InputBox guestLogin={props.guestLogin} updatePosts={props.updatePosts} setUpdatePosts={props.setUpdatePosts} />
                <Posts updatePosts={props.updatePosts} setUpdatePosts={props.setUpdatePosts} />
            </div>
        </div>
    )
}
export default UserFeed
