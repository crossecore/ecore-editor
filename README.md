
# Build
If you are using node v17+ please change the `package.json` like so:
```diff
"scripts": {
- "start": "rescripts start",
+ "start": "rescripts --openssl-legacy-provider start",
- "build": "rescripts build",
+ "build": "rescripts --openssl-legacy-provider build",
- "test": "rescripts test",
+ "test": "rescripts --openssl-legacy-provider test",
- "eject": "rescripts eject"
+ "eject": "rescripts --openssl-legacy-provider eject"
  }
```

```bash
yarn install
yarn build
yarn start
```

If you are using 


# Notes
Must use inversify@5.0.1