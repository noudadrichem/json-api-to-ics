# 📆 JSON api to ICS feed

> Made for Indicium SV at Hogeschool Utrecht

Basically parses an array of event objects to an ICS feed using some npm packages.
A function is made to link it to our events endpoint and parse it to the right object.

Don't know what an ICS feed is? Check out [this link](https://en.wikipedia.org/wiki/ICalendar)

### Install
```bash
npm install

# run dev env
npm run dev
```

### Build
```bash
# build
docker build -t jsonics .

# run
docker run -p 9099:[LOCALPORT] jsonics
```

### To do
- dockerize
- make subscription url
