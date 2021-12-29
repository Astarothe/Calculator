import React from 'react'
import { changeOnColoredThemeAC, changeOnDarkThemeAC, changeOnLightThemeAC } from '@/actions'
import { connect } from 'react-redux'
import { Select } from '@/components/A6_SwitchTheme/components'
import { TitleTheme, WrapperSwitch } from '@/pages/Settings/components'
import { ITEMS_THEME, DARK_THEME_ID, LIGHT_THEME_ID, COLORED_THEME_ID } from '@/constants'
import { coloredBackground, darkBackground, white } from '@/theme'

class SwitchTheme extends React.PureComponent {
  constructor(props) {
    super(props)
    this.dispatch = this.props.dispatch
  }

  handleOnChangeTheme = e => {
    const targetValue = e.target.value

    if (targetValue === LIGHT_THEME_ID) {
      this.dispatch(changeOnLightThemeAC())
    } else if (targetValue === DARK_THEME_ID) {
      this.dispatch(changeOnDarkThemeAC())
    } else{
      this.dispatch(changeOnColoredThemeAC())
    }
  }

  changeThemeBody = () => {
    document.body.style.transition = '0.3s'
    console.log(this.props)
    switch (this.props.currentTheme) {
      case DARK_THEME_ID:
        document.body.style.background = darkBackground
        break
      case COLORED_THEME_ID:
        document.body.style.background = coloredBackground
        break
      default:
        document.body.style.background = white
    }
  }

  componentDidMount() {
    this.changeThemeBody()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.changeThemeBody()
  }

  render() {
    const optionsTheme = ITEMS_THEME
      .map(o => o.id === this.props.currentTheme
        ? <option style={{ display: 'none' }}
                  key={o.id} value={o.id}>{o.value}
          </option>
        : <option key={o.id} value={o.id}>{o.value}</option>)


    return (
      <WrapperSwitch>
        <TitleTheme>Switch Theme</TitleTheme>
        <Select value={this.props.currentTheme} onChange={this.handleOnChangeTheme}>
          {optionsTheme}
        </Select>
      </WrapperSwitch>
    )
  }


}

export default connect(state => ({ currentTheme: state.theme.currentTheme }))(SwitchTheme)


// console.log(props)
// const themes = useSelector(state => state.theme.currentTheme)
// const [currentTheme, setCurrentTheme] = useState(themes)
// const dispatch = useDispatch()
//
// const onChangeTheme = e => {
//   if (e.target.value === THEME_LIGHT) {
//     dispatch(changeOnLightThemeAC())
//   } else if (e.target.value === THEME_DARK) {
//     dispatch(changeOnDarkThemeAC())
//   }
//   setCurrentTheme(e.target.value)
// }
//
// useEffect(() => {
//   document.body.style.transition = '0.3s'
//   if (themes === THEME_LIGHT) {
//     document.body.style.backgroundColor = white
//   } else {
//     document.body.style.backgroundColor = darkBackSettings
//   }
// }, [themes])
