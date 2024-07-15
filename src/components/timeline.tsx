import React from 'react'

function Timeline() {
    return (
        <div className="mt-32 sm:w-10/12 lg:w-full">
            <div className='flex gap-5'>
                <div className="text-3xl font-bold text-slate-300">About Me</div>
                <div className="border-gray-700 border-t-[1px] w-72 mt-5"></div>
            </div>
            
            <div className="lg:flex">
                
                <div className="text-slate-400 lg:basis-1/2 leading-relaxed font-semibold borde-red-600">
                    <div className="mt-6">
                        When was the last time you encountered someone who could draw parallels between hip-hop dance and data science? 
                        For me, dance is not just a hobby; it&apos;s a dynamic expression of creativity, rhythm, and precision—qualities I also bring to my passion for data analysis and data science.
                        <div className="mt-4">
                            Hi, I&apos;m Ayan. I draw beautiful insights and conclusions from boring numerical and textual
                            data. I love to explore modern trends in the field of data science and applying those to 
                            make my life a bit easier. I have been playing around with data since 2022.
                            <div className="mt-4">
                                My data journey started with learning to scrape some jutsu spell data from a browser
                                about{" "}
                                <a
                                    href="https://github.com/Ayan-OP/DataScience_with_Naruto"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-green-300 hover:text-green-300 transition ease-in-out duration-300"
                                >
                                (Naruto)
                            </a>
                            . Since then I&apos;m passionate about learning amazing libraries,
                            tools and frameworks. My day to day tasks involve, dancing to rythm
                            and playing with numbers.
                        </div>
                    </div>

                    <div className="mt-4">
                        I would love to collaborate and build amazing stuff together.
                    </div>
                </div>
            </div>

                <div>
                    <div className='w-96 border-red-300 bottom-2 sm:mt-12 sm:ml-10 lg:mt-0'><iframe style={{borderRadius:"20px" }} src="https://open.spotify.com/embed/playlist/5xyuYHd2fQypSamdxUh67W?utm_source=generator&theme=0" width="400" height="360"> </iframe></div>
                </div>


            </div>
        </div>
    );
}

export default Timeline;