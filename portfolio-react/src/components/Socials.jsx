export default function Socials(){
  return (
    <div className="fixed right-4 bottom-6 bg-indigo-700 p-2 rounded-lg flex flex-col gap-2 shadow-soft z-50">
      <a title="Facebook" href="https://web.facebook.com/?_rdc=1&_rdr" target="_blank"
         className="w-10 h-10 rounded-full bg-white grid place-items-center hover:scale-110 transition-transform">f</a>
      <a title="Twitter" href="#" className="w-10 h-10 rounded-full bg-white grid place-items-center hover:scale-110 transition-transform">t</a>
      <a title="WhatsApp" href="tel:+2250758280357"
         className="w-10 h-10 rounded-full bg-white grid place-items-center hover:scale-110 transition-transform">wa</a>
    </div>
  )
}