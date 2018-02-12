# alfred-now

> Use [▲ZEIT now](https://zeit.co/now) within Alfred


## Install


```
$ npm install --global alfred-now
```

*Requires [Node.js](https://nodejs.org) 4+ and the Alfred [Powerpack](https://www.alfredapp.com/powerpack/).*

## Configuration

### Generate Now token

1. Go to your [Now tokens](https://zeit.co/account/tokens).
2. Under **Authorized Apps**, type a token name on the input **Create a new token by entering its name...** and press Enter.
3. Find your token name in the above list.
4. Click **copy**.

### Register environment variables through Alfred

1. Open Alfred Preferences.
2. Go to the Workflows tab.
3. Select **now**.
4. Open the variables panel by clicking the `Configure workflow and variables` [+] button on the right.
5. Fill the values
    - `token` : Previously copied Now token
6. Save

## Usage

In Alfred, type `now`, and select a command.

You can filter result by adding your query after the command.

Press <kbd>Cmd</kbd> to show additionnal information.


## License

MIT © [lucaperret](http://github.com/lucaperret)
