import React from 'react';
import './styles.css'
import Info from '../../assets/info.png'
interface Props {
    title: string;
}
const DefaultHeader: React.FC<Props> = (props) => {
    return (
        <>
            <div className='header'>
                <span className='textTitle'>{props.title}</span>
                <img src={Info} className='infoss cursor' alt='info icon' />
            </div>
        </>
    )
}

export default DefaultHeader;