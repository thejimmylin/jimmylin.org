---
title: Use Fira Code in VSCode
subtitle: Fira Code is a monospaced font that is easier to code with.
---

# Use Fira Code in VSCode

[Fira Code](https://github.com/tonsky/FiraCode) is a monospaced font that is easier to code with.

To use it with VSCode, you need to:

1. Install the font.

   To install it, I recommend to install it with [homebrew](https://brew.sh/),

   ```bash
   brew tap homebrew/cask-fonts
   brew install --cask font-fira-code
   ```

   or, with [chocolatey](https://chocolatey.org/) if you are on Windows.

   ```
   choco install firacode
   ```
2. After installing it, you should probably reboot to get the font loaded.

3. Configure your VSCode settings.

   ```json
   {
      "editor.fontFamily": "Fira Code",
   }
   ```

   Optionally, you may want to enable "font ligatures".
   
   It is a technique about how fonts would be shown, which makes something like making `=` and `>` shown as a `=>`:

   This case, you should do:

   ```json
   {
      "editor.fontFamily": "Fira Code",
      "editor.fontLigatures": true,
   }
   ```

4. Done! Enjoy your new font with VSCode.