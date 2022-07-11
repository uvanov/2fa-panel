import React, { useState, useContext } from 'react';

import { StepContext } from '../../TwoFactor/TwoFactor';

import Methods from '../../../ui/Methods/Methods';

const Enabled = () => {

  const [selectedMethod, setSelectedMethod] = useState('application'); // application, telegram
  const { setStep } = useContext(StepContext);

  return (
    <div>
      <Methods>
        <Methods.Method
          icon=''
          iconColor='#BC57EB'
          title='Приложение для создания 2FA-кодов'
          selected={ selectedMethod === 'application' }
          onSelect={ () => setSelectedMethod('application') }
        >
          <a
            href='#reserve'
            onClick={ () => setStep('reserve') }
          >
            резервные коды доступа
          </a>
        </Methods.Method>
        <Methods.Method
          icon=''
          iconColor='#2D9CDB'
          title='Коды от Телеграм-бота @omnidesk_2fa_bot'
          description='Вы привязали Телеграм-аккаунт @serj_preobraj, привязать другой аккаунт'
          selected={ selectedMethod === 'telegram' }
          onSelect={ () => setSelectedMethod('telegram') }
        >
          Вы привязали Телеграм-аккаунт @serj_preobraj,
          <a
            href='#connect'
            onClick={ () => setStep('additional') }
          >
             привязать другой аккаунт
          </a>
        </Methods.Method>
      </Methods>
    </div>
  );
};

export default Enabled;