import Introduction from '@/containers/introduction';
import styles from './page.module.css'
import Welcome from "@/containers/welcome";

export default function Home() {
  return (
    <div className={styles.container}>
      <Welcome />
      <Introduction />
    </div>
  );
}
