# Developers Guide

## Table of Contents
1. [Project Overview](#project-overview)
2. [About Bifold](#about-bifold)
3. [Setup](#setup)
4. [Running the Application](#running-the-application)
   - [Android Device or Emulator](#running-on-an-android-device-or-emulator)
   - [iOS Device](#running-the-application-on-an-ios-device)
5. [Project Structure](#project-structure)
6. [Pro Tips](#pro-tips)

---

## Project Overview

This application is a user-friendly mobile agent built with **React Native**, utilizing the **Aries Framework JavaScript (AFJ)** to exchange verifiable credentials with other agents. While AFJ manages most of the verifiable credential operations, this application focuses on providing an intuitive user experience for interacting with these credentials.

### Key Points to Note
- **Rust Libraries:** The AFJ uses Rust libraries, specifically **Indy-SDK**, which are compiled into native code. These will soon be replaced by **Indy-VDR** and **AnonCreds-rs**.
- **Cross-Compatibility:** The application is compatible with both iOS and Android devices/emulators but cannot run on iOS simulators.
- **Communication Protocols:** The application uses **ZMQ protocol** to interact with Indy ledgers and **HTTP/WebSockets** for communicating with Aries agents.
- **Mediator Service:** The app utilizes a mediator service that relays messages between the agent and the app, essential due to mobile devices having dynamic IP addresses.

---

## About Bifold

**Bifold** is a core part of this project, leveraging the Aries Framework JavaScript to provide users with a seamless experience in managing and exchanging verifiable credentials on their mobile devices. The app bridges the gap between the user and the digital world, offering secure and efficient credential management.

---

## Setup

The setup process is similar to other React Native applications. Follow these steps to set up your development environment and configuration.

### Prerequisites

- **Yarn:** This project uses [yarn](https://yarnpkg.com). Install it globally if you don't already have it:

    ```sh
    npm install -g yarn
    ```

- **Node:** Install the version compatible with this project using [nvm](https://github.com/nvm-sh/nvm):

    ```sh
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash

    export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

    nvm install 18.18
    nvm use 18.18
    ```

- **Development Environments:** Install [Android Studio](https://developer.android.com/studio) for Android or [Apple Xcode](https://developer.apple.com/xcode/) for iOS.

### Install Dependencies

From the root directory of the cloned repository, install all package dependencies:

```sh
yarn install
```

### Build the Project

Some packages need to be transpiled before use:

```sh
yarn run build
```

### Set Up the Mediator

The application requires a mediator for communication. Create a `.env` file to configure it:

```sh
touch packages/legacy/app/.env
```

Add the mediator URL to this file:

```text
MEDIATOR_URL=https://public.mediator.indiciotech.io?c_i=...
```

You can use the provided public mediator or set up your own. For more information, refer to [Aries Mediator Service](https://github.com/hyperledger/aries-mediator-service).

---

## Running the Application

### Running on an Android Device or Emulator

#### Using Android Studio
1. Open **Android Studio**.
2. Select `File -> Open` and navigate to `packages/legacy/app/android`.
3. Select a device/emulator and click the green 'Play' button.

#### Using Command Line (Linux)
1. **List Available Emulators:**

    ```sh
    ~/Android/Sdk/emulator/emulator -list-avds
    ```

2. **Start an Emulator:**

    ```sh
    ~/Android/Sdk/emulator/emulator -avd Pixel_5_API_25 -netdelay none -netspeed full
    ```

3. **Start Metro:**

    ```sh
    cd packages/legacy/app
    yarn start
    ```

4. **Set Environment Variables:**

    ```sh
    export JAVA_HOME=~/android-studio/jre
    export ANDROID_HOME=~/Android/Sdk
    ```

5. **Run the App:**

    ```sh
    yarn run android
    ```

### Running the Application on an iOS Device

> Note: The app must run on a physical iOS device, not a simulator.

1. **Install Cocoapods:**

    ```sh
    brew install cocoapods
    ```

2. **Install Dependencies:**

    ```sh
    cd packages/legacy/app/ios
    pod install
    ```

3. **Open the Workspace in Xcode:**

    ```sh
    open packages/legacy/app/ios/ariesbifold.xcworkspace
    ```

4. **Run the App:** In Xcode, select your device and click the 'Play' button.

---

## Project Structure

To learn about the project structure, refer to [Project Structure](./project-structure.md).

---

## Pro Tips 🤓

- **MacOS ARM64:** Check [DEVELOPER_MACOS_arm64.md](./DEVELOPER_MACOS_arm64.md) if using a Mac with ARM64.
- **Android Emulator:** Avoid using `~/Android/Sdk/tools/emulator` as it may not support newer SDK versions.
- **Data Partition:** Use `-partition-size 1024` to extend the emulator's data partition.
- **Communication:** Allow Android emulator communication with Metro on port `tcp:8097`.

---

This README provides all the essential information to set up, run, and contribute to the project. Explore the source code and consider contributing to enhance this application!
