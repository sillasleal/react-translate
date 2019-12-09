/*
 * The MIT License
 *
 * Copyright 2019 Sillas S. Leal<sillas.s.leal@gmail.com>.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

import {useContext} from 'react';
/**/
import {TranslateContext} from './TranslateContext';

const TranslateContexts = () => useContext(TranslateContext);
const SetLang = (a) => useContext(TranslateContext).setLang(a);
const Translate = (a, b, c, d) => useContext(TranslateContext).translate(a, b, c, d);
const AppendDictionary = (a) => useContext(TranslateContext).appendDictionary(a);
const Dictionary = () => useContext(TranslateContext).dictionary;
const Language = () => useContext(TranslateContext).language;
const Languages = (a) => useContext(TranslateContext).languages(a);

export {
  TranslateContexts as default,
  SetLang as setLang,
  Translate as translate,
  AppendDictionary as appendDictionary,
  Dictionary as dictionary,
  Language as language,
  Languages as languages,
};
