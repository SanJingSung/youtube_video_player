import React from 'react';
import SearchBar from './SearchBar';
import VideoPlayer from './VideoPlayer';
import VideoTitle from './VideoTitle';
import VideoList from './VideoList';
import VideoCount from './VideoCount';
import SearchButton from './SearchButton';
import DetailsButton from './DetailsButton';

function MainScreen() {
    return (
        <div className="container-fluid mt-3 mb-3">
            <div className="row h-100">
                <div className="col-md-8 d-flex flex-column">
                    <div className="d-flex mb-3">
                        <SearchBar />
                    </div>
                    <VideoPlayer />
                    <div className="d-flex justify-content-between align-items-center mt-3">
                        <VideoTitle />
                        <DetailsButton />
                    </div>
                </div>
                <div className="col d-flex flex-column justify-content-between">
                    <SearchButton />
                    <VideoList />
                    <VideoCount className="" count={17} />
                </div>
            </div>
        </div>
    );
}

export default MainScreen;





