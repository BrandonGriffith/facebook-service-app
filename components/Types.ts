type HeroIcon = (props: React.ComponentProps<'svg'>) => JSX.Element;
export interface HeaderIconProps {
    Icon: HeroIcon,
    active?: boolean
}
export interface Props {
    session?: any
}
