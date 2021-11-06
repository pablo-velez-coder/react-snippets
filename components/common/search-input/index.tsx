import { SearchOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { useContext } from 'react'
import { UiContext } from '../../../context/ui/uiContext'
import styles from './styles.module.scss'

const SearchInput = () => {

    const [input, setInput] = useState('')
    const {search} = useContext(UiContext)

    const handleSubmit = e =>{
        e.preventDefault()
        search(input)
    }

    return (
        <form 
        onSubmit={handleSubmit}
        className={styles.searchInput}> 
            <input
            value={input}
            onChange={e=> setInput(e.target.value)}
            placeholder="Search your react snippet..."
            />    
            <button
            type='submit'
            >
           <span>
           <SearchOutlined />
           </span>
            <p>Go</p>
            </button>
        </form>
    )
}

export default SearchInput
