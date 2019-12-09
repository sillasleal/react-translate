import React from 'react';
import {translate} from 'translate/getContext';
/**/
import Lang from './components/Lang/Lang';
import SelectLang from './components/SelectLang/SelectLang';
import AppendDictionary from './components/AppendDictionary/AppendDictionary';
import Text from './components/Text/Text';

export default () => <div className="PanelHooks">
    <h1>{translate('PanelHooks')}</h1>
    <Lang></Lang>
    <SelectLang></SelectLang>
    <AppendDictionary></AppendDictionary>
    <Text></Text>
</div>;
