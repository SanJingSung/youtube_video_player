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
                <div className="col-md-7 d-flex flex-column h-100">
                    <div className="d-flex mb-3">
                        <SearchBar />
                    </div>
                    <VideoPlayer />
                    <div className="d-flex justify-content-between align-items-center mt-3">
                        <VideoTitle video={selectedVideo} />
                        <DetailsButton video={selectedVideo} isVideoSelected={selectedVideo} videos={videos} videoCount={videoCount} />
                    </div>
                </div>
                <div className="col d-flex flex-column justify-content-between">
                    <SearchButton onSearchClick={handleSearch} />
                    <div className='d-flex flex-column h-100'>
                        <VideoList videos={videos} onVideoSelect={onVideoSelect} />
                    </div>
                    <VideoCount className="" count={videoCount} />
                </div>
            </div>
        </div>
    );
}

export default MainScreen;






