import socket from '../../../util/socket';

export const unsubscribeData = () => {
	return (dispatch) => {
        socket.unSubscribeData();
    }
}