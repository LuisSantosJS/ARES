import React, { useState } from 'react';
import './styles.css';
import DefaultHeader from '../../components/DefaultHeader';
import Banner from '../../components/Banner';
//@ts-ignore
import BannerLogo from '../../assets/banner1.png'
import Copyri from '../../components/copyri'
import { useWindowDimensions } from '../../hooks/useDimension'

const WindowCorretor: React.FC = () => {
    const { height } = useWindowDimensions();
    const [confirm, setConfirm] = useState<boolean>(false);
    const SIZE: string = 'medium';
    return (
        <>
            <DefaultHeader title='PRIMEIRA VISITA' />
            <Banner size={SIZE} source={BannerLogo} />
            <div style={{ height: SIZE === 'large' ? height - Number(height / 3.9) - 50 : height - Number(height / 4.5) - 50 }} className='divbodyfirstc'>
                <div className='divcenterfirstc'>
                    <br />
                    <span className={'titlesra'}>Sra. Aline</span>
                    <span className='bobytextsra'>Seu atendimento será realizado pelo corretor</span>
                    <br />
                    <div className='divCorretorcenter'>
                        <div className='profilecorretor' />
                        <span>HARVEY SPECTER</span>
                        <span>#6346236</span>
                    </div>
                    <br />
                    {!confirm ?
                        <>
                            <span>Deseja confirmar?</span>
                            <div className='rowyesno'>
                                <span style={{ background: '#1bac03' }} onClick={() => setConfirm(true)} className='botaoyesno cursor'>SIM</span>
                                <span style={{ background: '#bb8000' }} className='botaoyesno cursor'>NÃO</span>
                            </div></> :
                        <>
                            <span>Por favor aguarde</span>
                            <div style={{ flexDirection: 'column' }} className='rowyesno'>
                                <span className='registraratend cursor'>REGISTRAR ATENDIMENTO</span>
                            </div>
                        </>}
                </div>
                <Copyri />
            </div>
        </>
    )
}
export default WindowCorretor;