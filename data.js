export const data = {
    'context': {
        title:'Context API',
        data: [
            {id:1, title:'Simple integration', code:`import { createContext } from "react"

export const UiContext = createContext() 
            `},
            {id:2, title:'Practical example',
            description:'Example for toggling a sidebar Menu cliking a menu icon in the header',
            items: [
                {id:1, title:'Create a Context',code:`import { createContext } from "react"

export const UiContext = createContext()
                `,
            },
            {
                id:2, title:'Create a Context Provider',code:`const initialState = {
                    isMobileMenuOpen: false,
                    searchTerm: ''
                }
                
                const UiProvider = ({children}) => {
                
                    const [state, setstate] = useState(initialState);
                
                    const toggleMenu = () =>{
                        setstate({
                            ...state,
                            isMobileMenuOpen: !state.isMobileMenuOpen
                        })
                    }
                    const search = (term) =>{
                        setstate({
                            ...state,
                            searchTerm: term
                        })
                    }
                
                    const data = {
                        isMobileMenuOpen: state.isMobileMenuOpen,
                        searchTerm: state.searchTerm,
                        toggleMenu,
                        search
                    }
                
                    return (
                        <UiContext.Provider value={data}>
                            {children}
                        </UiContext.Provider>
                    )
                }
                export default UiProvider`,  
            },
            {id:3, title:'Wrap the main app with the Provider',code:`function MyApp({ Component, pageProps }: AppProps) {
                return(
                  <UiProvider>
                  <Layout>
                  <Component {...pageProps} />
                  </Layout>
                  </UiProvider>
                )
              }
              
              export default MyApp
            `,
        },
        {id:4, title:'Use the global state in a component',code:`const Header = () => {

            const {toggleMenu} = useContext(UiContext)
            
            return (
                <div className={styles.header}>
                    <div 
                    className={styles.headerLeftMobileMenu}
                    onClick={()=> toggleMenu()}>
                    <MenuOutlined />
                    </div>
                </div>
            )
            }
            
            export default Header
        `,
    },
            ]
        },
        ]
    },
    'redux':{
        title:'Redux',
        data:[
            { id:1,title:'Installation',code:`
            //npm
            npm install redux react-redux
            //yarn
            yarn add redux react-redux
            `},
            { id:2,title:'Most basic implementation',
            description:'Add a todo and get todos to a list',
            items:[
                { id:1,title:'Create a store',code:`
                import {createStore} from 'redux';

                const store = createStore(rootReducer)
                `},
                {id:2, title:'Wrap the state provider to the app',code:`
                import {Provider} from 'react-redux'

                ReactDOM.render(
                    <Provider store={store}>
                    <App />
                    </Provider>,
                  document.getElementById('root')
                );
                `},
                {id:3, title:'Build a rootReducer and a initialstate',
                code:`
                import {combineReducers} from 'react-redux'

                const initialState = {
                    todos:[]
                }

                const todoReducer = (state=initialState, action)=>{
                    switch(action.type){
                        case 'ADD_TODO:
                            return {
                                ...state,
                                todos: [...state.todos, action.payload]
                            }
                        default:
                            return state
                    }
                }

                const rootReducer = combineReducers({
                    todos: todoReducer
                })`},
                {id:4,title:'dispatch a todo with useDispatch hook', code:`
                import { useDispatch } from 'react-redux';   

                function App() {

                const [text, setText] = useState('');
                const dispatch = useDispatch()

                const handleSubmit = e =>{
                    e.preventDefault();
                      dispatch({
                        type:'ADD_TODO',
                        payload: {
                          id:Date.now(),
                          text
                        }
                      })
                    }   
                    setText('')
                  }
                
                return (
                    <div className="App">
                      <form
                      onSubmit={handleSubmit}
                      >
                        <input 
                          value={text}
                          onChange={e=> setText(e.target.value)}
                        />
                        <button
                        type="submit">Add</button>
                      </form>
                    </div>
                  );
                }
                `},
                {
                    id:5,title:'To show the saved todos in the global state use useSelector hook and access the todoReducer, then map the todos array as a list.',code:`
                    const {todos} = useSelector(state=> state.todos)
                   return ( <div className="App">
                    <form
                    onSubmit={handleSubmit}
                    >
                      <input 
                        value={text}
                        onChange={e=> setText(e.target.value)}
                      />
                      <button
                      type="submit">Add</button>
                    </form>

                    <ul>                                 
                      {todos?.map(todo=> (
                        <li key={todo.id}>{todo.text}</li>  <---- map the todos list and show them on the app
                      ))}
                    </ul>                                
                  </div>)

                    `
                }

            ]
        }
        ]
    },
    'forms':{
      title:'Forms',
      data:[
        {id:1, title:'Most basic',
      description:'Build the simple form and submit a text',code:`
      import { useState } from 'react';

      function App() {

        const [text, setText] = useState('');
      
      const handleSubmit = e =>{
          e.preventDefault();
          //do something with the form data
      }
      
      return (
        <div className="App">
          <form
          onSubmit={handleSubmit}
          >
            <input 
              value={text}
              onChange={e=> setText(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
        )
      }
      `
      },
      {id:2, title:'Common basic implementation with different inputs',code:`import { useState } from 'react';

function App() {

  const [formData, setformData] = useState({
    username: '',
    email:'',
    password:''
  });

  const {username, email, password} = formData

  const handleChange = e =>{
    setformData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e =>{
    e.preventDefault();
    //do something with the form data
  }

  return (
    <div className="App">
      <form
      onSubmit={handleSubmit}
      >
        <input 
          name="username"
          value={username}
          onChange={handleChange}
        />
        <input 
          name="email"
          value={email}
          onChange={handleChange}
        />
        <input 
          name="password"
          value={password}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
      `}
      ]
    },
    'scroll-thumb':{
      title:'Customizing the Scroll thumb',
      data:[
        {id:1, title:'Most basic',code:`
        // with Sass

        .container{

        &::-webkit-scrollbar{ <----- customizing the whole thumb element style
          width:10px;   
        }

        &::-webkit-scrollbar-track {      <-----customizing the background
          background-color: rgba(255, 166, 0, 0.623); 
        }

        &::-webkit-scrollbar-thumb {       <----- Customizing the actual thumb
          box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);  
          background-color: rgb(255, 132, 0);
          border-radius: 50px;
        }
      
      }`}
      ]
    },
    'input':{
      title:'Input',
      data:[
        {id:1, title:'Most basic',code:`
        const Input = ({...props}) => {
    
          return (
              <input
              {...props}
              />
          )
      }
      
      export default Input
        `}
      ]
    },
    
}
