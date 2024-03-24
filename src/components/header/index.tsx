import styles from './index.module.scss';

export const Header = () => {
  return (
    <nav className={styles['header']}>
      <ul className={styles['anchors']}>
        <li className={styles['anchor']}>Features</li>
        <li className={styles['anchor']}>Game System</li>
        <li className={styles['anchor']}>Character</li>
        <li className={styles['anchor']}>DLC</li>
        <li className={styles['anchor']}>Stores</li>
      </ul>
      <span className={styles['news']}>NEWS</span>
      <span className={styles['divider']} />
      <span className={styles['lang']}>JA</span>
    </nav>
  );
};
