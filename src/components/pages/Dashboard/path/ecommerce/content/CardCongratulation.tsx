import { Button } from '@/UI/Button';
import Badge from '@/assets/badge.svg';
import CardContainer from '@/common/CardContainer';
import useCurrentUser from '@/store/CurrentUser';
import { useTranslation } from 'react-i18next';

const CardCongratulation = () => {
  const { currentUser } = useCurrentUser();
  const { t } = useTranslation();

  return (
    <CardContainer className='md:basis-1/3 '>
      <h5 className='w-full dark:text-white md:w-2/3'>
        {t('Congratulations')} 🎉 {currentUser?.displayName || 'User'}!
      </h5>
      <p className='text-xs text-gray-400 dark:text-lightGray'>{t('you have won gold medal!')}</p>
      <h3 className=' text-violet-500'>48.9k</h3>
      <Button className='!bg-violet-500 !text-white hover:!bg-violet-400'>{t('View Sales')}</Button>
      <img className='absolute top-0 right-8 !mt-0' src={Badge} alt='Badge' />
    </CardContainer>
  );
};

export default CardCongratulation;
