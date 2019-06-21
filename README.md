# Download Button

React componen - Download Button
Lets you download file locally on you machine

Install:
```
npm install downloads-button
```

Exampale
```
import React from 'react';
import DownloadButton from 'downloads-button';

export default (props) => {
  return (
    <DownloadButton data={array} fileName="mySecretInfo">Download</DownloadButton>
  );
};
```

Props
```
data - array of your info you want to download;
fileName - name of a file
```

