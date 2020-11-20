import React from 'react';
import './styles.css'
//@ts-ignore
import Logo from '../../assets/logo.png';
//@ts-ignore
import Info from '../../assets/info.png';
import { useWindowDimensions } from '../../hooks/useDimension'
import { useHistory } from 'react-router-dom'
import Copyri from '../../components/copyri'
const Home: React.FC = () => {
    const { height, width } = useWindowDimensions();
    const history = useHistory();
    const handleFirstPage = () => {
        history.push('wellcome')
    }

    const handleINDPage = () => {
        history.push('formIND')
    }
    const handleSATISPage = () => {
        history.push('formSATIS')
    }
    return (
        <>
            <div className='bg_image'>
                <div className='metadeHeader' style={{ width: width, height: height / 2 }}>
                    <img width='80' src={Logo} alt=" " />
                </div>
                <div className='metadeBody' style={{ width: width, height: (height / 2) - 40 }}>
                    <div className='divrowcontainerline'>
                        <div className='pointButtonRetangule' />
                        <div className='divider' />
                        <h3 style={height > width ? {} : { color: '#141414' }} onClick={handleFirstPage} className='menuH3 cursor'>PRIMEIRA VISITA   </h3>
                    </div>
                    <div className='divrowcontainerline'>
                        <div className='pointButtonRetangule' />
                        <div className='divider' />
                        <h3 style={height > width ? {} : { color: '#141414' }} onClick={handleINDPage} className='menuH3 cursor'>INDICAÇÃO   </h3>
                    </div>
                    <div className='divrowcontainerline'>
                        <div className='pointButtonRetangule' />
                        <div className='divider' />
                        <h3 style={height > width ? {} : { color: '#141414' }} onClick={handleSATISPage} className='menuH3 cursor'>PESQUISA DE SATISFAÇÃO  </h3>
                    </div>
                    <div className='divrowcontainerline'>
                        <div className='pointButtonRetangule' />
                        <div className='divider' />
                        <h3 style={height > width ? {} : { color: '#141414' }} className='menuH3 cursor'>RETORNO   </h3>
                    </div>

                </div>
                <Copyri />
            </div>
            <img src={Info} className='infoIcon cursor' style={{ top: 20, left: width - 40 }} alt='info icon' />
        </>
    )
}
export default Home;