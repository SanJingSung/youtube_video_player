import React, { useState, useEffect } from 'react';
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
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        const savedVideos = sessionStorage.getItem('videos');
        const savedVideoCount = sessionStorage.getItem('videoCount');
        const savedSelectedVideo = sessionStorage.getItem('selectedVideo');

        if (savedVideos) {
            setVideos(JSON.parse(savedVideos));
        }
        if (savedVideoCount) {
            setVideoCount(JSON.parse(savedVideoCount));
        }
        if (savedSelectedVideo) {
            setSelectedVideo(JSON.parse(savedSelectedVideo));
        }
    }, []);

    const onSearchSubmit = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        setVideos(response.data.items);
        setSelectedVideo(response.data.items[0]);
        setVideoCount(videoCount + 1);
    };

    const onVideoSelect = (video) => {
        setSelectedVideo(video);
        setSearchTerm(video.snippet.title);
        onSearchSubmit(video.snippet.title);
    };

    return (
        <div className="container-fluid mt-2">
            <div className="row h-100">
                <div className="col-md-7 d-flex flex-column h-100">
                    <div className="d-flex mb-3">
                        <SearchBar onSearchSubmit={onSearchSubmit} setSearchTerm={setSearchTerm} />
                    </div>
                    <VideoPlayer video={selectedVideo} />
                    <div className="d-flex justify-content-between align-items-center mt-3">
                        <VideoTitle video={videos[0]} />
                        <DetailsButton video={selectedVideo} isVideoSelected={selectedVideo} videoCount={videoCount} videos={videos} />
                    </div>
                </div>
                <div className="col d-flex flex-column justify-content-between">
                    <SearchButton onSearchClick={() => onSearchSubmit(searchTerm)} />
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





