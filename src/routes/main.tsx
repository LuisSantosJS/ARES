import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import FirstFormPage from '../pages/FirstFormPage'
import Home from '../pages/Home'
import FirstPage from '../pages/FirstPage'
import SecondFormPage from '../pages/SecondFormPage';
import WindowCorretor from '../pages/WindowCorretor';

import FirstFormPageIND from '../pages/FirstFormPageIND'
import WindowCorretorIND from '../pages/WindowCorretorIND';

import FirstFormPageSATIS from '../pages/FirstFormPageSATIS'
import WindowCorretorSATIS from '../pages/WindowCorretorSATIS';
const RouterMain: React.FC = () => {
    return (
        <BrowserRouter>
            <Route path='/' exact component={Home} />
            <Route path='/wellcome' exact component={FirstPage} />
            <Route path='/form' exact component={FirstFormPage} />
            <Route path='/form2' exact component={SecondFormPage} />
            <Route path='/corretor' exact component={WindowCorretor} />

            <Route path='/formIND' exact component={FirstFormPageIND} />
            <Route path='/corretorIND' exact component={WindowCorretorIND} />

            <Route path='/formSATIS' exact component={FirstFormPageSATIS} />
            <Route path='/corretorSATIS' exact component={WindowCorretorSATIS} />
        </BrowserRouter>
    );
}

export default RouterMain;