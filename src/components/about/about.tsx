import AnimatedOnScroll from "../../animation/onScroll";

export default function about() {
  return (
    <section className="justify-between flex flex-col mt-20 mr-40 ml-40">
      <AnimatedOnScroll>
        <div className="flex flex-row">
          <p className="t-label flex items-center gap-5 text-muted font-black">
            <span className="text-terracotta">01</span>
            <span className="h-px w-8 bg-terracotta" aria-hidden="true" />
            ABOUT
          </p>
        </div>
        <h1 className="t-section mt-10">
          <span className="block">Curious by habit.</span>
          <span>
            <span className="text-terracotta">Practical </span>by choice.
          </span>
        </h1>

        <div className="mt-10 flex flex-row ">
          <h1 className="flex flex-col">
            <span className="block text-ink">
              I'm Prima Mahardika and I am a computer science student
            </span>
            <span className="block w-2xl mt-2 text-muted">
              I'm drawn to fullstack web development because it lets me take an
              idea all the way from interface to database. AI interests me
              because it can make those products more helpful, and I want to
              understand it by building with it.
            </span>
            <div className="grid grid-cols-3 border border-line text-center mt-10">
              <div className="flex flex-col border-r border-line">
                Country
                <span>Indonesia</span>
              </div>
              <div className="flex flex-col border-r border-line">
                City
                <span>Denpasar, Bali</span>
              </div>
              <div className="flex flex-col">
                Role
                <span>Software Engineer</span>
              </div>
            </div>
          </h1>
        </div>
      </AnimatedOnScroll>
    </section>
  );
}
