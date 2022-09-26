const AboutSection = () => {
    return (
        <section className='py-16'>
            <div className='max-w-screen-xl flex flex-col gap-4 mx-auto mb-16 px-10 text-2xl md:text-4xl lg:text-5xl xl:text-6xl'>
                <div className='hidden sm:block'>We are a team of great designers,</div>
                <div className='hidden sm:block sm:self-end'>problem solvers, and passionate.</div>
                <div className='sm:hidden text-center'>We are a team of great designers, problem solvers, and passionate.</div>
            </div>

            <div className='p-16 bg-orange-400'>
                <div className='max-w-screen-xl flex gap-16 mx-auto'>
                    <div>
                        <div className='flex items-center gap-3'>
                            <div className='w-6 h-0.5 bg-zinc-900'></div>
                            <div className='text-zinc-900'>About us</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
