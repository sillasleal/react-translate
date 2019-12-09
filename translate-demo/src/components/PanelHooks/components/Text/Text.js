/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React, {useState} from 'react';
import {translate} from 'translate/getContext';

export default () => {
  const [qt, setQt] = useState(1);
  /**/
  return <div className="Text">
    <h2>{translate('Text')}</h2>
    <p>{translate('EXEMPLE_TEXT_1')}</p>
    <p><strong>{translate('EXEMPLE_TEXT_2')}</strong></p>
    <p>
      {qt} {translate(['EXEMPLE_TEXT_3', 'EXEMPLE_TEXT_4', 'qt'], { qt })}
      <button onClick={() => setQt(qt + 1)}>+</button>
      <button onClick={() => setQt(qt - 1)}>-</button>
    </p>
  </div>;
};
