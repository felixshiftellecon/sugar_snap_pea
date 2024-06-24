import clsx from 'clsx';

export default function Instagram(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      width="41"
      height="42"
      viewBox="0 0 41 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={clsx('fill-current', props.className)}
    >
      <g clipPath="url(#clip0_9_406)">
        <path
          d="M20.5 0C14.9368 0 14.2373 0.02625 12.0514 0.126C9.86563 0.231 8.37681 0.58275 7.0725 1.1025C5.70373 1.62835 4.46424 2.45542 3.44144 3.52538C2.39696 4.57312 1.58958 5.84284 1.07625 7.245C0.568875 8.5785 0.222938 10.1062 0.123 12.3375C0.025625 14.5819 0 15.2959 0 21.0026C0 26.7041 0.025625 27.4181 0.123 29.6573C0.2255 31.8938 0.568875 33.4189 1.07625 34.755C1.60156 36.1357 2.30113 37.3065 3.44144 38.4746C4.57919 39.6427 5.72206 40.362 7.06994 40.8975C8.37681 41.4173 9.86306 41.7716 12.0463 41.874C14.2347 41.9737 14.9317 42 20.5 42C26.0683 42 26.7628 41.9737 28.9511 41.874C31.1318 41.769 32.6258 41.4173 33.9301 40.8975C35.2979 40.3713 36.5365 39.5443 37.5586 38.4746C38.6989 37.3065 39.3984 36.1357 39.9237 34.755C40.4286 33.4189 40.7745 31.8938 40.877 29.6573C40.9744 27.4181 41 26.7041 41 21C41 15.2959 40.9744 14.5819 40.877 12.3401C40.7745 10.1063 40.4286 8.5785 39.9237 7.245C39.4104 5.84284 38.603 4.57312 37.5586 3.52538C36.5358 2.45542 35.2963 1.62835 33.9275 1.1025C32.6206 0.58275 31.1292 0.228375 28.9486 0.126C26.7602 0.02625 26.0658 0 20.4949 0H20.5ZM18.6627 3.78525H20.5026C25.9761 3.78525 26.6244 3.80363 28.7846 3.906C30.7833 3.99787 31.8698 4.34175 32.5924 4.62787C33.5482 5.0085 34.2324 5.46525 34.9499 6.20025C35.6674 6.93525 36.1108 7.6335 36.4823 8.61525C36.7642 9.35287 37.0973 10.4659 37.187 12.5134C37.2869 14.7263 37.3074 15.3904 37.3074 20.9948C37.3074 26.5991 37.2869 27.2659 37.187 29.4787C37.0973 31.5262 36.7616 32.6366 36.4823 33.3769C36.1513 34.2875 35.6271 35.1115 34.9474 35.7892C34.2299 36.5243 33.5483 36.9784 32.5899 37.359C31.8724 37.6478 30.7859 37.989 28.7846 38.0835C26.6244 38.1833 25.9761 38.2069 20.5026 38.2069C15.0291 38.2069 14.3782 38.1833 12.218 38.0835C10.2193 37.989 9.13531 37.6478 8.41269 37.359C7.52307 37.021 6.71785 36.4849 6.05519 35.7892C5.37426 35.111 4.84909 34.286 4.51769 33.3742C4.23838 32.6366 3.90269 31.5236 3.813 29.4761C3.71563 27.2633 3.69513 26.5991 3.69513 20.9895C3.69513 15.3799 3.71563 14.721 3.813 12.5081C3.90525 10.4606 4.23838 9.34762 4.52025 8.60738C4.89181 7.62825 5.33769 6.92737 6.05519 6.19237C6.77269 5.45738 7.45431 5.00325 8.41269 4.62262C9.13531 4.33388 10.2193 3.99262 12.218 3.89812C14.1091 3.80888 14.842 3.78263 18.6627 3.78V3.78525ZM31.4444 7.27125C31.1214 7.27125 30.8015 7.33643 30.503 7.46307C30.2046 7.58972 29.9334 7.77534 29.705 8.00934C29.4765 8.24334 29.2953 8.52115 29.1717 8.82689C29.0481 9.13263 28.9844 9.46032 28.9844 9.79125C28.9844 10.1222 29.0481 10.4499 29.1717 10.7556C29.2953 11.0614 29.4765 11.3392 29.705 11.5732C29.9334 11.8072 30.2046 11.9928 30.503 12.1194C30.8015 12.2461 31.1214 12.3112 31.4444 12.3112C32.0969 12.3112 32.7226 12.0458 33.1839 11.5732C33.6453 11.1006 33.9044 10.4596 33.9044 9.79125C33.9044 9.1229 33.6453 8.48193 33.1839 8.00934C32.7226 7.53675 32.0969 7.27125 31.4444 7.27125ZM20.5026 10.2165C19.1062 10.1942 17.7194 10.4566 16.423 10.9886C15.1266 11.5206 13.9464 12.3114 12.9513 13.3151C11.9561 14.3188 11.1657 15.5152 10.6263 16.8348C10.0868 18.1544 9.809 19.5707 9.809 21.0013C9.809 22.4319 10.0868 23.8482 10.6263 25.1678C11.1657 26.4874 11.9561 27.6838 12.9513 28.6875C13.9464 29.6912 15.1266 30.482 16.423 31.014C17.7194 31.546 19.1062 31.8084 20.5026 31.7861C23.2663 31.742 25.9023 30.5863 27.8415 28.5685C29.7807 26.5508 30.8676 23.8328 30.8676 21.0013C30.8676 18.1698 29.7807 15.4518 27.8415 13.4341C25.9023 11.4164 23.2663 10.2607 20.5026 10.2165ZM20.5026 13.9991C21.4 13.9991 22.2887 14.1802 23.1179 14.532C23.9471 14.8839 24.7005 15.3995 25.3351 16.0496C25.9697 16.6997 26.4731 17.4715 26.8165 18.3209C27.16 19.1703 27.3368 20.0806 27.3368 21C27.3368 21.9194 27.16 22.8297 26.8165 23.6791C26.4731 24.5285 25.9697 25.3003 25.3351 25.9504C24.7005 26.6005 23.9471 27.1161 23.1179 27.468C22.2887 27.8198 21.4 28.0009 20.5026 28.0009C18.69 28.0009 16.9517 27.2633 15.6701 25.9504C14.3884 24.6374 13.6684 22.8567 13.6684 21C13.6684 19.1433 14.3884 17.3626 15.6701 16.0496C16.9517 14.7367 18.69 13.9991 20.5026 13.9991Z"
          fill="#008080"
        />
      </g>
      <defs>
        <clipPath id="clip0_9_406">
          <rect width="41" height="42" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
