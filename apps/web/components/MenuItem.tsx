import * as React from 'react';


function MenuItem(props: { link: string; menuName: string; }) {
    return <p className='shrink-0 grow-[3] text-md'>
        <a href={props.link}>
            {props.menuName}
        </a>
    </p>
}
export default MenuItem;
