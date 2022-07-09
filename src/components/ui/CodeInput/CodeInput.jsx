import React, { useState } from 'react';
import {
  CodeInputField,
  CodeInputIcon,
  CodeInputWrapper
} from './CodeInput.styles';
import { STATUS_ICONS } from './CodeInput.constants';

const CodeInput = ({ onChange, status }) => {
  // empty - ожидает ввода
  // pending - проверка
  // invalid - неверно
  // valid - верно
  const [value, setValue] = useState('');

  const _onChange = (event) => {
    const inputValue = event.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
    setValue(inputValue);
    onChange && onChange(inputValue)
  }

  return (
    <CodeInputWrapper>
      <CodeInputField
        value={ value }
        placeholder='укажите цифры'
        maxLength={ 6 }
        onChange={ _onChange }
      />
      <CodeInputIcon
        icon={ STATUS_ICONS[status]?.icon }
        color={ STATUS_ICONS[status]?.color }
      />
    </CodeInputWrapper>
  );
};

export default CodeInput;