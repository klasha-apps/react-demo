import React from 'react'

const CartIcon = ({ color }) => {
    return (
        <svg
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
                d='M1.66663 1.66669H3.11663C4.01663 1.66669 4.72496 2.44169 4.64996 3.33335L3.95829 11.6333C3.84163 12.9917 4.91662 14.1583 6.28329 14.1583H15.1583C16.3583 14.1583 17.4083 13.175 17.5 11.9834L17.95 5.73336C18.05 4.35002 17 3.22502 15.6083 3.22502H4.84997'
                stroke={color}
                strokeWidth='1.5'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M13.5417 18.3333C14.117 18.3333 14.5833 17.867 14.5833 17.2917C14.5833 16.7164 14.117 16.25 13.5417 16.25C12.9664 16.25 12.5 16.7164 12.5 17.2917C12.5 17.867 12.9664 18.3333 13.5417 18.3333Z'
                stroke={color}
                strokeWidth='1.5'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M6.87504 18.3333C7.45034 18.3333 7.91671 17.867 7.91671 17.2917C7.91671 16.7164 7.45034 16.25 6.87504 16.25C6.29974 16.25 5.83337 16.7164 5.83337 17.2917C5.83337 17.867 6.29974 18.3333 6.87504 18.3333Z'
                stroke={color}
                strokeWidth='1.5'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M7.5 6.66669H17.5'
                stroke={color}
                strokeWidth='1.5'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>

    )
}

export default CartIcon