import Content from '../content'
import Header from '../header'
import { useContext } from 'react'
import { UiContext } from '../../context/ui/uiContext'
import styles from './styles.module.scss'

interface LayoutChildren {
  children: React.ReactNode
}

const Layout: React.FC<LayoutChildren> = ({children}) => {

  const {searchTerm} = useContext(UiContext)
  
  return (
    <div className={styles.layout}>
          <Header />
          <Content>{children}</Content>
    </div>
    )
}

export default Layout
