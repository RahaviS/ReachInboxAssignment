import { createContext } from "react";

const ThemeContext = createContext({
    isDark:false,
    toggleTheme:()=>{},
    replyModal:false,
    setReplyModal:()=>{},
})

export default ThemeContext