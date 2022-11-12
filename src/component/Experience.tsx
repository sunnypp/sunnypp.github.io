import { Trans, withTranslation } from "react-i18next"
import styled from "styled-components"
import ExperiencePhoto from "../asset/photo/experience.jpg"
import { Em, Small, StickyTitle, Subtitle } from "./Title"

const Experience = styled.div`
background-color: ${props => props.theme.palette.experience.background};
background-image: url(${ExperiencePhoto});
background-position-y: bottom;
background-repeat: no-repeat;
background-size: 100%;
font-size: ${props => props.theme.size.font.content};
line-height: 1.5;
/* as 100% is the image width, taking aspect ratio into account */
padding: 0 ${props => props.theme.size.size3} 40vw;
position: relative;
`

const StickySubtitle = styled(Subtitle)`
left: 50vw;
bottom: calc(${props => props.theme.size.menu} + ${props => props.theme.size.size6} + ${props => props.theme.size.size2});
color: ${props => props.theme.palette.experience.subtitle};
display: inline-block;
position: sticky;
z-index: 2;
`

const StickyDuration = styled.div`
bottom: calc(${props => props.theme.size.menu} + ${props => props.theme.size.size2});
display: block;
font-size: ${props => props.theme.size.font.small};
position: sticky;
text-align: right;
z-index: 3;
`

const ExperienceContainer = styled.div`
display: flex;
flex: 0 1 auto;
flex-direction: column-reverse;
`

const RoleContainer = styled.div`
margin: ${props => props.theme.size.size4} 0;
`

const HorizontalRule = styled.div`
border-top: ${props => props.theme.size.size1} dashed ${props => props.theme.palette.experience.separator};
height: 5px;
width: 100%;
`

const ExperienceList = styled.ul`
margin: 0;
`

const NestedList = styled.ul`
padding-inline-start: 20px;
`

const TightListItem = styled.li`
line-height: 1.25;
margin: 8px 0;
`

const Component = ({ t }: { t: any }) => <Experience>
  <ExperienceContainer>
    <RoleContainer>
      <ExperienceList>
        <li>
          {t("experience.goodnotes.recommendation")}
          <NestedList>
            <TightListItem><Trans i18nKey="experience.goodnotes.recommendations.0"><Em>Insightful grader 👁️</Em><Small>(for take-home CRDT assignment)</Small></Trans></TightListItem>
            <TightListItem><Trans i18nKey="experience.goodnotes.recommendations.1"><Em>Good story-teller 🧑🏻‍🏫</Em> <Small>(even won Best Presenter in 1st internal hackathon)</Small></Trans></TightListItem>
          </NestedList>
        </li>
        <li>{t("experience.goodnotes.experiences.0")}</li>
        <li>
          <Trans i18nKey="experience.goodnotes.experiences.1">
            Optimized performance by <Em>tackling complexities</Em> 📐
          </Trans>
        </li>
        <li>
          <Trans i18nKey="experience.goodnotes.experiences.2">
            Did <Em>abstraction and reverse-engineering</Em> for code reuse 🤹🏻
          </Trans>
        </li>
        <li>
          <Trans i18nKey="experience.goodnotes.experiences.3">
            Worked in various team sizes ranging from <Em>solo to 20+</Em> remotely 🏃🏻‍♀️🏃🏼🏃🏾‍♂️
          </Trans>
        </li>
      </ExperienceList>
      <StickySubtitle id="experience"><Em>@{t("experience.goodnotes.company")}</Em></StickySubtitle>
      <StickyDuration><Em>{t("experience.goodnotes.duration")}</Em></StickyDuration>
    </RoleContainer>
    <HorizontalRule />
    <RoleContainer>
      <ExperienceList>
        <li><Trans i18nKey="experience.pred.experiences.0">Hands-on Development from Scratch (&gt;5 projects, including <a href="https://www.mostown.com.hk" target="_blank">MOSTown</a>) 🗒️</Trans></li>
        <li>{t("experience.pred.experiences.1")}</li>
        <li>{t("experience.pred.experiences.2")}</li>
        <li>{t("experience.pred.experiences.3")}</li>
        <NestedList>
          <TightListItem><Small><Trans i18nKey="experience.pred.libraries">(briefly worked with <a href="https://phaser.io" target="_blank">Phaser.js</a>, <a href="https://github.com/tensorflow/tfjs" target="_blank">Tensorflow.js</a>, <a href="https://github.com/web3/web3.js" target="_blank">web3.js</a>, <a href="https://gulpjs.com" target="_blank">gulp</a>, <a href="https://reactjs.org" target="_blank">React</a>, <a href="https://greensock.com/gsap/" target="_blank">GSAP</a>, etc.)</Trans></Small></TightListItem>
        </NestedList>
      </ExperienceList>
      <StickySubtitle><Em>@{t("experience.pred.company")}</Em></StickySubtitle>
      <StickyDuration><Em>{t("experience.pred.duration")}</Em></StickyDuration>
    </RoleContainer>
    <HorizontalRule />
    <RoleContainer>
      <ExperienceList>
        <li><Trans i18nKey="experience.neto.experiences.0"><Em>100% of Perl test cases (&gt;100 files and growing)</Em> are based on <a href="https://github.com/sunnypp/peri" target="_blank">Peri</a> which I implemented as a Perl port of <a href="https://jasmine.github.io" target="_blank">JasmineJS</a> which earned me <Em>Developer of the Month</Em></Trans></li>
        <li><Trans i18nKey="experience.neto.experiences.1"><Em>Reduced 95%+ of the problem of \"overwriting staging environments\"</Em> by making a Slackbot</Trans></li>
        <li><Trans i18nKey="experience.neto.experiences.2">IntelliJ Groovy plugin, <a href="https://stackoverflow.com/questions/42049983/bash-based-hot-reload-implementation/42080289" target="_blank">bash script</a>, Chrome plugins and more on top of daily JavaScript + Perl coding to meet new eCommerce requirements as a remote team member of an Australian company</Trans></li>
      </ExperienceList>
      <StickySubtitle><Em>@<Trans i18nKey="experience.neto.company">Neto <Small>(by Maropost)</Small></Trans></Em></StickySubtitle>
      <StickyDuration><Em>{t("experience.neto.duration")}</Em></StickyDuration>
    </RoleContainer>
  </ExperienceContainer>
  <StickyTitle><Em>{t('experience.title')}</Em></StickyTitle>
</Experience>

export default withTranslation()(Component)
