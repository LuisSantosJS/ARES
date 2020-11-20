import React, { useCallback, useEffect, useState } from 'react';
import './styles.css'
import DefaultHeader from '../../components/DefaultHeader';
import { useHistory } from 'react-router-dom'
import Banner from '../../components/Banner';
//@ts-ignore
import BannerLogo from '../../assets/banner3.png'
//@ts-ignore
import { mask } from 'remask'
import ReactLoading from 'react-loading';
import Copyri from '../../components/copyri'
import { useWindowDimensions } from '../../hooks/useDimension'
const FirstFormPageSATIS: React.FC = () => {
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
        history.push('corretorSATIS')
    }
    useEffect(() => {
        return () => {
            clearInterval()
        }
    }, [])

    return (
        <>
            <DefaultHeader title='PESQUISA DE SATISFAÇÃO' />
            <Banner size={SIZE} source={BannerLogo} />
            <div style={{ height: SIZE === 'large' ? height - Number(height / 3.9) - 50 : height - Number(height / 4.5) - 50 }} className='divbodyfirstssSATIS0'>
                <div className='divcenterfirstsssSATIS0'>
                    <div className='centerdivxxSATIS0'>
                        <h5 className='tituloforms'>INFORME SEU CPF</h5>
                        <input className='w3-input w3-border inputssSATIS0' onChange={(e) => onCPF(e.target.value)} value={cpf} placeholder={'999.999.999-99'} type="text" />
                        <div className={'rouinpiuttscheckkSATIS0'}>
                            <input type="checkbox" value={check} onChange={(e) => setCheck(e.target.value)} />
                            <div style={{ width: 10, height: 10 }} />
                            <span> não quero inserir meu CPF </span>
                        </div>
                        <input className='w3-input w3-border inputssSATIS0' onChange={(e) => setCorretor(e.target.value)} value={corretor} placeholder={'Nome do corretor'} type="text" />
                        <span onClick={onSubmit} className='submitSATIS0'>
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
export default FirstFormPageSATIS;