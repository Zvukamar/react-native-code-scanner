# React Native Code Scanner 
React Native Code Scanner is a package designed to provide barcode scanning functionality within your React Native applications using the react-native-vision-camera library. With this package, you can easily integrate barcode scanning features into your mobile applications.

## Inspiration
React Native Code Scanner was inspired by react-native-vision-camera and @mgcrea/vision-camera-barcode-scanner, you are Awesome!<br />

## Installation

To install React Native Code Scanner, you need to first install `react-native-vision-camera`.<br/>
Or [here](https://github.com/mrousavy/react-native-vision-camera).

1.<br/>
`yarn add react-native-vision-camera`<br/>
---- or -----<br/>
`npm i react-native-vision-camera`<br/>

2.<br/>
`npx pod-install`

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
