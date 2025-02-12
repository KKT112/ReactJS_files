import "./index.css";

function App() {
  return (
    <div className="bg-[#040C18] h-full  m-0 p-0 ">
      <div className="  md:flex text-white text-2xl py-10 justify-between mx-20">
        <div className=" md:align-text-center ">
          <ul className= "md :flex gap-9 flex-row">
            <li className="text-3xl animate-pulse">GPT-3</li>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#home">What is ChatGpt?</a>
            </li>
            <li>
              <a href="#home">Open Ai</a>
            </li>
            <li>
              <a href="#home">Case Studies</a>
            </li>
            <li>
              <a href="#home">Libraries</a>
            </li>
          </ul>
        </div>
        <div className="">
          <ul className="flex gap-7">
            <li className="p-1">
              <a href="#sign-in">Sign In</a>
            </li>
            <li className="bg-red-500 rounded-3xl px-1">
              <a href="#sign-out">Sign Out</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="text-white m-20 ">
          <div
            className=" text-inline-block text-5xl font-extrabold
      bg-gradient-to-r from-indigo-500 to-pink-600
      bg-clip-text text-transparent py-2  "
          >
            Let's Build Something amazing with GPT-3 <br />
            OpenAI
          </div>
          <div className="font-medium text-[#81AFDD] my-6">
            not bed travelling any Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quas provident eaque blanditiis. Deleniti sapiente
            modi praesentium unde consequatur quas itaque laudantium non rem
            dicta! Minus corporis nemo quae error voluptas!
          </div>
          <div className="flex py-10  ">
            <input
              type="email"
              placeholder="Your Email Address"
              className="bg-[#052D56] p-3 w-100 border" 
            ></input>
            <button className="bg-red-500 cursor-pointer  p-3 border hover:scale-110">
              Get Started
            </button>
          </div>
        </div>
        <div className="">
          <img src="image1.png"className="h-[667px] w-[1800px]"></img>
        </div>
      </div>

      <div>
     <img src="company.png" className="px-100 py-20"></img>
      </div>
    </div>
  );
}

export default App;
