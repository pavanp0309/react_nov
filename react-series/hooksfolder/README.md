HOOKS : Are javascript functions used for handling the state and sideEffects of a functional components

Different Types of Hooks 
useState()
useEffect()
useContext()
useReducer()
useRef()
useMemo()
useCallback()
useFormStatus()
use()
useId()

Custom Hooks : are developed for reusable Logic  and it alwaays with use Keyword 
useAuth()
useData() etc..


Rules : 
1.hooks are only Used inside the functional component not in class component
2.Hooks must be called inside top level the Body of functional component 
3.hooks should,nt  be called inside coditions or loops and plain js functions


1.useState()  

    syntax: const[variablename,updaterfunction]=useState(initalvalue)
    example: const[user,setUser]=useState(initalvalue)
    example: const[toggle,setToggle]=useState(initalvalue)
    example: const[isDark,setIsDark]=useState(initalvalue)
    initailvalue can be any datatypes : number boolean string object array function etc
//   useState returns arrays of two values 
// 1.variable while holds initialvalue 
// 2.updater function

