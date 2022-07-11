import { useCallback, useState } from 'react';

export const useCode = (validCode) => {
  const [status, setStatus] = useState('');

  const onCodeChange = useCallback((value) => {
    if (value.length === 0) return setStatus('');
    if (value.length < 6) return setStatus('pending');
    if (value.length === 6 && value !== validCode) return setStatus('invalid');
    if (value.length === 6 && value === validCode) return setStatus('valid');
  }, [validCode]);

  return [status, onCodeChange];
};