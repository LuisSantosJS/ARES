import React, { useState } from 'react';
import './styles.css';
import DefaultHeader from '../../components/DefaultHeader';
import { useLocation, useHistory } from 'react-router-dom'
import Banner from '../../components/Banner';
//@ts-ignore
import BannerLogo from '../../assets/banner1.png'
import Copyri from '../../components/copyri'
import { useWindowDimensions } from '../../hooks/useDimension'
const SecondFormPage: React.FC = () => {
    const { height } = useWindowDimensions();
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [celular, setCelular] = useState<string>('')
    const location: { state: { cpf: string } } = useLocation();
    const cpf = `${location.state.cpf}`
    const SIZE: string = 'medium';
    const history = useHistory();
    const handleNextPage = () => {
        history.push('corretor')
    }

    return (
        <>
            <DefaultHeader title='PRIMEIRA VISITA' />
            <Banner size={SIZE} source={BannerLogo} />
            <div style={{ height: SIZE === 'large' ? height - Number(height / 3.9) - 50 : height - Number(height / 4.5) - 50 }} className='divbodyfirstp'>
                <div className='divcenterfirstp'>
                    <br />
                    <input value={name} onChange={(e) => setName(e.target.value)} placeholder={'Nome*'} className='w3-input inputssp' />

                    <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder={'E-mail'} className='w3-input inputssp' />

                    <input value={celular} onChange={(e) => setCelular(e.target.value)} placeholder={'Celular*'} className='w3-input inputssp' />

                    <input value={cpf} disabled className='w3-input inputssp' />
                    <br />
                    <span onClick={handleNextPage} style={{ color: 'white' }} className='submitrs'>
                        PRÓXIMO
                    </span>

                </div>
                <Copyri />
            </div>
        </>
    )
}

export default SecondFormPage;