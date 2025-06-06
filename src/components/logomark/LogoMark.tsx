import React from "react";
import LogoImg from "../../assets/myDNAge logo.svg"

type LogoMarkProps = React.ComponentPropsWithoutRef<'img'>;

export default function LogoMark({ className = '', ...rest }: LogoMarkProps) {
    return (
        <img
            src={LogoImg}
            alt="myDNAge by Liv"
            className={`
                w-[17.875rem] h-[6.8125rem] aspect-[286/109]
                select-none pointer-events-none
                ${className}
          `}
            draggable={false}
            {...rest}
        >
        </img>
    )
}