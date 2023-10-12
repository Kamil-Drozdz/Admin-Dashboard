import clsx from '@/lib/clsx';
import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';

const buttonVariants = cva('inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50', {
	variants: {
		variant: {
			default: 'dark:bg-primary dark:text-primary-foreground hover:dark:bg-primary/90',
			destructive: 'dark:bg-destructive dark:text-destructive-foreground hover:dark:bg-destructive/90',
			outline: 'border border-input dark:bg-background hover:dark:bg-accent hover:dark:text-accent-foreground',
			secondary: 'dark:bg-secondary dark:text-secondary-foreground hover:dark:bg-secondary/80',
			ghost: 'hover:dark:bg-accent hover:dark:text-accent-foreground',
			link: 'dark:text-primary underline-offset-4 hover:underline',
			empty: '',
		},
		size: {
			default: 'h-10 px-4 py-2',
			sm: 'h-9 rounded-md px-3',
			lg: 'h-11 rounded-md px-8',
			icon: 'h-10 w-10',
		},
	},
	defaultVariants: {
		variant: 'default',
		size: 'default',
	},
});

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild = false, ...props }, ref) => {
	const Comp = asChild ? Slot : 'button';
	return <Comp className={clsx(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
});
Button.displayName = 'Button';

export { Button, buttonVariants };
