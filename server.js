const express = require('express');
const app = express();
const port = process.env.PORT || 9999;

const Docker = require('dockerode');
const docker = new Docker({socketPath: '/var/run/docker.sock'});

app.get('/containers', (req, res) => {
    docker.listContainers((err, containers) => {
        if (err) {
            res.status(500);
            res.json({error: error.message});
        } else {
            res.json(containers);
        }
    });
});

app.listen(port, () => {
    console.log(`listening on ${port}`);
});

