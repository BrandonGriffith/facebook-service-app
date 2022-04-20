import { HeaderIconProps } from "./Types"

const HeaderIcon = ({ Icon, active }: HeaderIconProps) => {
    return (
        <div className='flex items-center cursor-pointer lg:px-10 md:px-8 sm:px-4 sm:h-14
        md:hover:bg-gray-300 rounded-full active:border-b-4 group border-white'>
            <Icon className={`h-8 group-hover:text-blue-400 text-center mx-auto
            text-gray-500 ${active && "text-blue-500"}`} />
        </div>
    )
}
export default HeaderIcon
