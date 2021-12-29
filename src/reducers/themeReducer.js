import {
   CHANGE_ON_COLORED_THEME,
   CHANGE_ON_DARK_THEME,
   CHANGE_ON_LIGHT_THEME, COLORED_THEME_ID,
   DARK_THEME_ID,
   LIGHT_THEME_ID,
} from '@/constants'
import {
   allTheme,
   coloredColors,
   darkColors,
   lightColors,
} from '@/theme'

const INITIAL_STATE = {
   ...allTheme,
   currentTheme: LIGHT_THEME_ID,
}


export const themeReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case CHANGE_ON_LIGHT_THEME :
         return {
            ...state,
            colors: { ...state.colors, ...lightColors },
            currentTheme: LIGHT_THEME_ID,
         }
      case CHANGE_ON_DARK_THEME:
         return {
            ...state,
            colors: { ...state.colors, ...darkColors },
            currentTheme: DARK_THEME_ID,
         }
      case CHANGE_ON_COLORED_THEME:
         return {
            ...state,
            colors: { ...state.colors, ...coloredColors },
            currentTheme: COLORED_THEME_ID,
         }
      default :
         return state
   }
}
