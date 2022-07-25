<template>
    <div class="w-full h-20 shadow-lg">
        <div class='flex flex-row justify-between'>
            <img src="../assets/icons/myntraLogo.png" alt="myntra" class='w-12 h-12 mx-10 mt-4 mb-4'>

            <div class='flex gap-10 content-end my-auto font-bold antialiased text-[#3f4353]'>
                <nuxt-link to="/"><span>HOME</span></nuxt-link>
                <nuxt-link to="search"><span>MESSAGE</span></nuxt-link>
                <nuxt-link to="explore"><span>EXPLORE</span></nuxt-link>
                <nuxt-link to='studio'><span>STUDIO</span></nuxt-link>
            </div>
            <div>
                <span>
                    <nav-search-bar />
                </span>
            </div>
            <div class='flex mx-20 my-auto font-bold antialiased text-[#3f4353]'>
                <nuxt-link to="login"><span>LOGIN</span></nuxt-link>
            </div>
        </div>
    </div>
</template>