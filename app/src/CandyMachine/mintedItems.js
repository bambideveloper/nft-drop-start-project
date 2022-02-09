import React, {useEffect, useState} from 'react';


const MintedItems = ({uri}) => {
    const [imgUrl, setImgUrl] = useState("");
    const [altVal, setAltVal] = useState("");

    const getImageURL = (imageUrl) => {
        fetch(imageUrl).then(res => res.json()).then(mintMetaData => {
            console.log(mintMetaData);
            setImgUrl(mintMetaData.image);
            setAltVal(mintMetaData.name);
        })
    }

    useEffect(() => {
        getImageURL(uri);
    }, [uri])

    return <div>
        { imgUrl !== "" && 
            <img alt={altVal} src={imgUrl} /> }
    </div>;
}

export default MintedItems;