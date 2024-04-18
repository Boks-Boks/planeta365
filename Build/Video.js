navigator.mediaDevices.getUserMedia({ video: true })
    .then(function(stream) {
        var videoElement = document.createElement('video');
        videoElement.srcObject = stream;
        videoElement.play();

        // Use videoElement as input for your AR application
    })
    .catch(function(error) {
        console.error('Error accessing camera:', error);
    });
