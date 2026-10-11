import ButtonAnimated from "../../animation/buttonClick";
import heroSvg from "../../assets/img/hero.svg"

function hero() {
  return (
    <>
      <section
        id="home"
        className="justify-between flex flex-col mt-20 mr-40 ml-40"
      >
        <div className="flex flex-row">
          <p className="t-label flex items-center gap-5 text-muted font-black">
            <span className="h-px w-8 bg-terracotta" aria-hidden="true" />
            COMPURES SCIENCE · SOFTWARE DEVELOPER
          </p>
        </div>

        <div className="flex flex-col mt-6 gap-4">
          <h1 className="t-display font-black text-[90px]">
            <span className="block">BUILD SOFTWARE IMPACT</span>
            <span className="block">TO THE WORLD.</span>
            <span className="text-terracotta">EXPLORING AI.</span>
          </h1>
          <div className="flex flex-row justify-between">
            <p className="font-sans text-muted">
              I'm a computer science student learning to build fullstack web
              <br />
              products and AI-powered tools. I care about simple interfaces,
              <br />
              clean code, and things that are actually useful.
            </p>

            <div className="flex gap-4">
              <ButtonAnimated>
                <a href="" className="text-ivory">
                  <button className=" cursor-pointer rounded-4xl bg-ink w-50 h-14">
                    Explore My Projects
                  </button>
                </a>
              </ButtonAnimated>
              <ButtonAnimated>
                <a href="" className="text-ink ">
                  <button className=" cursor-pointer rounded-4xl border-2 border-surface w-50 h-14">
                    View My Github
                  </button>
                </a>
              </ButtonAnimated>
            </div>
          </div>
        </div>

        <img src={heroSvg} alt="" />
      </section>
    </>
  );
}

export default hero;
