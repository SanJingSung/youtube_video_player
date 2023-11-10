import React from 'react';
import { VIDEOS_WATCHED_TEXT } from '../../constants/Strings';

const VideoCount = ({ count }) => (<div className="mt-3 text-left h3">{VIDEOS_WATCHED_TEXT} {count}</div>);

export default VideoCount;

