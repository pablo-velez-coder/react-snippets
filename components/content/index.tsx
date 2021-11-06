import Sidebar from '../sidebar'
import styles from './styles.module.scss'

interface LayoutChildren {
    children: React.ReactNode
  }

const Content: React.FC<LayoutChildren> = ({children}) => {
    return (
        <div className={styles.content}>
        <Sidebar />
         <main
         className={styles.main}
         >{children}</main>
        </div>
    )
}

export default Content
