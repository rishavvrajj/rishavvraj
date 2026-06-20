
export default function Profile() {
  return (
    <div>
      <div className="profile flex gap-3 items-center relative pt-44">
        <div className="flex w-32 h-32 rounded-3xl overflow-hidden border-zinc-800 border-2">
          <img src="/profile.jpg" alt="" />
        </div>
        <div className="flex flex-col gap-2"> 
          <span className="text-3xl flex items-center gap-2">rishav raj <img className="w-7 h-7" src="/trick.png" alt="" /></span>
          <span className="text-sm opacity-50 tracking-tighter">Full-Stack and AI Developer</span>
          <span className="text-xs opacity-55 flex items-center gap-1"><img className="h-5 w-4" src="/view.png" alt="" /><b>91 </b>profile View</span>
        </div>
      </div>
    </div>
  )
}
