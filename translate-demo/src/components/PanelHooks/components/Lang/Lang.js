/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React from 'react';
import {language, translate} from 'translate/getContext';

export default () => <div className="Lang">
    <h1>{translate('Lang')}</h1>
    <div>
        <label>{language()}</label>{' = '}
        <label>{translate(language())}</label>
    </div>
</div>;
