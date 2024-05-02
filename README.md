# SMH to Hacker News Redirect Chrome Extension

This Chrome Extension automatically redirects you from the Sydney Morning Herald (https://smh.com.au) to Hacker News (https://news.ycombinator.com) whenever you attempt to visit any page on the SMH domain.

## Features

- Seamless redirection from SMH to Hacker News
- Utilizes the `declarativeNetRequest` API for efficient request handling
- Compatible with Chrome's Manifest V3

## Installation

To install and use this Chrome Extension, follow these steps:

1. Clone or download this repository to your local machine.

2. Open the Chrome browser and navigate to `chrome://extensions`.

3. Enable "Developer mode" by toggling the switch in the top right corner of the Extensions page.

4. Click on the "Load unpacked" button that appears after enabling Developer mode.

5. Browse to the directory where you cloned or downloaded this repository and select the root folder.

6. The "SMH to Hacker News Redirect" extension should now be loaded and visible in your extensions list.

7. Ensure that the extension is enabled by checking the toggle switch next to its name.

That's it! The extension is now active, and whenever you attempt to visit any page on the Sydney Morning Herald domain (https://smh.com.au), you will be automatically redirected to Hacker News (https://news.ycombinator.com).

## How It Works

This Chrome Extension leverages the `declarativeNetRequest` API introduced in Manifest V3. It defines a redirection rule in the `redirect_rule.json` file, which specifies the condition for matching requests to the SMH domain and the corresponding action to redirect those requests to Hacker News.

The `manifest.json` file declares the necessary permissions and specifies the path to the `redirect_rule.json` file.

When a request is made to any page on the SMH domain, the extension's redirection rule is triggered, and the request is seamlessly redirected to Hacker News.

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository on GitHub.

2. Create a new branch with a descriptive name for your feature or bug fix.

3. Make your changes and commit them with clear and concise commit messages.

4. Push your changes to your forked repository.

5. Submit a pull request to the main repository, explaining your changes and why they should be merged.

## License

This project is open-source and available under the [MIT License](LICENSE).

---

Feel free to customize this README file based on your specific extension and add any additional sections or information that you think would be helpful for users.
