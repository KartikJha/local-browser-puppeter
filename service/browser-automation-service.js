const { isEmpty, get, wrap } = require("lodash");
const { wrapServiceResult } = require("../utils/common");
const messages = require("../utils/messages");
const { entity, tradeType , supportedBrowserList} = require("../constants");
const { exec, spawn, spawnSync, execSync } = require('child_process');
// const 

async function closeHandler(err, stdout, stderr) {
    console.log(err.message);
    console.log(stdout);
    console.log(stderr);
}

async function stdOutHandler(data) {
    console.log(data);
    return data;
}

async function stdErrHandler(data) {
    console.log(data);
    return data;
}

function getExecuteableCommand(path) {
    return ['open', ['-a', 'Google Chrome']];
}

async function openBrowser({
    path = "",
    browserName = ""
}) {
    if (!browserName) {
        return wrapServiceResult(null, `Browser name should be ${supportedBrowserList.join(' ,')}`)
    }
    const executableCommand = getExecuteableCommand(path);
    const cp = spawnSync(...executableCommand);
    // cp.on('close', closeHandler);
    // cp.stdout.on('data', stdOutHandler);
    // cp.sterr.on('data', stdErrHandler);
    return wrapServiceResult(`${browserName}:${cp.pid}`, []);
}


module.exports = {
    openBrowser
}