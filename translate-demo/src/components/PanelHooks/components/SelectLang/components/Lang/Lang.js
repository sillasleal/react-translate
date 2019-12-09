/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React from 'react';
import getContext from 'translate/getContext';

export default ({ lang }) => {
  const { setLang, translate } = getContext();
  /**/
  return <li>
      <button style={{ cursor: 'pointer' }} onClick={() => setLang(lang)}>
        {lang}{' -> '}{translate(lang)}
      </button>
  </li>
};
