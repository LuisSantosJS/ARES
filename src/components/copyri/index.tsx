import React from 'react'
import './styles.css';
import { useWindowDimensions } from '../../hooks/useDimension';
const Copyri: React.FC = () => {
    const { width } = useWindowDimensions();
    return (
        <>
            <div style={{ width: width, height: 40 }} className='endView'>
                <span className='textEndView'>AGÊNCIA ARES @TODOS OS DIREITOS RESERVADOS</span>
                <span className='textEndView'>SUPORTE@AGENCIAARES.COM.BR</span>
            </div>
        </>
    )

}
export default Copyri;