import React, { useState } from 'react';
import SearchBar from './SearchBar';
import VideoPlayer from './VideoPlayer';
import VideoTitle from './VideoTitle';
import VideoList from './VideoList';
import VideoCount from './VideoCount';
import SearchButton from './SearchButton';
import DetailsButton from './DetailsButton';
import youtube from '../../api/youtube';

function MainScreen() {
    const [videos, setVideos] = useState([]);
    const [videoCount, setVideoCount] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');


    const onSearchSubmit = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        })
        console.log(response);
        setVideos(response.data.items);
        setVideoCount(videoCount + 1);
    };

    return (
        <div className="container-fluid mt-3 mb-3">
            <div className="row h-100">
                <div className="col-md-8 d-flex flex-column">
                    <div className="d-flex mb-3">
                        <SearchBar onSearchSubmit={onSearchSubmit} setSearchTerm={setSearchTerm} />
                    </div>
                    <VideoPlayer video={videos[0]} />
                    <div className="d-flex justify-content-between align-items-center mt-3">
                        <VideoTitle video={videos[0]} />
                        <DetailsButton />
                    </div>
                </div>
                <div className="col d-flex flex-column justify-content-between">
                    <SearchButton onSearchClick={() => onSearchSubmit(searchTerm)} />
                    <VideoList videos={videos} />
                    <VideoCount className="" count={videoCount} />
                </div>
            </div>
        </div>
    );
}

export default MainScreen;





