import { ReactPhotoCollage } from "react-photo-collage";

const settings = {
    width: '600px',
    height: ['250px', '170px'],
    layout: [1, 4],
    photos: [],
    showNumOfRemainingPhotos: false
};


const Collage = props => {
    console.log(props.object)
    if (props.object) {
        for (let i = 0; i < props.object.images.length; i++) {
            settings.photos.push({source: props.object.images[i]});   
        }
    }
    

    console.log(settings)

    return (
        <ReactPhotoCollage {...settings} />
    );
}

export default Collage