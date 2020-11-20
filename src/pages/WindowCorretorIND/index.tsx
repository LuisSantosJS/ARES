import React, { useState } from 'react';
import './styles.css';
import DefaultHeader from '../../components/DefaultHeader';
import Banner from '../../components/Banner';
//@ts-ignore
import BannerLogo from '../../assets/banner2.png'
import Copyri from '../../components/copyri'
import { useWindowDimensions } from '../../hooks/useDimension'

const WindowCorretorIND: React.FC = () => {
    const { height } = useWindowDimensions();
    const [confirm, setConfirm] = useState<boolean>(false);
    const SIZE: string = 'medium';
    return (
        <>
            <DefaultHeader title='INDICAÇÃO' />
            <Banner size={SIZE} source={BannerLogo} />
            <div style={{ height: SIZE === 'large' ? height - Number(height / 3.9) - 50 : height - Number(height / 4.5) - 50 }} className='divbodyfirstcIND'>
                <div className='divcenterfirstcIND'>
                    <br />
                    <span className={'titlesraIND'}>Sra. Aline</span>
                    <span className='bobytextsraIND'>Seu atendimento será realizado pelo corretor</span>
                    <br />
                    <div className='divCorretorcenterIND'>
                        <div className='profilecorretorIND' />
                        <span>HARVEY SPECTER</span>
                        <span>#6346236</span>
                    </div>
                    <br />
                    {!confirm ?
                        <>
                            <span>Deseja confirmar?</span>
                            <div className='rowyesnoIND'>
                                <span style={{ background: '#1bac03' }} onClick={() => setConfirm(true)} className='botaoyesnoIND cursor'>SIM</span>
                                <span style={{ background: '#bb8000' }} className='botaoyesnoIND cursor'>NÃO</span>
                            </div></> :
                        <>
                            <span>Por favor aguarde</span>
                            <div style={{ flexDirection: 'column' }} className='rowyesno'>
                                <span className='registraratendIND cursor'>REGISTRAR ATENDIMENTO</span>
                            </div>
                        </>}
                </div>
                <Copyri />
            </div>
        </>
    )
}
export default WindowCorretorIND;