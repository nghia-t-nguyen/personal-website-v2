import Tags from '../components/Tags'
import './BlogPost.css'
import Art1 from '../assets/images/MiscGallery/art_1.png'
import Art2 from '../assets/images/MiscGallery/art_2.png'
import Art3 from '../assets/images/MiscGallery/art_3.png'
import Art4 from '../assets/images/MiscGallery/art_4.png'
import Art5 from '../assets/images/MiscGallery/art_5.png'
import Art6 from '../assets/images/MiscGallery/art_6.png'
import Art7 from '../assets/images/MiscGallery/art_7.jpg'
import Art8 from '../assets/images/MiscGallery/art_8.gif'
import Art9 from '../assets/images/MiscGallery/art_9.jpg'
import { useState, useRef } from 'react'
import { ColumnsPhotoAlbum } from "react-photo-album";
import "react-photo-album/columns.css";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

export default function MiscGalleryBlog() {
    const [index, setIndex] = useState(-1);
    const photos = [
        { src: `${Art1}`, width: 800, height: 1000 },
        { src: `${Art2}`, width: 800, height: 1000 },
        { src: `${Art3}`, width: 800, height: 1000 },
        { src: `${Art4}`, width: 800, height: 1200 },
        { src: `${Art5}`, width: 800, height: 1200 },
        { src: `${Art6}`, width: 800, height: 1200 },
        { src: `${Art7}`, width: 1800, height: 1200 },
        { src: `${Art8}`, width: 480, height: 480 },
        { src: `${Art9}`, width: 1800, height: 1200 },
    ];
    const zoomRef = useRef(null);

    return (
        <div className='max-blog-width cont--blog-post'>
            <h1 className='title--blog'>Miscellaneous Art Gallery</h1>
            <Tags tags={['Illustration', 'Photography', 'Crafts']} />
            <div className='gallery-container upper-line'>
                <ColumnsPhotoAlbum
                    photos={photos}
                    onClick={({ index }) => setIndex(index)}
                />
                <Lightbox
                    slides={photos}
                    open={index >= 0}
                    index={index}
                    close={() => setIndex(-1)}
                    plugins={[Zoom]}
                    zoom={{ ref: zoomRef }}
                />
            </div>
        </div>
    )
}