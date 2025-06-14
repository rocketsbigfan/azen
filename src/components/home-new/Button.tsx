import { cn } from '@/lib/utils'

export enum ButtonType {
  'Google Play' = 'Google Play',
  'App Store' = 'App Store',
  'Mini App' = 'Mini App',
}


const types = [
  {
    label: ButtonType['Google Play'],
    text: 'Get it on',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
      <path d="M20.6344 14.7947L8.3717 2.5L23.9717 11.456L20.633 14.7947H20.6344Z" fill="currentColor" />
      <path d="M5.17238 1.77734C4.45238 2.15601 3.96838 2.84401 3.96838 3.73868V28.256C3.96838 29.1493 4.45105 29.8387 5.17372 30.216L19.4297 15.9947L5.17238 1.77734Z" fill="currentColor" />
      <path d="M28.7963 14.3113L25.523 12.418L21.8737 16.0006L25.523 19.5833L28.863 17.69C29.863 16.8953 29.863 15.106 28.7963 14.3113Z" fill="currentColor" />
      <path d="M8.3717 29.5017L23.9717 20.5457L20.6344 17.207L8.3717 29.5017Z" fill="currentColor" />
    </svg>
  },
  {
    label: ButtonType['App Store'],
    text: 'Download on the',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="43" height="38" viewBox="0 0 43 38" fill="none">
      <path d="M21.4207 8.9579C21.4941 7.19126 22.0558 5.6395 23.0924 4.34232C24.1342 3.03857 25.8566 2.11243 28.2141 1.58765C28.2298 1.6518 28.2461 1.716 28.263 1.77995V2.11562C28.263 2.87676 28.0541 3.74954 27.6418 4.70955C27.2096 5.63908 26.5342 6.51393 25.6373 7.30349C24.7983 7.99919 24.0222 8.45978 23.3362 8.66799C23.1097 8.72776 22.7993 8.78658 22.4243 8.83954C22.0907 8.88546 21.7561 8.92496 21.4207 8.9579Z" fill="currentColor" />
      <path d="M21.8143 11.5819C19.1513 11.5819 17.3023 9.50049 14.6755 9.50049C12.0487 9.50049 6.63708 11.6342 6.63708 19.0005C6.63708 26.3668 11.4427 31.113 11.9802 31.6672C12.5176 32.2214 13.7607 33.6459 15.6864 33.6459C17.6123 33.6459 19.7206 32.2928 21.8143 32.2928C23.9079 32.2928 26.543 33.6459 28.2634 33.6459C29.9838 33.6459 30.6914 33.0261 31.8622 31.9571C33.033 30.8882 35.2662 27.6259 36.0461 25.668C34.7615 24.9922 31.3566 23.1577 31.3566 19.0005C31.3566 16.2291 32.5027 13.9267 34.7948 12.0934C33.2911 10.3648 31.5471 9.50049 29.5627 9.50049C26.5861 9.50049 24.4773 11.5819 21.8143 11.5819Z" fill="currentColor" stroke="currentColor" strokeWidth="1.83333" strokeLinejoin="bevel" />
    </svg>
  },
  {
    label: ButtonType['Mini App'],
    text: 'Telegram',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="34" height="33" viewBox="0 0 34 33" fill="none">
      <path d="M29.3387 5.02503C29.3387 5.02503 32.0909 3.9837 31.8623 6.5137C31.7867 7.55503 31.0973 11.2015 30.5627 15.1432L28.7286 26.8234C28.7286 26.8234 28.5756 28.5339 27.2005 28.8327C25.8235 29.1297 23.7609 27.7914 23.3774 27.4944C23.0714 27.2707 17.6446 23.923 15.7331 22.2859C15.1985 21.8404 14.5865 20.9475 15.8086 19.9044L23.8364 12.4647C24.7544 11.5719 25.6705 9.4892 21.8493 12.0192L11.145 19.0867C11.145 19.0867 9.92097 19.831 7.62786 19.1619L2.66008 17.6732C2.66008 17.6732 0.825967 16.5567 3.95963 15.442C11.604 11.944 21.0069 8.3727 29.3387 5.02503Z" fill="currentColor" />
    </svg>
  }
]


export default function Button({ className, type, labelClassName, textClassName, gradient = true }: {
  labelClassName?: string,
  textClassName?: string,
  className?: string,
  gradient?: boolean
  type: ButtonType
}) {

  const btn = types.find(t => t.label === type);

  return (
    <button className={cn('flex justify-center items-center w-[246px] h-[64px] text-white border border-white rounded-lg', {
      'hover:border-none hover:text-black hover:bg-gradient-to-r from-[#C0EE02] to-[#90FF6B]': gradient,
      'hover:bg-white hover:text-black transition-all duration-300': !gradient
    }, className)}>
      {btn?.icon}
      <div className='ml-2 md:ml-4'>
        <p className={cn('font-gilroy font-normal text-left text-[10px]', textClassName)}>{btn?.text}</p>
        <p className={cn('font-gilroy font-bold text-left text-sm', labelClassName)}>{btn?.label}</p>
      </div>
    </button>
  )
}

