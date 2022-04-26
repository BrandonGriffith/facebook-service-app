type HeroIcon = (props: React.ComponentProps<'svg'>) => JSX.Element;
export interface IconProps {
    Icon?: HeroIcon,
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
    }
}
