import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import Post from "./Post";

const Posts = () => {
    const [allPosts, setAllPosts] = useState<any>(null);

    const getPosts = async () => {
        const qurrySnap = await getDocs(collection(db, "posts"));
        return qurrySnap;
    }

    useEffect(() => {
        const addPosts = async () => {
            const data = await getPosts();
            setAllPosts(data);
        }
        addPosts();
    }, [])

    return (
        <div>
            <div>
                {allPosts?.docs.map((post: any) => (
                    <Post key={post.id}
                        name={post.data().name}
                        message={post.data().message}
                        email={post.data().email}
                        image={post.data().image}
                        postImage={post.data().postImage}
                        createdAt={post.data().createdAt}
                    />
                ))}
            </div>
        </div>
    )
}
export default Posts
