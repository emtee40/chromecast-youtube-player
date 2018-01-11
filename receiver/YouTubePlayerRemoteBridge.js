import { YouTubeMessage } from "./YouTubeMessage.js";

function YouTubePlayerRemoteBridge(communicationConstants, communicationChannel) {

    function sendYouTubeIframeAPIReady() {
        communicationChannel.sendMessage(new YouTubeMessage(communicationConstants.IFRAME_API_READY))
    }

    function sendReady() {
        communicationChannel.sendMessage(new YouTubeMessage(communicationConstants.READY))
    }

    function sendStateChange(data) {
        communicationChannel.sendMessage(new YouTubeMessage(communicationConstants.STATE_CHANGED, data))
    }

    function sendPlaybackQualityChange(data) {
        communicationChannel.sendMessage(new YouTubeMessage(communicationConstants.PLAYBACK_QUALITY_CHANGED, data))
    }

    function sendPlaybackRateChange(data) {
        communicationChannel.sendMessage(new YouTubeMessage(communicationConstants.PLAYBACK_RATE_CHANGED, data))
    }

    function sendError(data) {
        communicationChannel.sendMessage(new YouTubeMessage(communicationConstants.ERROR, data))
    }

    function sendApiChange() {
        communicationChannel.sendMessage(new YouTubeMessage(communicationConstants.API_CHANGED))
    }

    function sendVideoCurrentTime(data) {
        communicationChannel.sendMessage(new YouTubeMessage(communicationConstants.VIDEO_CURRENT_TIME, data))
    }

    function sendVideoDuration(data) {
        communicationChannel.sendMessage(new YouTubeMessage(communicationConstants.VIDEO_DURATION, data))
    }
    
    function sendVideoId(data) {
        communicationChannel.sendMessage(new YouTubeMessage(communicationConstants.VIDEO_ID, data))
    }

    function sendMessage(data) {
        communicationChannel.sendMessage(new YouTubeMessage(communicationConstants.MESSAGE, data))
    }

    return {
        sendYouTubeIframeAPIReady: sendYouTubeIframeAPIReady,
        sendReady: sendReady,
        sendStateChange: sendStateChange,
        sendPlaybackQualityChange: sendPlaybackQualityChange,
        sendPlaybackRateChange: sendPlaybackRateChange,
        sendError: sendError,
        sendApiChange: sendApiChange,
        sendVideoCurrentTime: sendVideoCurrentTime,
        sendVideoDuration: sendVideoDuration,
        sendVideoId: sendVideoId,
        sendMessage: sendMessage
    }
}

export default YouTubePlayerRemoteBridge;