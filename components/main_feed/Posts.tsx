import { collection, getDocs, QueryDocumentSnapshot, QuerySnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import Post from "./Post";

const Posts = () => {
    const [allPosts, setAllPosts] = useState<QuerySnapshot | null>(null);

    useEffect(() => {
        const getPosts = async () => {
            console.log("Getting Posts");
            const data = await getDocs(collection(db, "posts"));
            setAllPosts(data);
        }
        getPosts();
    }, []);

    return (
        <div>
            <div>
                {allPosts?.docs.map((post: QueryDocumentSnapshot) => (
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
