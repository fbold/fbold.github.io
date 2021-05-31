

const settings = {
    width: '600px',
    height: ['250px', '170px'],
    layout: [1, 4],
    photos: [],
    showNumOfRemainingPhotos: false
};



const Collage = props => {
    console.log(props.object)
    var images = []
    if (props.object) {
        for (let i = 0; i < props.object.images.length; i++) {
            images.push(
                <img src={props.object.images[i]} alt="" className="block w-full h-auto border-3 border-indigo-200 top-0"/>
            )
        }
    }
    

    console.log(settings)

    return (
        <div className="flex">
            <div className="flex flex-col items-start relative my-2 px-1 lg:px-6 lg:py-3 w-full h-auto">
                {images}
            </div>
            <div className="flex flex-col items-start relative my-2 px-1 lg:px-6 lg:py-3 w-full h-auto">
                {images}
            </div>
        </div>
    );
}

export default Collage