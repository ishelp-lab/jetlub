import type { VariantProps } from 'tailwind-variants';
import { tv } from 'tailwind-variants';

const buttonVariants = tv({
  slots: {
    base: 'group relative inline-flex w-full items-center justify-center gap-x-2 break-words rounded-lg px-3.5 py-2.5 text-sm leading-5 lg:text-base lg:font-medium lg:leading-6',
    icon: 'h-5 w-5',
  },
  variants: {
    color: {
      primary: {
        base: 'bg-primary text-white hover:bg-primary-hover active:bg-primary-hover',
      },
      secondary: {
        base: 'border border-primary bg-white text-primary hover:border-primary-hover hover:text-primary-hover',
      },
      link: {
        base: 'border-0 text-primary underline underline-offset-2 hover:text-primary-hover',
      },
    },
    disabled: {
      true: {
        base: 'pointer-events-none',
      },
    },
    size: {
      xs: {
        base: 'px-2.5 py-1.5 text-xs',
        icon: 'h-3.5 w-3.5',
      },
      sm: {
        base: 'px-3 py-2 text-sm',
        icon: 'h-4 w-4',
      },
      md: {
        base: 'px-3.5 py-2.5 text-base',
        icon: 'h-5 w-5',
      },
      lg: {
        base: 'px-4 py-3 text-lg',
        icon: 'h-6 w-6',
      },
    },
  },
  compoundVariants: [
    {
      color: 'primary',
      disabled: true,
      className: 'bg-linkaGray-200',
    },
    {
      color: 'secondary',
      disabled: true,
      className: 'border-linkaGray-200 text-linkaGray-300',
    },
    {
      color: 'link',
      disabled: true,
      className: 'text-linkaGray-300',
    },
  ],
  defaultVariants: {
    color: 'primary',
  },
});

export type ButtonVariantsProps = VariantProps<typeof buttonVariants>;

export default buttonVariants;