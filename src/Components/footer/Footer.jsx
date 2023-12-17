import styles from './footer.module.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div>
        My Next App 2023. All rights reserved
      </div>
      <div className={styles.socila}>
        <Image className={styles.icon} src='/vk.png' width={15} height={15} alt="" />
        <Image className={styles.icon} src='/inst.png' width={15} height={15} alt="" />
        <Image className={styles.icon} src='/twitter.png' width={15} height={15} alt="" />
        <Image className={styles.icon} src='/yt.png' width={15} height={15} alt="" />
      </div>
    </footer>
  );
};

export default Footer;