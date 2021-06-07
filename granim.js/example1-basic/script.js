var granimInstance = new Granim({
    element: '#canvas-basic',
    direction: 'diagonal',
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#ff9966', '#ff5e62'],
                ['#00f260', '#0575E6'],
                ['#e1eec3', '#f05053']

                
            ]
        }
    }
});