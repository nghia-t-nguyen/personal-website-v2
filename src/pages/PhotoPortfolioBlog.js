import Tags from '../components/Tags'
import './BlogPost.css'
import Photo1 from '../assets/images/PhotoPortfolio/1.jpg'
import Photo2 from '../assets/images/PhotoPortfolio/2.jpg'
import Photo3 from '../assets/images/PhotoPortfolio/3.jpg'
import Photo4 from '../assets/images/PhotoPortfolio/4.jpg'
import Photo5 from '../assets/images/PhotoPortfolio/5.jpg'
import Photo6 from '../assets/images/PhotoPortfolio/6.jpg'
import Photo7 from '../assets/images/PhotoPortfolio/7.jpg'
import Photo8 from '../assets/images/PhotoPortfolio/8.jpg'
import Photo9 from '../assets/images/PhotoPortfolio/9.jpg'
import Photo10 from '../assets/images/PhotoPortfolio/10.jpg'
import { useState, useRef } from 'react'
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

export default function PhotoPortfolioBlog() {
    const [index, setIndex] = useState(-1);
    const photos = [
        { src: `${Photo1}` },
        { src: `${Photo2}` },
        { src: `${Photo3}` },
        { src: `${Photo4}` },
        { src: `${Photo5}` },
        { src: `${Photo6}` },
        { src: `${Photo7}` },
        { src: `${Photo8}` },
        { src: `${Photo9}` },
        { src: `${Photo10}` },
    ];
    const zoomRef = useRef(null);

    return (
        <div className='max-blog-width cont--blog-post'>
            <h1 className='title--blog'>Rooted: Photography Final Portfolio</h1>
            <Tags tags={['Film Photography']} />
            <h2 className='upper-line'>Description</h2>
            <p>This photography portfolio is a lyrical documentary that captures moments and objects around my grandparents' house, my parents' house, my sister's house, and Columbia. Through these photos, I aim to portray the atmosphere surrounding my dysfunctional family through photos that convey growth, disrepair, and repair. The photos in this portfolio are taken with a documentary-style approach, capturing moments in my life, using natural light and minimal posing to maintain the authenticity of each photo.
            </p>
            <p>
                As a lyrical documentary, this portfolio is also a visual narrative that captures the essence of my family's dynamics. Each photo symbolizes an aspect of our lives, whether it is the growth of a new generation, disrepair to cultural and generation conflicts, or how we adapt to what life gives us. Through this portfolio, I hope to convey the uncertainty that my family has faced, but also a sense of resilience for what the generations of my family went through.
            </p>
            <h2>#1</h2>
            <div className='cont--blog-img'>
                <img
                    className="full-width-img lightbox-img"
                    src={Photo1}
                    alt="black and white photograph of 6 dilapidated houses"
                    onClick={() => setIndex(0)}
                />
                <span className='span--image-caption'>(Click to enlarge)</span>
            </div>
            <h2>#2</h2>
            <div className='cont--blog-img'>
                <img
                    className="small-width-img lightbox-img"
                    src={Photo2}
                    alt="black and white photograph of a shovel"
                    onClick={() => setIndex(1)}
                />
                <span className='span--image-caption'>(Click to enlarge)</span>
            </div>
            <h2>#3</h2>
            <div className='cont--blog-img'>
                <img
                    className="full-width-img lightbox-img"
                    src={Photo3}
                    alt="black and white photograph of a field with tall grass and trees"
                    onClick={() => setIndex(2)}
                />
                <span className='span--image-caption'>(Click to enlarge)</span>
            </div>
            <h2>#4</h2>
            <div className='cont--blog-img'>
                <img
                    className="small-width-img lightbox-img"
                    src={Photo4}
                    alt="black and white photograph of childrens items left on the curb"
                    onClick={() => setIndex(3)}
                />
                <span className='span--image-caption'>(Click to enlarge)</span>
            </div>
            <h2>#5</h2>
            <div className='cont--blog-img'>
                <img
                    className="full-width-img lightbox-img"
                    src={Photo5}
                    alt="black and white photograph of chicken coop in the woods"
                    onClick={() => setIndex(4)}
                />
                <span className='span--image-caption'>(Click to enlarge)</span>
            </div>
            <h2>#6</h2>
            <div className='cont--blog-img'>
                <img
                    className="small-width-img lightbox-img"
                    src={Photo6}
                    alt="black and white photograph of a plan on an outdoor table"
                    onClick={() => setIndex(5)}
                />
                <span className='span--image-caption'>(Click to enlarge)</span>
            </div>
            <h2>#7</h2>
            <div className='cont--blog-img'>
                <img
                    className="full-width-img lightbox-img"
                    src={Photo7}
                    alt="black and white photograph of a chicken"
                    onClick={() => setIndex(6)}
                />
                <span className='span--image-caption'>(Click to enlarge)</span>
            </div>
            <h2>#8</h2>
            <div className='cont--blog-img'>
                <img
                    className="small-width-img lightbox-img"
                    src={Photo8}
                    alt="black and white photograph of a chicken"
                    onClick={() => setIndex(7)}
                />
                <span className='span--image-caption'>(Click to enlarge)</span>
            </div>
            <h2>#9</h2>
            <div className='cont--blog-img'>
                <img
                    className="full-width-img lightbox-img"
                    src={Photo9}
                    alt="black and white photograph of a chicken"
                    onClick={() => setIndex(8)}
                />
                <span className='span--image-caption'>(Click to enlarge)</span>
            </div>
            <h2>#10</h2>
            <div className='cont--blog-img'>
                <img
                    className="small-width-img lightbox-img"
                    src={Photo10}
                    alt="black and white photograph of a chicken"
                    onClick={() => setIndex(9)}
                />
                <span className='span--image-caption'>(Click to enlarge)</span>
            </div>
            <Lightbox
                slides={photos}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                plugins={[Zoom]}
                zoom={{ ref: zoomRef }}
            />
        </div>
    )
}