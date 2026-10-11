import icon from "../../assets/icon/icon.svg";
import ButtonAnimated from "../../animation/buttonClick";

function Navbar() {
  return (
    <>
      <div className="flex gap-12 justify-around p-4 border-b border-surface">
        <div className="text-text-primary flex flex-row gap-3">
          <img src={icon} alt="" className="w-12" />
          <a
            href=""
            className="flex items-center font-display font-black text-[20px]"
          >
            PRIMA MAHARDIKA
          </a>
        </div>
        <div className="flex justify-center items-center text-text-secondary gap-4">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">SKills</a>
          <a href="">Projects</a>
          <a href="">Contact</a>
        </div>
          <ButtonAnimated>
          <a href="" className=" text-ivory">
            <button className="cursor-pointer rounded-4xl bg-ink w-30 h-10">Let's Talk</button>
          </a>
          </ButtonAnimated>
      </div>
    </>
  );
}

export default Navbar;
