# React Native Code Scanner 
React Native Code Scanner is a package designed to provide barcode scanning functionality within your React Native applications using the react-native-vision-camera library. With this package, you can easily integrate barcode scanning features into your mobile applications.

## Inspiration
React Native Code Scanner was inspired by react-native-vision-camera and @mgcrea/vision-camera-barcode-scanner, you are Awesome!<br />

## Installation

To install React Native Code Scanner,<br/>
you must to first to install: 
- `react-native-vision-camera`<br/>
- `react-native-worklets-core`<br/>
- `@mgcrea/vision-camera-barcode-scanner`<br/>
- `react-native-reanimated`<br/>

```
yarn add react-native-vision-camera
yarn add react-native-worklets-core
yarn add @mgcrea/vision-camera-barcode-scanner
yarn add react-native-reanimated
```
---- or via npm -----<br/>
```
npm i react-native-vision-camera
npm i react-native-worklets-core
npm i @mgcrea/vision-camera-barcode-scanner
npm i react-native-reanimated
```

Then you must follow worklets-core and reanimated respective installation instructions:

- [react-native-worklets-core](https://github.com/margelo/react-native-worklets-core#installation)
- [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started/)

Then run
```
npx pod-install
```

### iOS
To use the Camera you must first specify that your app requires camera permissions. <br/>
Open your project's `Info.plist` and add the following lines inside the outermost `<dict>` tag:

```
<key>NSCameraUsageDescription</key>
<string>$(PRODUCT_NAME) needs access to your Camera.</string>
```
### Android
```
<uses-permission android:name="android.permission.CAMERA" />
```


## Usage
Importing the Scanner Component</br>
```
import { CodeScanner } from 'react-native-code-scanner';
```

## Example Usage
```
<CodeScanner
  onReadCode={(barcode: string) => {
    console.log(barcode);
  }}
/>
```

## Props
onReadCode: Callback function triggered when a code is successfully scanned.

## Contributing
Contributions are welcome! If you find any issues or want to suggest improvements, feel free to open an issue or submit a pull request in the GitHub repository.

## License
React Native Code Scanner is licensed under the MIT License.
