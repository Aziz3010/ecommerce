import styles from "./styles.module.css";
const { heading } = styles;

const Heading = ({ headingText }: { headingText: string }) => {
  return <h2 className={heading}>{headingText}</h2>;
};

export default Heading;
