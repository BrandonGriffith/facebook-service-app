import {
    query, collection, orderBy, getDocs,
    QueryDocumentSnapshot, QuerySnapshot
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { updateProps } from "../Types";
import Post from "./Post";

const Posts = (props: updateProps) => {
    const [allPosts, setAllPosts] = useState<QuerySnapshot | null>(null);

    useEffect(() => {
        const getPosts = async () => {
            console.log("Getting Posts");
            const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
            const data = await getDocs(q);
            setAllPosts(data);
        }
        getPosts();
    }, [props.updatePosts]);

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
