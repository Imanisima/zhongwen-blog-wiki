import LikeButton from './components/LikeButton';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      
      <main className="flex max-h-screen flex-col items-center justify-between p-10">
        <div className="border border-fuchsia-700 rounded-xl p-15 md:p-20 flex flex-1 flex-col md:flex-row">
          <div className="text-center max-w-3xl px-3 md:px-5">
            {/* <h1 className="capitalize text-2xl"> Coming Soon~ <span className="h-10 w-10" role="img" aria-label="cat">🐈</span> </h1> */}
            <h1 className="text-xl text-gradient px-1 py-10 hover:cursor-pointer">Not your typical chinese language blog...</h1>
            <p className="text-white/80 leading-[2.5rem]">
            Dive into the world of Chinese language learning with a <span className="text-pink-300 underline underline-offset-4 decoration-wavy decoration-sky-500 hover:text-sky-500 hover:decoration-fuchsia-500 transition ease-in-out delay-150 hover:cursor-pointer">tech-savvy twist</span>. Although I am far from being a fluent Chinese speaker, I want to not only share with you tips and tricks from my <span className="text-pink-300 underline underline-offset-4 decoration-wavy decoration-sky-500 hover:text-sky-500 hover:decoration-fuchsia-500 transition ease-in-out delay-150 hover:cursor-pointer">personal chinese language journal</span> since I began my studies 3 years ago, but also some <span className="text-pink-300 underline underline-offset-4 decoration-wavy decoration-sky-500 hover:text-sky-500 hover:decoration-fuchsia-500 transition ease-in-out delay-150 hover:cursor-pointer">coding projects</span> that will enhance our learning journey.
            </p>
            <p className="text-white/80 py-10">If this sounds remotely interesting to you, feel free to click the like button!  <br /> <span  className="font-cn">一会见哦～</span></p>
            <h3 className="font-cn">阿猊 &#183; Imani</h3>
          </div>
          {/* like button */}
          <div className=" px-3 py-5 md:px-1 flex justify-end">
            <LikeButton />
          </div>
        </div>
      </main>
    </div>
  )
}