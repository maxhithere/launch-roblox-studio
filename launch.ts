import childProcess from 'child_process'

    childProcess.exec('%LOCALAPPDATA%\\Roblox\\Versions\\RobloxStudioLauncherBeta.exe - ide', function(err: Error) {
            console.log('Launching Roblox Studio..');
            if (err) {
                console.log('Error Launching: ', err);
            }
    
    })
