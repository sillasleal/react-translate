/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React from 'react';
import {languages, translate} from 'translate/getContext';
import Lang from './components/Lang/Lang';

export default () => <div className="SelectLang">
    <h1>{translate('SelectLang')}</h1>
    <ul>
        {languages().map((i, k) => <Lang key={k} lang={i} />)}
    </ul>
</div>;
