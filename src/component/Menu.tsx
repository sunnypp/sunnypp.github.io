import AboutMeIcon from '../asset/icon/aboutMe.svg'
import MyJourneyIcon from '../asset/icon/myJourney.svg'
import NonWorkIcon from '../asset/icon/nonWork.svg'
import GearsIcon from '../asset/icon/gears.svg'
import LifeGoalsIcon from '../asset/icon/lifeGoals.svg'
import styled from 'styled-components'
import { withTranslation } from 'react-i18next'

const Menu = styled.nav`
align-items: center;
background: ${props => props.theme.palette.menu.background};
bottom: 0;
display: flex;
flex-direction: row;
height: 70px;
position: fixed;
width: 100%;
z-index: 9999;
`

const IconButton = styled.a`
color: ${props => props.theme.palette.menu.text};
display: flex;
flex: 1;
flex-direction: column;
align-items: center;
font-size: 12px;
padding: ${props => props.theme.size.size1};
text-align: center;
text-decoration: none;
transition: background .3s;

:hover {
background: ${props => props.theme.palette.menu.hover};
}
`

const IconImage = styled.img`
display: block;
height: 48px;
width: 48px;
`

const Icons: Record<string, string> = {
  aboutMe: AboutMeIcon,
  myJourney: MyJourneyIcon,
  nonWork: NonWorkIcon,
  gears: GearsIcon,
  lifeGoals: LifeGoalsIcon,
}

const MenuButton = (key: string, t: any) => <IconButton href={`#${key}`}>
  <IconImage src={Icons[key]} />
  {t(`${key}.title`)}
</IconButton>

const Component = ({ t }: { t: any }) => <Menu>
  {MenuButton("aboutMe", t)}
  {MenuButton("myJourney", t)}
  {MenuButton("nonWork", t)}
  {MenuButton("gears", t)}
  {MenuButton("lifeGoals", t)}
</Menu>

export default withTranslation()(Component)
