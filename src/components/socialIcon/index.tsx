import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

type Props = {
    icon: IconDefinition,
    className?: string,
}

export default function SocialIcon(props: Props) {
    const [hover, setHover] = React.useState(false)

    function onHover() {
        setHover(true)
    }

    function onMouseLeave() {
        setHover(false)
    }

    return (
        <div onMouseOver={onHover} onMouseLeave={onMouseLeave} className={`w-[2.5rem] aspect-square rounded-full border border-[rgba(76,123,243,0.15)] grid place-items-center cursor-pointer ${hover ? 'bg-[#4C7BF3]' : 'bg-transparent'}`}>
            <FontAwesomeIcon className={`${hover ? 'text-white' : 'text-[#4C7BF3]'} w-full`} icon={props.icon} />
        </div>
    )
}