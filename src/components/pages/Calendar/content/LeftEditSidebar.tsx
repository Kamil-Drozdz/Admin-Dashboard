import { FormDataProps } from '../CalendarContent';
import { Button } from '@/UI/Button';
import { Calendar } from '@/UI/Calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/UI/Popover';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/UI/Select';
import InputWithLabel from '@/common/InputWithLabel';
import { labels } from '@/data/pages/calendar/calendarData';
import clsx from '@/lib/clsx';
import { format } from 'date-fns';
import { BiCalendar } from 'react-icons/bi';
import { GoDotFill } from 'react-icons/go';

interface LeftEditSidebarProps {
  isOpen: boolean;
  formData: FormDataProps;
  handleAddEvent: () => void;
  setFormData: (formData: FormDataProps) => void;
  setIsOpen: (isOpen: boolean) => void;
}

const LeftEditSidebar = ({ isOpen, setIsOpen, setFormData, formData, handleAddEvent }: LeftEditSidebarProps) => {
  return (
    <>
      <div
        className={`fixed z-[51] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } text-gray-900transition-transform right-0 h-full w-3/4 max-w-[24rem] space-y-4 bg-white p-6 duration-300 ease-in-out dark:bg-mediumBlue dark:text-white`}
      >
        Add Event
        <InputWithLabel
          label='Title'
          type='text'
          id='title'
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <Select value={formData.label} onValueChange={(e) => setFormData({ ...formData, label: e as string })}>
          <SelectTrigger className='w-full whitespace-nowrap !border-gray-300 !border-opacity-25'>
            <SelectValue placeholder='choose Label' />
          </SelectTrigger>
          <SelectContent className='z-[52] border-gray-300'>
            <SelectGroup className='bg-lightWhite dark:bg-mediumBlue dark:text-gray-200'>
              {labels.slice(1).map((item, index) => (
                <SelectItem value={item.name} key={index}>
                  <div className='flex items-center space-x-2'>
                    <GoDotFill size={8} className={clsx('rounded-full', item.color)} />
                    <div> {item.name}</div>
                  </div>
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Popover>
          <PopoverTrigger asChild>
            <div>
              <p>Start Date</p>
              <Button
                variant={'outline'}
                className={clsx(
                  'w-full !border-gray-300 !border-opacity-25 !bg-transparent pl-3 text-left font-normal',
                  !formData.start && 'text-muted-foreground'
                )}
              >
                {formData.start ? format(formData.start, 'PPP') : <span>Pick a date</span>}{' '}
                <BiCalendar className='ml-auto h-4 w-4 opacity-50' />
              </Button>
            </div>
          </PopoverTrigger>
          <PopoverContent className='z-[52] w-auto p-0' align='start'>
            <Calendar
              mode='single'
              initialFocus
              selected={formData.start}
              onSelect={(date) => setFormData({ ...formData, start: date })}
              className='rounded-md border bg-white dark:bg-mediumBlue'
            />
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger asChild>
            <div>
              <p>End Date</p>
              <Button
                variant={'outline'}
                className={clsx(
                  'w-full !border-gray-300 !border-opacity-25 !bg-transparent pl-3 text-left font-normal',
                  !formData.end && 'text-muted-foreground'
                )}
              >
                {formData.end ? format(formData.end, 'PPP') : <span>Pick a date</span>}{' '}
                <BiCalendar className='ml-auto h-4 w-4 opacity-50' />
              </Button>
            </div>
          </PopoverTrigger>
          <PopoverContent className='z-[52] w-auto p-0' align='start'>
            <Calendar
              mode='single'
              initialFocus
              selected={formData.end}
              onSelect={(date) => setFormData({ ...formData, end: date })}
              className='rounded-md border bg-white dark:bg-mediumBlue'
            />
          </PopoverContent>
        </Popover>
        <InputWithLabel
          label='Event URL'
          type='text'
          id='event'
          value={formData.eventUrl}
          onChange={(e) => setFormData({ ...formData, eventUrl: e.target.value })}
        />
        <InputWithLabel
          label='Location'
          type='text'
          id='location'
          value={formData.location}
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
        />
        <label htmlFor='message' className='mb-2 block text-sm font-medium '>
          Your message
        </label>
        <textarea
          id='message'
          rows={4}
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className='block w-full rounded-lg border border-gray-300 bg-transparent p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
          placeholder='Write your thoughts here...'
        ></textarea>
        <div className='flex space-x-4'>
          <Button onClick={handleAddEvent} className='mb-4 !bg-violet-500 !text-white hover:bg-violet-400'>
            Add
          </Button>
          <Button variant='destructive'>Cancel</Button>
        </div>
      </div>
      {isOpen && <div className='fixed inset-0 z-50 bg-black opacity-50' onClick={() => setIsOpen(false)}></div>}
    </>
  );
};

export default LeftEditSidebar;
