## Debugging locally

1. Run the watch task using `npm run watch`
2. Start a server in the output directory. It's recommended to use the [Live Server extension](https://marketplace.visualstudio.com/items/?itemName=ritwickdey.LiveServer) in VSCode.
3. In a browser, navigate to the project you're working on

## Building apps

To build all apps, use `npm run build` which will build all apps in the `src/` directory. 

Built files will be output to the `output` directory, which are ready to be copied to your device.

## Installation

To install an app, copy the respective app folder and `.sh` to the `documents` folder on your device.

E.g to install hangman, you would copy the following files:
- output/hangman/
    - hangman.sh
    - hangman/
        - assets/
            - ...
        - css/
            - ...
        - img/
            - ...
        - js/
            - ...
        - config.xml
        - ...