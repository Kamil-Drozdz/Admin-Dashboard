import { Button } from '@/UI/Button';
import { Separator } from '@/UI/Separator';
import { useStarRating } from '@/hooks/useStarRating';
import { IconSize } from '@/lib/entities/iconSize';
import useProductsStore from '@/store/useProductsStore';
import { AiFillHeart, AiOutlineClose } from 'react-icons/ai';
import { BiHeart } from 'react-icons/bi';

const CheckoutStepperItem = ({ product }) => {
	const { cart, wishlist, addToWishlist, removeFromWishlist, removeFromCart } = useProductsStore();
	const stars = useStarRating(product.rating.rate);
	const isProductInWishlist = wishlist.some(item => item.id === product.id);
	const isProductInCart = cart.some(item => item.id === product.id);

	return (
		<div key={product.id}>
			<div className='relative dark:bg-mediumBlue bg-white p-4 rounded-t-lg space-y-3 grid grid-cols-auto-fit-100  items-center justify-center'>
				<div className=' max-w-[90%] p-2 bg-white rounded-lg'>
					<img className='object-contain aspect-video' src={product?.image} alt={product?.title} />
				</div>
				<div className=' col-span-2 h-full space-y-2'>
					<p className='w-full text-left font-semibold hover:text-violet-500 '>{product?.title}</p>
					<div className='flex text-amber-500'>{stars}</div>
					<div className='flex space-x-2'>
						<p>Available -</p>
						<span className='text-green-500 font-semibold'>{product?.rating?.count}</span>
					</div>
					<p className='truncate w-full break-all'>{product?.description}</p>
					<p className='text-sm text-gray-500'>Delivery by, Wed Apr 25</p>
					<p className='text-sm text-green-500'>17% off 4 offers Available</p>
				</div>
				<Separator orientation='vertical' />
				<div className='flex flex-col space-y-2 text-center'>
					<p className=' font-semibold text-violet-500'>${product?.price}</p>
					<div className='w-full'>
						<p className='text-green-600 px-2 bg-green-600 bg-opacity-30 w-fit text-center rounded-lg'>Free Shipping</p>
					</div>
					<Button
						onClick={() => {
							if (isProductInWishlist) {
								removeFromWishlist(product.id);
							} else {
								addToWishlist(product);
							}
						}}
						className='!bg-violet-500 hover:!bg-violet-400 !text-white space-x-2'>
						{isProductInWishlist ? <AiFillHeart size={IconSize.basic} className='text-red-500' /> : <BiHeart size={IconSize.basic} />}
						<p> Add to Wishlist</p>
					</Button>
					<Button
						variant='ghost'
						className='space-x-2'
						onClick={() => {
							if (isProductInCart) {
								removeFromCart(product.id);
							}
						}}>
						<AiOutlineClose size={IconSize.basic} />
						<p> Remove from Cart </p>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default CheckoutStepperItem;
