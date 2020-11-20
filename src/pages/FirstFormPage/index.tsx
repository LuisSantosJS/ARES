import React, { useCallback, useEffect, useState } from 'react';
import './styles.css'
import DefaultHeader from '../../components/DefaultHeader';
import { useHistory } from 'react-router-dom'
import Banner from '../../components/Banner';
//@ts-ignore
import BannerLogo from '../../assets/banner1.png'
//@ts-ignore
import { mask } from 'remask'
import ReactLoading from 'react-loading';
import Copyri from '../../components/copyri'
import { useWindowDimensions } from '../../hooks/useDimension'
const FirstFormPage: React.FC = () => {
    const SIZE: string = 'medium';
    const { height } = useWindowDimensions();
    const history = useHistory();
    const [corretor, setCorretor] = useState<string>('')
    const [check, setCheck] = useState<string>('')
    const [cpf, setCpf] = useState<string>('')
    const [loading, setLoading] = useState(false)

    const onCPF = useCallback((e: string) => {
        const valueMasked = mask(e, ['999.999.999-99']);
        setCpf(valueMasked);
    }, [])

    const onSubmit = () => {
        if (loading) {
            return;
        }
        setLoading(true);
        onNextPage()
    }
    const onNextPage = () => {
        setLoading(false)
        history.push('form2', { cpf } as { cpf: string })
    }
    useEffect(() => {
        return () => {
            clearInterval()
        }
    }, [])

    return (
        <>
            <DefaultHeader title='PRIMEIRA VISITA' />
            <Banner size={SIZE} source={BannerLogo} />
            <div style={{ height: SIZE === 'large' ? height - Number(height / 3.9) - 50 : height - Number(height / 4.5) - 50 }} className='divbodyfirstss'>
                <div className='divcenterfirstsss'>
                    <div className='centerdivxx'>
                        <h5 className='tituloforms'>INFORME SEU CPF</h5>
                        <input className='w3-input w3-border inputss' onChange={(e) => onCPF(e.target.value)} value={cpf} placeholder={'999.999.999-99'} type="text" />
                        <div className={'rouinpiuttscheckk'}>
                            <input type="checkbox" value={check} onChange={(e) => setCheck(e.target.value)} />
                            <div style={{ width: 10, height: 10 }} />
                            <span> não quero inserir meu CPF </span>
                        </div>
                        <input className='w3-input w3-border inputss' onChange={(e) => setCorretor(e.target.value)} value={corretor} placeholder={'Nome do corretor'} type="text" />
                        <span onClick={onSubmit} className='submit'>
                            {!loading ? <span style={{ color: 'white' }}>Enviar</span> :
                                <ReactLoading color='white' type='spin' height={20} width={20} />}
                        </span>
                    </div>
                </div>
                <Copyri />
            </div>
        </>
    )
}
export default FirstFormPage;