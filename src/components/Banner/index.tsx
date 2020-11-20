import React from 'react';
import './styles.css'
import { useWindowDimensions } from "../../hooks/useDimension";
interface Props {
    size: string;
    source: string;
}
const Banner: React.FC<Props> = (props) => {
    const { width, height } = useWindowDimensions()

    const selectDimension = () => {
        if (props.size === 'large') {
            return Number(height / 3.9)
        }
        if (props.size === 'medium') {
            return Number(height / 4.5)
        } else {
            return Number(height / 4.5)
        }
    }
    return (
        <>
            <img style={{ width: width, height: selectDimension(), }} src={props.source} alt='Banner ' />
        </>
    )
}

export default Banner;