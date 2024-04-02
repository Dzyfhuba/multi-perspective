import styles from './page.module.css'
import Welcome from "@/containers/welcome";

export default function Home() {
  return (
    <>
      <div className={styles.welcome}>
        <Welcome />
      </div>
    </>
  );
}
