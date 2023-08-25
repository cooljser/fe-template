import {useTranslation} from 'react-i18next';

const useI18n = (keyPrefix?: string) => {
  const {t} = useTranslation('translation', {keyPrefix});
  return t;
}

export default useI18n;
