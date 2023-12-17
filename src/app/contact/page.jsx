import styles from './contact.module.css';
import Image from 'next/image';
import Button from '@/components/button/Button';

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let,s Keep in Touch</h1>
    </div>
  );
};

export default Contact;