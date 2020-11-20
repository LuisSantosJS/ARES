import React from 'react';
import './styles.css';
import DefaultHeader from '../../components/DefaultHeader';
import { useHistory } from 'react-router-dom'
import Banner from '../../components/Banner';
//@ts-ignore
import BannerLogo from '../../assets/banner1.png'
import Copyri from '../../components/copyri'
import { useWindowDimensions } from '../../hooks/useDimension'
const FirstPage: React.FC = () => {
    const { height } = useWindowDimensions();
    const SIZE: string = 'medium';
    const history = useHistory();

    const handleBack = () => {
        history.goBack();
    }

    const handleFormPage = () =>{
        history.push('form')
    }
    return (
        <>
            <DefaultHeader title='PRIMEIRA VISITA' />
            <Banner size={SIZE} source={BannerLogo} />
            <div style={{ height: SIZE === 'large' ? height - Number(height / 3.9) - 50 : height - Number(height / 4.5) - 50 }} className='divbodyfirst'>
                <div className='divcenterfirst'>
                    <h6 className='titlewell'>OLÁ! É SUA PRIMEIRA VISITA NO PLANTÃO?</h6>
                    <div className='botoessimnaodiv'>
                        <div style={{ background: '#1bac03' }} onClick={handleFormPage} className='botaosubmit' >SIM</div>
                        <div style={{ background: '#bb8000' }} onClick={handleBack} className='botaosubmit' >NÃO</div>
                    </div>
                </div>
                <Copyri />
            </div>
        </>
    )
}
export default FirstPage;