import React, { CSSProperties } from 'react'

interface Props {
  widthIcon?: number | string
  heightIcon?: number | string
  style?: CSSProperties
  className?: string
}

const AvatarEmpty = ({
  widthIcon,
  heightIcon,
  style,
  className,
}: Props): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={widthIcon ?? '115'}
    height={heightIcon ?? '115'}
    fill="none"
    viewBox="0 0 140 140"
    style={style}
    className={className}
  >
    <circle cx="70" cy="70" r="70" fill="#B382BA" />
    <path fill="#B382BA" d="M117.116 22.885H22.885v94.231h94.231V22.885z" />
    <path
      fill="#fff"
      d="M43.53 93.598V77.402c0-2.91-1.33-5.427-4.09-5.427v-3.942c2.752 0 4.09-2.519 4.09-5.427v-16.12c0-6.528 4.877-10.619 9.833-10.619h4.799v4.322h-4.799c-2.825 0-5.192 2.596-5.192 6.294v16.598c0 3.303-1.023 5.818-3.619 6.921 2.596 1.102 3.619 3.62 3.619 6.923v16.6c0 3.618 2.36 6.294 5.192 6.294h4.799v4.322h-4.799c-4.956-.002-9.833-4.093-9.833-10.543zM86.637 99.815c2.826 0 5.191-2.676 5.191-6.295V76.922c0-3.302 1.024-5.817 3.62-6.922-2.596-1.1-3.62-3.619-3.62-6.922v-16.59c0-3.7-2.358-6.295-5.19-6.295h-4.8V35.87h4.8c5.034 0 9.832 4.09 9.832 10.62v16.122c0 2.909 1.33 5.427 4.091 5.427v3.927c-2.754 0-4.09 2.517-4.09 5.427v16.204c0 6.451-4.799 10.541-9.834 10.541H81.84v-4.321l4.798-.003z"
    />
  </svg>
)

export default AvatarEmpty