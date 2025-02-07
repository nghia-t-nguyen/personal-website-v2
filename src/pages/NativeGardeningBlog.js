import Tags from '../components/Tags'
import './BlogPost.css'
import './NativeGardeningBlog.css'
import GitTTInterface from '../assets/images/GitTTBlog/git-tt-screenshot.png'
import HouseBase from '../assets/images/NativeBlog/house_base.png'
import HouseRain from '../assets/images/NativeBlog/house_raining.gif'
import HouseSnow from '../assets/images/NativeBlog/house_snowing.gif'
import HouseShine from '../assets/images/NativeBlog/house_shining.gif'
import Stokes from '../assets/images/NativeBlog/stokes.jpg'
import Mystery from '../assets/images/NativeBlog/mystery.jpg'
import ActionButton from '../components/buttons/ActionButton'
import { useState } from 'react'

export default function NativeGardeningBlog() {
    const [imageUrl, setImageUrl] = useState(HouseBase)
    const [houseText, setHouseText] = useState('*Click on a button to reveal an explanation for how each condition influenced the way I garden*')
    const sunlightText = "The front of my house is south-facing, allowing for a wide-variety of plants. " +
        "However, I need to keep in mind how the sunlight hits different parts of the ground. Full-sunlight plants should be in the front, and partial-sunlight plants should be in the east and west. " +
        "Additionally, it's important to know where there is the absence of sun, i.e., how does the shade of objects limit the amount of sunlight that the plants get.";
    const rainText = "The topology of objects, such as the roof, the fences, and the landscape directs water to certain areas more than others. Therefore plants that tolerate a large amount of water should be planted where water pools up. " +
        "For example, my house does not have any gutters. Therefore, the water tends to pool up closer to the house, and I should grow plants that thrive in water-rich environments next to the house."
    const snowText = "Some objects release radiant heat. Since my house is made of brick, it charges up with heat during the day and releases it at night. Additionally, during the winter, the area around the house tends to be warmer. Therefore, plants that are not as frost-tolerant should be planted closer to the house."

    return (
        <div className='max-blog-width cont--blog-post'>
            <h1 className='title--blog'>Native Plant House Garden</h1>
            <Tags tags={['Garden Design', 'Interactive Visualization', 'Ongoing']} />
            <h2 className='upper-line'>The Problem</h2>
            <p>
                I've always taken pride in my neighborhood. Unlike most in the South, it's quite walkable, with protective sidewalks and businesses nearby. Adding to the liveliness of my walks, I'm surrounded by green-thumbed neighbors and love seeing the gardens they create.
                One day, as I strolled through the neighborhood, a question crossed my mind—<em>why weren’t there any insects flying around, despite the abundance of flowers and the peak of summer?</em>
            </p>

            <p>
                I researched how that could be, and the results revealed the answer: none of the plants around me were native.
                Consequently, I decided to be the change I wanted to see, and researched how to grow native plants.
            </p>
            <h2>Design Considerations</h2>
            <h3>Microclimates</h3>
            <p>Microclimates are a climates created in a small, restricted area by little variations in conditions.
                Factors that influence microclimates include sunlight, topology, water, soil, wind, shade, heat... the list goes on and on.
            </p>
            <p>Below I have made an isometric pixel art rendition of my house to show how some conditions create microclimates.</p>
            <div className='cont--blog-img'>
                <img
                    className="full-width-img pixelated"
                    src={imageUrl}
                    alt="pixelated rendition of my house"
                />
                <div className='cont--native-gardening-buttons'>
                    <ActionButton text='reset' handleClick={() => { setImageUrl(HouseBase); setHouseText('*Click on a button to reveal an explanation for how each condition influenced the way I garden*') }} />
                    <ActionButton text='sunlight' handleClick={() => { setImageUrl(HouseShine); setHouseText(sunlightText) }} />
                    <ActionButton text='water flow' handleClick={() => { setImageUrl(HouseRain); setHouseText(rainText) }} />
                    <ActionButton text='radiant heat' handleClick={() => { setImageUrl(HouseSnow); setHouseText(snowText) }} />
                </div>
            </div>
            <h4>Explanation</h4>
            <p>{houseText}</p>
            <h3>Species Support</h3>
            <p>Some plants are better suited for certain species. For instance, some plants serve as larval hosts for certain insects.
                Others can be used as nectar sources for pollinators, shelter for small wildlife, or food for birds and other animals, creating a balanced ecosystem.
                Before growing plants, it's important to keep in mind what species that you want to support, such as your favorites or those that are endangered.</p>
            <h3>Iterative Planning</h3>
            <p>
                Nature has a way of showing us what works and what doesn’t. For example, if a plant needs an excessive amount of water, it’s a clear sign that it’s not suited for the environment.
                It’s also important to observe which plants thrive and which ones fail, and to learn from these experiences. This helps me choose similar species for the next growing season.
                Ultimately, my goal is to create a low-maintenance garden that can sustain itself after I’m gone.
            </p>
            <h2>The Plan</h2>
            <h3>Wildflower Mix</h3>
            <p>My plan is to use a general wildflower mix and see what ends up growing.
                By seeing what grows one season, I could learn more about what type of plants that the environment around my house supports and iterate based on that knowledge.</p>
            <h3>Other Specialized Flowers</h3>
            <p>Additionally, certain flower species that may serve other purposes, such as aesthetics or keeping the rabbits away (more on that later).
                Be sure to reach out to your local organizations and businesses to obtain these.
                I chose Stokes Aster, wild bergamot, and swamp sunflower.</p>
            <h2>Early Results</h2>
            <h3>Wildflower Mix</h3>
            <p>I saw some native wildflowers the first year. However to my surprise, the rabbits of the neighborhood enjoyed munching on the sprouts as microgreens.
                From this experience, I learned more about how to address the rabbit problem, such as protecting plants until they are more mature or choosing plants that are rabbit-proof (e.g., wild bergamot).
            </p>
            <p>
                Therefore, almost all of the wildflower seeds that I planted just served as future fertilizer.
                However, to my surprise, some seeds were dormant the last year's growing season and have begun to sprout this season.
                I am looking forward to see what they are.
            </p>
            <div className='cont--blog-img'>
                <img
                    className="small-width-img"
                    src={Mystery}
                    alt="Mystery flower sprouts"
                />
                <span className='span--image-caption'>Some mystery sprouts. My money is on lance-leaved coreopsis.</span>
            </div>
            <h3>Other Specialized Flowers</h3>
            <p>
                The Stokes Aster, one of my aesthetic favorites, bloomed and produced seeds. Initially, I thought that it had died (it's an evergreen perennial), but it bounced back and is thriving.
                For this growing season, I reseeded the soil near where I planted the Stokes Aster with the Stokes Aster seeds. This is because oftentimes wildflower prepare the soil ahead of time, ensuring more success for its future generations.
            </p>
            <div className='cont--blog-img'>
                <img
                    className="small-width-img"
                    src={Stokes}
                    alt="Stokes Aster"
                />
                <span className='span--image-caption'>My Stokes Aster</span>
            </div>
            <p>
                The wild bergamot did not bloom, instead it "creeped". This is normal since perennials are known to "sleep, creep, and leap". Meaning they are largely dormant the first year, spread the second year, and bloom the third year.
            </p>
            <p>
                As its name suggests, the swamp sunflower loves water, so I planted it closer to my house. To no one's surprise, it thrived and flowered its first year.
            </p>
            <h3>
                Fauna
            </h3>
            <p>
                As of right now. I have seen 1 worm, several bees, and several butterflies, as opposed to barely any that I had seen previously.
            </p>
            <h3>Educational</h3>
            <p>Along the way, I learn a lot of things, such as ecology, botany, and design. For example, did you know that a single sunflower head is actually composed of multiple flowers?</p>
            <h3>Mental Health Benefits</h3>
            <p>
                To my surprise, gardening has given me positive mental health benefits.
                I found that it gave me something to look forward to and imparted a feeling of more agency.
                Gardening has also given me more mindful awareness of the plants and nature around me, allowing me to appreciate the beauty of nature more.
                I look forward to what surprises this next growing season has to offer me.
            </p>

        </div>
    )
}