import Sidenav from '@/ui/dashboard/sidenav';
import Topnav from '@/ui/dashboard/topnav';
import styles from '@/styles/pages.module.css';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className={styles.container}>
        <Sidenav />
        <div>
          <Topnav />
          <div>{children}</div>
        </div>
      </div>
    </>
  );
}
