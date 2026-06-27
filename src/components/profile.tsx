
export default function Profile() {
  return (
    <div className="relative">
      <div className="flex justify-center items-center overflow-hidden max-h-32 sm:max-h-42 sm:max-w-lg md:max-h-58 md:max-w-3xl rounded-2xl border-zinc-900 border">
        <img src="/bg.png" alt="backgound img" />
      </div>
      <div className=" text-blue-50">
        <div className="-mt-21 flex gap-3 items-center">
          <div className="flex justify-center items-center max-w-25 max-h-25 sm:max-w-32 sm:max-h-32 rounded-2xl overflow-hidden border-zinc-800 border-2">
            <img src="/profile.jpg" alt="profile img" />
          </div>
          <div className="flex flex-col gap-0.5 sm:gap-1 md:gap-2">
            <span className="text-xl sm:text-2xl md:text-3xl flex items-center gap-2">rishav raj <img className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 md:w-6 md:h-6" src="/trick.png" alt="" /></span>
            <span className="text-xs sm:text-sm md:text-md opacity-50 m-[0_2] tracking-tighter">Full-Stack and AI Developer</span>
            <span className="text-[10px] sm:text-xs md:text-sm opacity-55 flex items-center m-[0_3] gap-2"><img className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5" src="/view.png" alt="" /><b>91 </b>profile View</span>
          </div>
        </div>
      </div>
    </div>
  )
}
