type HeroIcon = (props: React.ComponentProps<'svg'>) => JSX.Element;
type Nullable<T> = T | null;
export interface IconProps {
    Icon: HeroIcon,
    active?: boolean,
    title?: string,
    src?: string
}
export interface Props {
    session?: any
}
export interface StoryProps {
    name: string,
    src: string,
    profile: string
}
export interface Session {
    user: {
        name: string,
        email: string,
        image: string
    },
    expires: string
}
export interface UserSession {
    data: Nullable<Session> | any,
    status: string
}
export interface postProps {
    name: string,
    message: string,
    email: string,
    image: string,
    postImage: string,
    createdAt: any
}
export interface updateProps {
    updatePosts: boolean,
    setUpdatePosts: Function,
    guestLogin?: boolean
}