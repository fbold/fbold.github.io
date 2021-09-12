
import GridElement from "../components/projects/GridElement"
import ProgressBar from "../components/ProgressBar"
import { TextElement } from "../components/TextComponents"
import { Title } from "../components/TextComponents"
import Footer from "../components/Footer"
import SocialBar from "../components/SocialBar"
import Landing from "../LandingComponent"
import text from "../text"
import { TechIcon } from "../components/TechIcon"


const Contents = () => {

  Object.keys(text.projects).map(key => {
    const obj = text.projects[key]
    return (
      <GridElement
        key={obj.title}
        title={obj.title}
        path={`${key}`}
        image={obj.images ? obj.images.cover : null}
        span={obj.span ? obj.span : 1}
      >
        {obj.short}
      </GridElement>
    )
  })

  return (
    <section className="h-screen bg-purple-even-darker">
      <div className="h-full2 relative items-end justify-items-end">
        <div className="relative flow flex-row items-end top-0 h-full w-full flex-wrap z-0" />
        <div className="relative flow flex-row items-end bg-purple-even-darker bottom-0 w-full">

          <Title>About me</Title>
          <div className="relative w-full m-auto lg:w-2/3">
            <TextElement c="true">
              {text.about.short}
            </TextElement>
          </div>

          <Title>Projects</Title>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 relative px-2 my-2 md:px-20 w-full overflow-auto gap-2 md:gap-4 ">
            {Object.keys(text.projects).map(key => {
              const obj = text.projects[key]
              return (
                <GridElement
                  key={obj.title}
                  title={obj.title}
                  path={`${key}`}
                  image={obj.images ? obj.images.cover : null}
                  span={obj.span ? obj.span : 1}
                >
                  {obj.short}
                </GridElement>
              )
            })}
          </div>

          <Title>Skills</Title>
          <div className="grid grid-flow-col grid-rows-3 md:grid-rows-2 lg:grid-rows-1 gap-2 relative w-full m-auto lg:w-2/3 justify-center">
              <TechIcon name="react"/>
              <TechIcon name="js"/>
              <TechIcon name="html"/>
              <TechIcon name="css"/>
              <TechIcon name="tailwind"/>
              <TechIcon name="node"/>
              <TechIcon name="git"/>
              <TechIcon name="python"/>
              <TechIcon name="unity"/>
              <TechIcon name="c#"/>

            {/* <TextElement c>{'— measured in millimeters of skill-juice :) —'}</TextElement>
            //  <ProgressBar p={7.6} title="JavaScript" /><br />
            //  <ProgressBar p={8.2} title="React" /><br />
            //  <ProgressBar p={8} title="HTML/CSS" /><br />
            //  <ProgressBar p={8} title="Git" /><br />
            //  <ProgressBar p={8.4} title="Unity (C#)" /><br />
            //  <ProgressBar p={6} title="Blender" /><br />
            //  <ProgressBar p={7} title="Python" /><br />
            //  <ProgressBar p={6} title="GIMP/PS" /><br /> */}
          </div>

          <Title>Contact</Title>
          <div className="relative w-full m-auto lg:w-2/3">
            <SocialBar />
          </div>

          <hr className="mx-auto self-center w-full border-2 mt-7" />
          <Footer />

        </div>
      </div>
    </section>
  )
}

const Home = () => {
  return (
    <>
      <Landing />
      <Contents />
    </>
  )
}

export default Home