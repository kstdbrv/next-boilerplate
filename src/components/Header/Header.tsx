import React from 'react'
import styles from './Header.module.css'
// import CheckIcon from './Check.svg'
/* eslint-disable-next-line */
export interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  const str: string = 'привет привет привет я строка, новая строка'
  const strNew = str.replaceAll('строка', 'волна')

  return (
    <div className={styles.Container}>
      <h1 className={styles.Header__title}>Hellofdg!</h1>
      <p className={styles['header-title']}>{strNew}</p>
      {/* <CheckIcon /> */}
    </div>
  )
}

export const shuldApdate = (): void => {
  console.log('do something')
  /* let axa = 'hjghjgh' */
}
