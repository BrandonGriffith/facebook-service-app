type HeroIcon = (props: React.ComponentProps<'svg'>) => JSX.Element;
export interface IconProps {
    Icon: HeroIcon,
    active?: boolean,
    title?: String
}
export interface Props {
    session?: any
}
