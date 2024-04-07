import styles from './footer.module.css';

const {footerContainer} = styles;

const Footer = () => {
    const thisYear = new Date().getFullYear();
  return (
    <footer className={footerContainer}>© {thisYear} Your Ecom. All rights reserved.</footer>
  )
}

export default Footer