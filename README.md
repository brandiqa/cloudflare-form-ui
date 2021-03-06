# CLOUDFLARE FORM UI

A React form UI that uses [Cloudflare Workers](https://workers.cloudflare.com/) service to handle form submissions and email notifications. See [Cloudflare Form Service](https://github.com/brandiqa/cloudflare-form-service) project.

Read tutorial on [SitePoint](https://www.sitepoint.com/).

## Prerequisites

- [Node.js](https://nodejs.org/en/download/)

## Setup, Run and Build

Create the file `.env` and place your form endpoint URL

```env
VITE_FORM_ENDPOINT_URL=<place your workers application URL here>
```

Next execute the following commands:

```bash
# Install package dependencies
npm install

# Run dev server
npm run dev

# Build application
npm build

# Run production server
npm run serve
```

## Deploy

Deploy to [Cloudflare Pages](https://pages.cloudflare.com/) using the following build settings:

- **Build command**: `npm run build`
- **Build folder**: `dist`
- **Environment variable**: `VITE_FORM_ENDPOINT_URL=<workers url>`

## License

SitePoint's code archives and code examples are licensed under the MIT license.

Copyright © 2021 SitePoint

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
