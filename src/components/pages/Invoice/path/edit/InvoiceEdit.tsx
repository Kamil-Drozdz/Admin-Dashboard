import NavigationCard from '../../NavigationCard';
import PageContainer from '@/common/PageContainer';
import { Button } from '@/UI/Button';
import { Link } from 'react-router-dom';
import { BasicRoutes, SubRoutes } from '@/lib/enums/routes';
import InvoiceTemplate from '../../InvoiceTemplate';
import { toast } from 'react-toastify';

const InvoiceEdit = ({ invoice, setInvoice, setItem, handleSendInvoice ,isSavedInvoice}) => {
  const handleSave = () => {
    try {
      toast.success("You're Invoice has been saved!");
      setItem(invoice);
    } catch {
      toast.error('Sorry we have problem with save Invoice please try again');
    }
  };
  return (
    <PageContainer>
      <div className='flex space-x-6'>
        <InvoiceTemplate isSavedInvoice={isSavedInvoice} isEditable={true} invoice={invoice} setInvoice={setInvoice} />
        <NavigationCard handleSendInvoice={handleSendInvoice}>
          <Link className='w-full' to={`${BasicRoutes.INVOICE}${SubRoutes.PREVIEW}`}>
            <Button variant='ghost' className='w-full border'>
              Preview
            </Button>
          </Link>
          <Button variant='ghost' onClick={handleSave} className='w-full border'>
            Save
          </Button>
        </NavigationCard>
      </div>
    </PageContainer>
  );
};

export default InvoiceEdit;
