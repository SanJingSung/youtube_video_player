import React, { useContext } from 'react';
import { VideoContext } from '../../contexts/VideoContext';
import SearchBar from './SearchBar';
import VideoPlayer from './VideoPlayer';
import VideoTitle from './VideoTitle';
import VideoList from './VideoList';
import VideoCount from './VideoCount';
import SearchButton from './SearchButton';
import DetailsButton from './DetailsButton';

function MainScreen() {
    const { videos, videoCount, onVideoSelect, selectedVideo, handleSearch } = useContext(VideoContext);

    return (
        <div className="container-fluid mt-2">
            <div className="row h-100">
                <div className="col-xs-12 col-md-7 d-flex flex-column h-md-100">
                    <div className="d-flex mb-3">
                        <SearchBar />
                    </div>
                    <div className="d-block d-md-none mt-2">
                        <SearchButton onSearchClick={handleSearch} />
                    </div>
                    <VideoPlayer />
                    <div className="d-flex justify-content-between align-items-center mt-3">
                        <VideoTitle video={selectedVideo} />
                        <DetailsButton video={selectedVideo} />
                    </div>
                </div>
                <div className="col-xs-12 col-md-5 d-flex flex-column justify-content-between">
                    <div className="d-none d-md-block">
                        <SearchButton onSearchClick={handleSearch} />
                    </div>
                    <div className='d-flex flex-column h-md-100 overflow-auto'>
                        <VideoList videos={videos} onVideoSelect={onVideoSelect} />
                    </div>
                    <VideoCount count={videoCount} />
                </div>
            </div>
        </div>
    );
}

export default MainScreen;







