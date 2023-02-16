import React from 'react'
import { SiGmail, SiYoutube, SiTwitch, SiNetflix, 
        SiSoundcloud, SiHulu, SiHbo, SiGithub} from 'react-icons/si'

export default function Links() {
  return (
        <div className='text-white grid grid-cols-4 gap-6 flex flex-row justify-center items-center'>
            <a href='https://www.netflix.com/' target="_blank"><SiNetflix size={30} className="text-red-600 cursor-pointer hover:scale-110 duration-100"/></a>
            <a href='https://www.soundcloud.com/' target="_blank"><SiSoundcloud size={40} className="text-orange-600 cursor-pointer hover:scale-110 duration-100"/></a>
            <a href='https://www.hulu.com/' target="_blank"><SiHulu size={40} className="text-green-600  cursor-pointer hover:scale-110 duration-100"/></a>
            <a href='https://www.hbo.com/' target="_blank"><SiHbo size={40} className="text-blue-600 cursor-pointer hover:scale-110 duration-100"/></a>
            <a href='https://www.twitch.tv/' target="_blank"><SiTwitch size={35} className="text-purple-600 cursor-pointer hover:scale-110 duration-100"/></a>
            <a href='https://www.github.com/' target="_blank"><SiGithub size={35} className="text-black cursor-pointer hover:scale-110 duration-100"/></a>
            <a href='https://www.youtube.com/' target="_blank"><SiYoutube size={40} className="text-red-600 cursor-pointer hover:scale-110 duration-100"/></a>
            <a href='https://mail.google.com/' target="_blank"><SiGmail size={35} className="text-slate-400 cursor-pointer hover:scale-110 duration-100"/></a>
        </div>
  )
}
