import React, { useState } from 'react';
import './styles.css';
import DefaultHeader from '../../components/DefaultHeader';
import Banner from '../../components/Banner';
//@ts-ignore
import BannerLogo from '../../assets/banner3.png'
import Copyri from '../../components/copyri'
import { useWindowDimensions } from '../../hooks/useDimension'

const WindowCorretorSATIS: React.FC = () => {
    const { height } = useWindowDimensions();
    const [isFinishPage, setIsFinishPage] = useState<boolean>(false);
    const SIZE: string = 'medium';
    return (
        <>
            <DefaultHeader title='PESQUISA DE SATISFAÇÃO' />
            <Banner size={SIZE} source={BannerLogo} />
            <div style={{ height: SIZE === 'large' ? height - Number(height / 3.9) - 50 : height - Number(height / 4.5) - 50 }} className='divbodyfirstcSATIS'>
                {!isFinishPage ?
                    <div className='divcenterfirstcSATIS'>
                        <br />
                        <span className={'titlesra'}>Sra. Aline</span>
                        <span className='bobytextsraSATIS'>O que você achou do atendimento do nosso corretor?</span>
                        <br />
                        <div className='divCorretorcenterSATIS'>
                            <textarea name="" id="" cols={30} rows={5}></textarea>
                        </div>
                        <br />
                        <div style={{ flexDirection: 'column' }} className='rowyesnoSATIS'>
                            <span onClick={() => setIsFinishPage(true)} className='registraratenddsSATIS cursor'>PRÓXIMO</span>
                        </div>
                    </div>
                    :
                    <div className='divcenterfirstcSATIS'>
                        <br />
                        <span className={'titlesra'} style={{ color: '#fb5566' }}>Sra. Aline</span>
                        <br />
                        <br />
                        <span className='bobytextsraSATIS'>Nós agradecemos muito pela sua participação.</span>
                        <br />
                        <span className='bobytextsraSATIS'>Pedimos a gentileza de retirar o seu brinde com a nossa recepcionista</span>
                        <br />
                        <div style={{ flexDirection: 'column' }} className='rowyesnoSATIS'>
                            <span onClick={() => { }} style={{ background: '#fb5566', width: 200 }} className='registraratenddsSATIS cursor'>FINALIZAR PESQUISA</span>
                        </div>

                    </div>
                }
                <Copyri />
            </div>
        </>
    )
}
export default WindowCorretorSATIS;