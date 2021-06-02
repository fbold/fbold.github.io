

const settings = {
    width: '600px',
    height: ['250px', '170px'],
    layout: [1, 4],
    photos: [],
    showNumOfRemainingPhotos: false
};



const Collage = props => {
    console.log(props.object)
    var imagesh = []
    var imagesv = []
    
    if (props.object) {
        for (let i = 0; i < props.object.images.horizontal.length; i++) {
                imagesh.push(
                    <img src={props.object.images.horizontal[i]} alt="" className="block w-full h-auto top-0"/>
                )
        }

        for (let i = 0; i < props.object.images.vertical.length; i++) {
            imagesv.push(
                <img src={props.object.images.vertical[i]} alt="" className="block w-full h-auto top-0"/>
            )
        }
    }
    

    console.log(settings)

    return (
        <div className="flex relative w-full m-auto flex-col md:flex-row h-auto pb-2 px-2 gap-2">
            <div className="block relative m-auto flex-col items-start gap-2">
                {imagesh}
            </div>
            {imagesv.length?<div className="flex relative flex-col items-start ">
                {imagesv}
            </div> : null}
            
        </div>
    );
}

export default Collage