export const GoogleButtonSmall = ({ className }: { className?: string }) => {
  return (
    <button className={cn('flex min-w-[162px] h-[48px] justify-center items-center backdrop-blur-[17px] text-white border border-white rounded-lg hover:bg-white hover:text-[#141414] transition-all duration-300', className)} >
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
        <path d="M15.7472 11.7738L6.32031 2.32227L18.3128 9.20719L15.7462 11.7738H15.7472Z" fill="currentColor" />
        <path d="M3.86015 1.76562C3.30665 2.05672 2.93457 2.58562 2.93457 3.2734V22.1211C2.93457 22.8078 3.30562 23.3378 3.86117 23.6278L14.8205 12.6952L3.86015 1.76562Z" fill="currentColor" />
        <path d="M22.02 11.4008L19.5037 9.94531L16.6982 12.6995L19.5037 15.4537L22.0713 13.9982C22.84 13.3873 22.84 12.0117 22.02 11.4008Z" fill="currentColor" />
        <path d="M6.32031 23.0804L18.3128 16.1955L15.7472 13.6289L6.32031 23.0804Z" fill="currentColor" />
      </svg>
      <div className='ml-2 md:ml-4'>
        <p className='font-gilroy font-normal text-left text-[8px]'>Get it on</p>
        <p className='font-gilroy font-bold text-left text-[12px]'>Google Play</p>
      </div>
    </button>
  )
}

export const AppStoreButtonSmall = ({ className }: { className?: string }) => {
  return (
    <button className={cn('flex min-w-[162px] h-[48px] justify-center items-center backdrop-blur-[17px] text-white border border-white rounded-lg hover:bg-white hover:text-[#141414] transition-all duration-300', className)} >
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="28" viewBox="0 0 32 28" fill="none">
        <path d="M15.542 6.90586C15.5953 5.62273 16.0028 4.49566 16.755 3.5535C17.5109 2.60657 18.7606 1.9339 20.4712 1.55273C20.4826 1.59933 20.4944 1.64596 20.5067 1.69241V1.93621C20.5067 2.48904 20.3551 3.12295 20.0559 3.82022C19.7424 4.49535 19.2523 5.13077 18.6015 5.70424C17.9928 6.20954 17.4296 6.54407 16.9319 6.6953C16.7676 6.73871 16.5423 6.78143 16.2702 6.8199C16.0282 6.85325 15.7854 6.88194 15.542 6.90586Z" fill="currentColor" />
        <path d="M15.8277 8.81251C13.8955 8.81251 12.5539 7.30078 10.6479 7.30078C8.74201 7.30078 4.81543 8.85052 4.81543 14.2008C4.81543 19.551 8.30229 22.9983 8.69229 23.4008C9.08222 23.8033 9.98417 24.838 11.3815 24.838C12.7788 24.838 14.3086 23.8552 15.8277 23.8552C17.3468 23.8552 19.2588 24.838 20.5071 24.838C21.7553 24.838 22.2688 24.3878 23.1183 23.6114C23.9678 22.835 25.5882 20.4656 26.1541 19.0435C25.222 18.5527 22.7515 17.2202 22.7515 14.2008C22.7515 12.1879 23.583 10.5156 25.2462 9.18408C24.1551 7.92857 22.8897 7.30078 21.4498 7.30078C19.2901 7.30078 17.76 8.81251 15.8277 8.81251Z" fill="currentColor" stroke="white" strokeWidth="1.1" strokeLinejoin="bevel" />
      </svg>
      <div className='ml-2 md:ml-4'>
        <p className='font-gilroy font-normal text-left text-[8px]'>Download on the</p>
        <p className='font-gilroy font-bold text-left text-[12px]'>App Store</p>
      </div>
    </button>
  )
}

export const TelegramButtonSmall = ({ className }: { className?: string }) => {
  return (
    <button className={cn('flex min-w-[162px] h-[48px] justify-center items-center backdrop-blur-[17px] text-white border border-white rounded-lg hover:bg-white hover:text-[#141414] transition-all duration-300', className)} >
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="25" viewBox="0 0 26 25" fill="none">
        <g clipPath="url(#clip0_2179_1261)">
          <path d="M20.3343 3.75434C20.3343 3.75434 22.3908 2.9762 22.2201 4.86675C22.1636 5.64489 21.6484 8.36974 21.249 11.3152L19.8784 20.0432C19.8784 20.0432 19.7641 21.3214 18.7365 21.5447C17.7076 21.7666 16.1662 20.7665 15.8797 20.5446C15.651 20.3775 11.5959 17.8759 10.1674 16.6525C9.76799 16.3196 9.31068 15.6525 10.2239 14.873L16.2227 9.31365C16.9087 8.64647 17.5932 7.0902 14.7378 8.98075L6.73896 14.262C6.73896 14.262 5.82433 14.8182 4.11079 14.3181L0.398607 13.2057C0.398607 13.2057 -0.971937 12.3714 1.3697 11.5385C7.08195 8.92458 14.1083 6.25589 20.3343 3.75434Z" fill="currentColor" />
        </g>
        <defs>
          <clipPath id="clip0_2179_1261">
            <rect width="25.4066" height="24.6593" fill="currentColor" />
          </clipPath>
        </defs>
      </svg>
      <div className='ml-2 md:ml-4'>
        <p className='font-gilroy font-normal text-left text-[8px]'>Telegram</p>
        <p className='font-gilroy font-bold text-left text-[12px]'>Mini App</p>
      </div>
    </button>
  )
}
