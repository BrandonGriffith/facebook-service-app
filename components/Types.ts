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
