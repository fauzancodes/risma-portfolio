import Link from 'next/link';
import { ReactNode } from 'react';

type Props = {
  icon?: ReactNode;
  text?: string;
  link?: string;
  shape?: string;
  floating?: boolean;
  outline?: boolean;
  alwaysFit?: boolean;
  responsiveIcon?: boolean;
  responsivePadding?: boolean;
  download?: boolean;
  active?: boolean;
  extraClass?: string;
  ariaDisabled?: boolean;
  disabled?: boolean;
}

export const ButtonLinkPrimary = ({ icon, text, link, shape, floating, outline, alwaysFit, responsiveIcon, download, extraClass, responsivePadding, ariaDisabled }: Props) => {
  return (
    <Link href={link ? link : ''} target={link ? link.includes('#') ? '' : '_blank' : ''} download={download} className={`tw-btn tw-btn-primary tw-font-medium tw-border-2 tw-border-solid tw-min-h-0 ${shape === 'circle' ? 'tw-btn-circle tw-h-10 tw-w-10 tw-text-2xl !tw-p-0' : `${alwaysFit ? '!tw-w-fit' : 'tw-w-full md:tw-w-fit'} tw-h-fit tw-text-base ${responsivePadding ? '!tw-px-0 md:!tw-px-3' : 'tw-py-2 tw-px-3'}`} ${outline ? 'tw-btn-outline !tw-text-primary hover:!tw-text-dark' : '!tw-text-dark'} ${floating ? 'hover:tw-shadow-xl hover:tw-translate-y-[-0.15rem] active:tw-shadow-none active:tw-translate-y-0' : '!tw-shadow-none hover:!tw-translate-y-0 active:!tw-scale-1'} ${extraClass}`} aria-disabled={ariaDisabled}>{icon}{text ? <span className={`${responsiveIcon ? 'tw-hidden md:tw-block' : ''}`}>{text}</span> : null}</Link>
  )
}

export const ButtonPrimary = ({ icon, text, shape, floating, outline, alwaysFit, responsiveIcon, extraClass, responsivePadding, ariaDisabled, disabled }: Props) => {
  return (
    <button className={`tw-btn tw-btn-primary tw-font-medium tw-border-2 tw-border-solid tw-min-h-0 ${shape === 'circle' ? 'tw-btn-circle tw-h-10 tw-w-10 tw-text-2xl !tw-p-0' : `${alwaysFit ? '!tw-w-fit' : 'tw-w-full md:tw-w-fit'} tw-h-fit tw-text-base ${responsivePadding ? '!tw-px-0 md:!tw-px-3' : 'tw-py-2 tw-px-3'}`} ${outline ? 'tw-btn-outline !tw-text-primary hover:!tw-text-dark' : '!tw-text-dark'} ${floating ? 'hover:tw-shadow-xl hover:tw-translate-y-[-0.15rem] active:tw-shadow-none active:tw-translate-y-0' : '!tw-shadow-none hover:!tw-translate-y-0 active:!tw-scale-1'} ${extraClass}`} aria-disabled={ariaDisabled} disabled={disabled}>{icon}{text ? <span className={`${responsiveIcon ? 'tw-hidden md:tw-block' : ''}`}>{text}</span> : null}</button>
  )
}

export const ButtonLinkSecondary = ({ icon, text, link, shape, floating, outline, alwaysFit, responsiveIcon, download, extraClass, responsivePadding, ariaDisabled, active }: Props) => {
  return (
    <Link href={link ? link : ''} target={link ? link.includes('#') ? '' : '_blank' : ''} download={download} className={`tw-btn tw-btn-neutral tw-font-medium tw-border-2 tw-border-solid tw-min-h-0 ${shape === 'circle' ? 'tw-btn-circle tw-h-10 tw-w-10 tw-text-2xl !tw-p-0' : `${alwaysFit ? '!tw-w-fit' : 'tw-w-full md:tw-w-fit'} tw-h-fit tw-text-base ${responsivePadding ? 'tw-py-2 !tw-px-0 md:!tw-px-3' : 'tw-py-2 tw-px-3'}`} ${outline ? `tw-btn-outline tw-text-secondary-light tw-border-secondary-light hover:!tw-text-primary hover:tw-bg-secondary-light hover:tw-border-primary` : `${active ? 'tw-text-primary-dark' : 'tw-text-primary'} tw-text-dark tw-bg-secondary-light hover:tw-text-primary hover:tw-bg-secondary hover:tw-border-secondary-light`} ${floating ? 'hover:tw-shadow-xl hover:tw-translate-y-[-0.15rem] active:tw-shadow-none active:tw-translate-y-0' : '!tw-shadow-none hover:!tw-translate-y-0 active:!tw-scale-1'} ${extraClass}`} aria-disabled={ariaDisabled}>{icon}{text ? <span className={`${responsiveIcon ? !active ? 'tw-hidden md:tw-block' : alwaysFit ? '' : 'tw-hidden md:tw-block' : ''}`}>{text}</span> : null}</Link>
  )
}

export const ButtonSecondary = ({ icon, text, shape, floating, outline, alwaysFit, responsiveIcon, extraClass, responsivePadding, ariaDisabled, disabled, active }: Props) => {
  return (
    <button className={`tw-btn tw-btn-neutral tw-font-medium tw-border-2 tw-border-solid tw-min-h-0 ${shape === 'circle' ? 'tw-btn-circle tw-h-10 tw-w-10 tw-text-2xl !tw-p-0' : `${alwaysFit ? '!tw-w-fit' : 'tw-w-full md:tw-w-fit'} tw-h-fit tw-text-base ${responsivePadding ? 'tw-py-2 !tw-px-0 md:!tw-px-3' : 'tw-py-1 tw-px-3'}`} ${outline ? `tw-btn-outline tw-text-dark tw-border-secondary-dark hover:!tw-text-primary hover:tw-bg-secondary-light hover:tw-border-primary` : `${active ? 'tw-text-primary' : 'tw-text-dark'} tw-text-dark hover:tw-text-primary hover:tw-bg-secondary-light hover:tw-border-secondary-light`} ${floating ? 'hover:tw-shadow-xl hover:tw-translate-y-[-0.15rem] active:tw-shadow-none active:tw-translate-y-0' : '!tw-shadow-none hover:!tw-translate-y-0 active:!tw-scale-1'} ${extraClass}`} aria-disabled={ariaDisabled} disabled={disabled}>{icon}{text ? <span className={`${responsiveIcon ? !active ? 'tw-hidden md:tw-block' : alwaysFit ? '' : 'tw-hidden md:tw-block' : ''}`}>{text}</span> : null}</button>
  )
}